---
title: 2026/01/03 APCS 臨時抱佛腳筆記
published: 2026-01-03
updated: 2026-01-30
description: '反正這裡會幫忙複習APCS觀念會用到的Python東西，還有一些題目可以練習。'
image: ''
tags: ["APCS", "Python"]
category: '筆記'
draft: false 
---
> [!NOTE]
> 本講義初稿由 [Perplexity](https://www.perplexity.ai/) 協助生成，由 [PGpenguin72](https://pg72.tw) 進行校稿、補充與修改。


# 目錄

[一. Python 基本規則](#一-python-基本規則)

[1. 變數與資料型態](#1-變數與資料型態)  
[2. 運算子](#2-運算子)  
[3. 條件判斷](#3-條件判斷)  
[4. 迴圈](#4-迴圈)  
[5. 函式](#5-函式)  
[6. 輸入輸出](#6-輸入輸出)  
[7. 常用內建函式](#7-常用內建函式)  
[8. 常見錯誤](#8-常見錯誤)  
[9. 重要觀念](#9-重要觀念)

[二. Python 基本工具](#二-python-基本工具)

[1. List (串列/數組)](#1-list-串列數組)  
[2. String (字串)](#2-string-字串)  
[3. 輸入輸出工具](#3-輸入輸出工具)  
[4. sorted() 和 sort()](#4-sorted-和-sort)  
[5. 其他工具](#5-其他工具)  
[6. 二維串列](#6-二維串列)  
[7. Dictionary (字典) - 重要!](#7-dictionary-字典---重要)  
[8. 字元與數字轉換](#8-字元與數字轉換)  
[9. Lambda 函式](#9-lambda-函式)

[三. APCS實作操作教學](#三-apcs實作操作教學)

[作答系統說明](https://apcs.csie.ntnu.edu.tw/index.php/systemdescription/)  
[系統環境](https://apcs.csie.ntnu.edu.tw/index.php/environment/)

[四. 題目實作](#四-題目實作)

[1. 初級題目](#初級)  
[2. 中級題目](#中級)

---

# 一. Python 基本規則

## 1. 變數與資料型態

### 基本型態
- `int` - 整數 (例: 5, -3, 0)
- `float` - 小數 (例: 3.14, -2.5)
- `str` - 文字 (例: "hello", 'world')
- `bool` - 對或錯 (True, False)

### 命名規則
- 只能用英文、數字、底線 `_`
- 不能以數字開頭
- 大小寫不一樣 (age 和 Age 是不同變數)
- 不能用特殊字 (if, for, while 等)

### 型態轉換
```python
x = int("123")      # 變成整數 123
y = float("3.14")   # 變成小數 3.14
z = str(42)         # 變成文字 "42"
```

## 2. 運算子

### 數學運算
- `+` 加
- `-` 減
- `*` 乘
- `/` 除 (結果有小數)
- `//` 除 (只要整數部分)
- `%` 餘數
- `**` 次方

### 比較運算
- `==` 等於
- `!=` 不等於  
- `>` 大於
- `<` 小於
- `>=` 大於等於
- `<=` 小於等於

### 邏輯運算
- `and` 且 (兩個都要是True)
- `or` 或 (至少一個是True)
- `not` 非 (反轉)


### 複合指定運算子
- `+=` 加並指定 (x += 3 等於 x = x + 3)
- `-=` 減並指定
- `*=` 乘並指定
- `//=` 整除並指定
- `%=` 餘數並指定

```python
x = 10
x += 5   # x 變成 15
x -= 3   # x 變成 12
x *= 2   # x 變成 24
x //= 4  # x 變成 6
x %= 4   # x 變成 2
```
## 3. 條件判斷

```python
if 條件:
    執行這裡  # 記得縮排!
elif 條件:
    執行這裡
else:
    執行這裡
```

**重要:** Python 用縮排(空格/Tab)來區分程式區塊，不用 `{}`

## 4. 迴圈

### for 迴圈
```python
for i in range(5):     # 0, 1, 2, 3, 4
    print(i)

for i in range(2, 5):  # 2, 3, 4
    print(i)
    
for i in range(0, 10, 2):  # 0, 2, 4, 6, 8
    print(i)
```

### for 可以走訪很多東西 (重要!)
```python
# 走訪 List
arr = [10, 20, 30]
for item in arr:
    print(item)           # 10, 20, 30

# 走訪字串
s = "Hello"
for char in s:
    print(char)           # H, e, l, l, o

# 走訪字典 (非常常用!)
student = {"name": "Alice", "age": 18}

# 方法1: 走訪 key
for key in student:
    print(key, student[key])

# 方法2: 走訪 key-value 對 (推薦!)
for key, value in student.items():
    print(f"{key}: {value}")
```

### while 迴圈
```python
while 條件:
    執行這裡
```

### 控制迴圈
- `break` - 跳出迴圈
- `continue` - 跳過這次，繼續下一次

## 5. 函式

```python
def 函式名稱(參數1, 參數2):
    # 執行一些事
    return 結果

# 使用函式
答案 = 函式名稱(10, 20)
```

## 6. 輸入輸出

### 輸入
```python
x = input()              # 讀取一行(是文字)
n = int(input())         # 讀取整數
f = float(input())       # 讀取小數
```

### 輸出  
```python
print("Hello")           # 印出並換行
print(x, y)              # 印多個，用空格分開
print(x, end="")         # 印完不換行
print(f"x={x}, y={y}")   # f-string 格式化輸出
```

### print 進階用法
```python
# sep - 分隔符 (預設是空格)
print(1, 2, 3, sep="-")      # 輸出: 1-2-3
print("A", "B", sep=", ")   # 輸出: A, B

# end - 結尾字元 (預設是換行)
print("Hello", end="")      # 不換行
print("World")               # 緊接在后面: HelloWorld

print("A", end=" | ")      # 輸出: A | 
print("B")                  # 輸出: B

# 同時使用 sep 和 end
for i in range(5):
    print(i, end=" ")        # 輸出: 0 1 2 3 4 
```

## 7. 常用內建函式

```python
len(x)          # 長度
max(a, b, c)    # 最大值
min(a, b, c)    # 最小值  
sum([1,2,3])    # 總和
abs(-5)         # 絕對值
range(n)        # 0 到 n-1 的數列
```

## 8. 常見錯誤

- `EOFError` - 檔案結尾(就沒有資料了)
- `SyntaxError` - 語法錯誤 (打錯字、忘記`:` 等)
- `IndentationError` - 縮排錯誤
- `NameError` - 變數名稱打錯或沒定義
- `TypeError` - 型態錯誤 (例: "5" + 3)
- `ValueError` - 值的錯誤 (例: int("abc"))
- `ZeroDivisionError` - 除以零
- `IndexError` - 索引超出範圍

## 9. 重要觀念

- **索引從 0 開始**: 第一個元素是 `[0]`
- **range(n)**: 生成 0 到 n-1，不包含 n
- **//**: 整數除法，直接捨掉小數，`7//2 = 3`
- **input()**: 一定回傳文字，要轉成數字要用 int() 或 float()
- **縮排很重要**: Python 用縮排來區分程式區塊

---

# 二. Python 基本工具

## 1. List (串列/數組)

### 建立和存取
```python
arr = [1, 2, 3, 4, 5]      # 建立串列
arr[0]                     # 取第一個: 1
arr[-1]                    # 取最後一個: 5
arr[1:3]                   # 切片: [2, 3] (索引 1~2)
```

### 常用方法
```python
arr.append(6)              # 加到最後: [1,2,3,4,5,6]
arr.pop()                  # 移除最後: [1,2,3,4,5]
arr.insert(0, 0)           # 在索引 0 插入 0
arr.remove(3)              # 移除第一個 3
len(arr)                   # 長度
arr.sort()                 # 排序(由小到大)
arr.reverse()              # 反轉
```

### 走訪 List
```python
for item in arr:           # 直接走訪元素
    print(item)

for i in range(len(arr)):  # 用索引走訪
    print(arr[i])
```

## 2. String (字串)

### 常用方法
```python
s = "Hello World"
s.lower()                  # 變小寫: "hello world"
s.upper()                  # 變大寫: "HELLO WORLD"
s.strip()                  # 去除前後空白
s.replace("H", "h")        # 取代: "hello World"
s.split()                  # 分割成 list: ["Hello", "World"]
len(s)                     # 長度: 11
s[0]                       # 取字元: 'H'
```

### 字串拼接
```python

#### 字串切片 (重要!)
```python
s = "Hello World"
s[0]       # 'H' - 第一個字元
s[6]       # 'W' - 第 7 個字元
s[-1]      # 'd' - 最後一個字元

# 切片 [start:end] - 取索引 start 到 end-1
s[0:5]     # "Hello" - 索引 0~4
s[6:11]    # "World" - 索引 6~10

# 省略 start 或 end
s[:5]      # "Hello" - 從開頭到索引 4
s[6:]      # "World" - 從索引 6 到結尾
s[2:]      # "llo World" - 從索引 2 到結尾
s[:-1]     # "Hello Worl" - 從開頭到倍數第 2 個

# 步長 [start:end:step]
s[::2]     # "HloWrd" - 每隔2個取一個
s[::-1]    # "dlroW olleH" - 反轉字串

a = "Hello"
b = "World"  
c = a + " " + b            # "Hello World"
d = f"{a} {b}"             # f-string: "Hello World"
```

## 3. 輸入輸出工具

### 讀取多個值
```python
# 讀取一行多個數字
a, b = map(int, input().split())        # 輸入: "3 5" -> a=3, b=5

# 讀取一行成 list
arr = list(map(int, input().split()))   # 輸入: "1 2 3" -> [1,2,3]

# 讀取多行
lines = []
for i in range(n):
    lines.append(input())
```

### 輸出格式
```python
print(*arr)                # 把 list 用空格印出
print(arr[0], arr[1])      # 分開印
print(f"{x} {y}")          # 格式化印出
```

## 4. sorted() 和 sort()

```python
arr = [3, 1, 4, 2]

# sorted() - 回傳新的，不改原 list
new_arr = sorted(arr)      # new_arr = [1,2,3,4], arr 不變

# sort() - 直接改原 list
arr.sort()                 # arr 變成 [1,2,3,4]

# 反向排序
arr.sort(reverse=True)     # [4,3,2,1]
```

## 5. 其他工具

### enumerate - 同時取索引和值
```python
arr = ['a', 'b', 'c']
for i, val in enumerate(arr):
    print(i, val)          # 0 a, 1 b, 2 c
```

### zip - 同時走訪多個 list
```python
a = [1, 2, 3]
b = ['a', 'b', 'c']
for x, y in zip(a, b):
    print(x, y)            # 1 a, 2 b, 3 c  
```

## 6. 二維串列

```python
# 建立 3x3 矩陣
matrix = [[0]*3 for _ in range(3)]

# 存取元素
matrix[0][0] = 1
print(matrix[0][0])        # 1

# 走訪
for i in range(len(matrix)):
    for j in range(len(matrix[0])):
        print(matrix[i][j])
```

**注意:** 不要用 `[[0]*3]*3`，這會造成錯誤！


## 7. Dictionary (字典) - 重要!

### 基本用法
```python
# 建立字典
student = {"name": "Alice", "age": 18, "score": 95}

# 取值
print(student["name"])      # "Alice"
print(student.get("age"))   # 18

# 新增/修改
student["grade"] = "A"       # 新增
student["age"] = 19          # 修改

# 刪除
del student["score"]

# 檢查是否存在
if "name" in student:
    print("有 name")
```

### 走訪字典 (重要!)
```python
# 走訪 key
for key in student:
    print(key, student[key])

# 走訪 key-value 對
for key, value in student.items():
    print(f"{key}: {value}")

# 只走訪值
for value in student.values():
    print(value)

# 只走訪 key
for key in student.keys():
    print(key)
```

## 8. 字元與數字轉換

```python
# chr() - 數字轉字元 (ASCII/Unicode)
chr(65)         # 'A'
chr(97)         # 'a'
chr(48)         # '0'

# ord() - 字元轉數字
ord('A')        # 65
ord('a')        # 97
ord('0')        # 48

# bin() - 轉二進位
bin(10)         # '0b1010'
bin(255)        # '0b11111111'

# join() - 把 list 合併成字串
"-".join(["a", "b", "c"])    # "a-b-c"
" ".join(["Hello", "World"])  # "Hello World"
"".join(['1','2','3'])        # "123"
```

## 9. Lambda 函式

Lambda 是一個簡單的匿名函式，常用於排序。

```python
# 基本語法
f = lambda x: x * 2
print(f(5))                  # 10

# 多個參數
add = lambda x, y: x + y
print(add(3, 4))             # 7

# 用於排序 (重要!)
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]

# 按名字排序
students.sort(key=lambda x: x[0])

# 按分數排序
students.sort(key=lambda x: x[1])

# 按分數由大到小
students.sort(key=lambda x: x[1], reverse=True)

# 多條件排序：先按分數，再按名字
students.sort(key=lambda x: (x[1], x[0]))
```

---

# 三. APCS實作操作教學
[作答系統說明](https://apcs.csie.ntnu.edu.tw/index.php/systemdescription/)

[系統環境](https://apcs.csie.ntnu.edu.tw/index.php/environment/)

---

# 四. 題目實作
---
## 初級
- [ ] [b964. 1. 成績指標 (2016年3月初級題目)](https://zerojudge.tw/ShowProblem?problemid=b964)
- [ ] [f312. 1. 人力分配 (2020年10月初級題目)](https://zerojudge.tw/ShowProblem?problemid=f312)
- [ ] [f579. 1. 購物車 (2020年7月初級題目)](https://zerojudge.tw/ShowProblem?problemid=f579)
- [ ] [g275. 1. 七言對聯 (2021年9月初級題目)](https://zerojudge.tw/ShowProblem?problemid=g275)
## 中級
- [ ] [b965. 2. 矩陣轉換 (2016年3月中級題目)](https://zerojudge.tw/ShowProblem?problemid=b965)
- [ ] [f580. 2. 骰子 (2020年7月中級題目)](https://zerojudge.tw/ShowProblem?problemid=f580)
- [ ] [f313. 2. 人口遷移 (2020年10月中級題目)](https://zerojudge.tw/ShowProblem?problemid=f313)
- [ ] [g276. 2. 魔王迷宮 (2021年9月初級題目)](https://zerojudge.tw/ShowProblem?problemid=g276)