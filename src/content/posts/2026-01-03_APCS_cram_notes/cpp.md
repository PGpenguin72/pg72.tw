---
title: C++
published: 2026-01-03
updated: 2026-03-05
description: '反正這裡會幫忙複習APCS觀念會用到的C++東西，還有一些題目可以練習。'
image: ''
ogImage: ''
tags: ["APCS", "C++"]
category: '筆記'
draft: false 
series:
  id: apcs_cram_note
  order: 2
---
:::important
本筆記由 [Perplexity](https://www.perplexity.ai/) 協助生成架構與內容，由 [PGpenguin72](https://pg72.tw) 進行簡易內容修改。
:::

# 目錄

- [一. C++ 基本規則](#一-c-基本規則)
  - [1. 程式架構與萬用頭檔](#1-程式架構與萬用頭檔)
  - [2. 變數與資料型態](#2-變數與資料型態)
  - [3. 運算子](#3-運算子)
  - [4. 條件判斷](#4-條件判斷)
  - [5. 迴圈](#5-迴圈)
  - [6. 函式](#6-函式)
  - [7. 輸入輸出](#7-輸入輸出)
  - [8. 常用內建函式](#8-常用內建函式)
  - [9. 常見錯誤與Debug](#9-常見錯誤與debug)
  - [10. 重要觀念與陷阱](#10-重要觀念與陷阱)
- [二. C++ 基本工具](#二-c-基本工具)
  - [1. vector (動態陣列)](#1-vector-動態陣列)
  - [2. string (字串)](#2-string-字串)
  - [3. 輸入輸出進階工具](#3-輸入輸出進階工具)
  - [4. sorted() 排序技巧](#4-sorted-排序技巧)
  - [5. enumerate/zip 等便利工具](#5-enumeratezip-等便利工具)
  - [6. 二維陣列/矩陣](#6-二維陣列矩陣)
  - [7. map (字典) - 超重要!](#7-map-字典---超重要)
  - [8. 字元與數字轉換](#8-字元與數字轉換)
  - [9. Lambda 函式與自訂排序](#9-lambda-函式與自訂排序)
- [三. APCS 競程實作模板](#三-apcs-競程實作模板)
- [四. 題目實作](#四-題目實作)
  - [初級](#初級)
  - [中級](#中級)

***

# 一. C++ 基本規則

## 1. 程式架構與萬用頭檔 ⭐⭐⭐

```cpp
#include <bits/stdc++.h>  // APCS萬用頭檔，一個包含全部常用函式庫
using namespace std;

int main() {
    // 競程必備：加速輸入輸出
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    // 你的程式碼寫在這裡
    
    return 0;
}
```

**為什麼要加這兩行？**
```
ios::sync_with_stdio(false);  // 關閉 C++ 和 C 輸入輸出的同步（提速5倍）
cin.tie(nullptr);             // 解除 cin 和 cout 的綁定（再提速）
```

**萬用頭檔包含：**
```cpp
// vector, string, map, algorithm(sort/max/min), iostream(cin/cout)
// numeric(accumulate), cmath(abs/pow), sstream(字串分割)...
```

## 2. 變數與資料型態

### 基本型態（APCS必背）
```
int         整數      ±2×10^9     考試90%用這個
long long   大整數    ±9×10^18    超過10^9必用！
double      小數      15位精度
char        單字元    'A'(65)
string      字串      "Hello"
bool        布林      true/false
```

### 宣告語法
```cpp
int x = 42;
long long big = 1e18;           // 科學記號法
double pi = 3.14159;
char ch = 'A';
string s = "Hello";
bool ok = true;

// 多變數同時宣告
int a = 1, b = 2, c = 3;
```

### 型態轉換（超重要！）
```cpp
// 字串轉數字
int x = stoi("123");           // string → int
long long n = stoll("999999999999");  // → long long
double f = stod("3.14");       // → double

// 數字轉字串
string s1 = to_string(42);     // "42"
string s2 = to_string(3.14);   // "3.14000"

// C風格強制轉型（常用）
double d = 7.9;
int i = (int)d;                // 7（直接截斷）
```

## 3. 運算子

### 數學運算（注意整數除法！）
```
+ - * / %  （沒有 **，用 pow()）
7 / 2 = 3   整數除法直接截斷！（Python要用 //）
7.0 / 2 = 3.5  只要一方是double就保留小數
```

```cpp
#include <cmath>
int pow_result = (int)pow(2, 10);  // 1024（注意回傳double）
```

### 比較與邏輯
```
== != > < >= <=
&&（且） ||（或） !（非）
```

### 複合指定 + 自增自減
```cpp
int x = 10;
x += 5;    // 15
x -= 3;    // 12  
x *= 2;    // 24
x /= 4;    // 6
x %= 4;    // 2
x++;       // 3（x += 1）
x--;       // 2（x -= 1）
```

## 4. 條件判斷

```cpp
if (x > 0) {
    cout << "正數";
} else if (x < 0) {
    cout << "負數";
} else {
    cout << "零";
}
```

**三元運算子（超方便）**
```cpp
string result = (x > 0) ? "正數" : "非正數";
int max_val = (a > b) ? a : b;
```

## 5. 迴圈

### for迴圈（對應Python range）
```cpp
// range(5): 0,1,2,3,4
for (int i = 0; i < 5; i++) {
    cout << i << endl;
}

// range(2,5): 2,3,4
for (int i = 2; i < 5; i++) {
    cout << i << endl;
}

// range(0,10,2): 0,2,4,6,8
for (int i = 0; i < 10; i += 2) {
    cout << i << endl;
}
```

### Range-based for（走訪容器，超讚！）
```cpp
vector<int> arr = {10, 20, 30};
for (int item : arr) {         // 直接取元素
    cout << item << endl;
}

string s = "Hello";
for (char ch : s) {            // 逐字元
    cout << ch << endl;
}
```

### while + 控制
```cpp
while (條件) {
    // ...
    if (...) break;    // 跳出
    if (...) continue; // 跳過本次
}
```

## 6. 函式

```cpp
// 必須指定回傳型態和參數型態！
int add(int a, int b) {
    return a + b;
}

void print_hello(string name) {
    cout << "Hello " << name << endl;
}

int main() {
    int result = add(3, 4);
    print_hello("企鵝");
    return 0;
}
```

## 7. 輸入輸出

### 基本輸入
```cpp
int n;           cin >> n;
double f;        cin >> f;
string s;        cin >> s;  // 只讀單字（空格停止）
getline(cin, s); // 讀整行（含空格）
```

### 輸出技巧
```cpp
cout << "Hello" << endl;           // 基本輸出
cout << x << " " << y << endl;     // 多變數
cout << x;                         // 不換行

// printf（C風格，格式化超方便）
printf("%d\n", x);                 // %d=整數
printf("%.2f\n", 3.14159);         // 小數點後2位：3.14
printf("%lld\n", 1e18);            // long long用 %lld
```

### cin與getline混用陷阱
```cpp
int n;
cin >> n;           // 輸入 5<Enter>
cin.ignore();       // 消耗換行符！
string line;
getline(cin, line); // 現在才能正確讀下一行
```

## 8. 常用內建函式

```cpp
#include <algorithm>  // sort/max/min/swap/reverse
#include <cmath>      // abs/pow/sqrt
#include <numeric>    // accumulate

arr.size()              // 長度
max(a, b), min(a, b)    // 最大最小
accumulate(arr.begin(), arr.end(), 0LL)  // 總和（用long long避免溢位）
abs(-5), fabs(-5.5)     // 絕對值
pow(2, 10), sqrt(16)    // 次方/平方根
swap(a, b)              // 交換
```

## 9. 常見錯誤與Debug

```
CE - 編譯錯誤：語法錯、少;、型態錯
RE - 執行錯誤：除0、陣列越界、指標錯
WA - 答案錯
TLE - 超時
MLE - 記憶體超限
```

**常見Bug實例：**
```cpp
// 1. 整數溢位
int a = 1e9, b = 1e9;      // a * b 溢位！
long long c = 1LL * a * b; // 正確寫法

// 2. 忘記初始化
int arr[100];              // 垃圾值！
int arr2[100] = {};        // 全0 ✓

// 3. 陣列越界（不會報錯！）
vector<int> v(5);
cout << v [oreateai](http://oreateai.com/blog/bridging-the-gap-navigating-the-python-to-c-conversion-journey/bf7a787640019e3316e5c2ab9fac9986);             // UB！

// 4. cin與getline混用
cin >> n; getline(cin, s); // s變成空字串！
```

## 10. 重要觀念與陷阱

```
✅ 索引從0開始
✅ for(i=0; i<n; i++) 而非 i<=n
✅ 整數/整數=整數，7/2=3
✅ 超過10^9用long long
✅ vector沒有負索引，用back()
✅ 陣列越界不會報錯，自己小心！
✅ 每個變數都要宣告型態
✅ 每行結尾要加;
✅ 用{}包程式區塊
```

***

# 二. C++ 基本工具

## 1. vector (動態陣列) ⭐⭐⭐

```cpp
vector<int> arr = {1, 2, 3, 4, 5};
cout << arr[0] << endl;            // 1
cout << arr.back() << endl;        // 5（最後一個）

// 常用操作
arr.push_back(6);                  // 加到尾端
arr.pop_back();                    // 移除尾端
arr.insert(arr.begin(), 0);        // 開頭插入
arr.erase(find(arr.begin(), arr.end(), 3));  // 移除第一個3

// 大小指定
vector<int> v(10, 0);              // 10個0
vector<int> v2(n);                 // n個元素（預設0）
```

**走訪方式：**
```cpp
// 1. 索引走訪
for(int i = 0; i < arr.size(); i++) {
    cout << arr[i] << " ";
}

// 2. 直接走訪元素（推薦）
for(int x : arr) {
    cout << x << " ";
}
```

## 2. string (字串)

```cpp
string s = "Hello World";
cout << s.length() << endl;        // 11
cout << s[0] << endl;              // H
cout << s.substr(0, 5) << endl;    // Hello

// 常用操作
s += "!!";                         // 拼接
s.find("World") != string::npos    // 找子字串

// 反轉
reverse(s.begin(), s.end());
```

**字串分割：**
```cpp
#include <sstream>
string line = "1 2 3";
istringstream iss(line);
vector<int> nums;
int x;
while(iss >> x) nums.push_back(x);  // [1,2,3]
```

## 3. 輸入輸出進階工具 ⭐⭐⭐

**一行多數：**
```cpp
// 方法1：已知個數
int n; cin >> n;
vector<int> arr(n);
for(auto& x : arr) cin >> x;

// 方法2：未知個數
string line;
getline(cin, line);
istringstream iss(line);
vector<int> arr2;
int x;
while(iss >> x) arr2.push_back(x);
```

**印陣列：**
```cpp
for(size_t i = 0; i < arr.size(); i++) {
    if(i) cout << " ";             // i!=0才印空格
    cout << arr[i];
}
cout << endl;
```

## 4. sorted() 排序技巧 ⭐⭐⭐⭐

```cpp
vector<int> arr = {3, 1, 4, 2};
sort(arr.begin(), arr.end());          // 升序 [1,2,3,4]
sort(arr.rbegin(), arr.rend());        // 降序 [4,3,2,1]

// 自訂排序（超重要！）
sort(arr.begin(), arr.end(), greater<int>());  // 降序
```

## 5. enumerate/zip 等便利工具

**enumerate（索引+值）：**
```cpp
vector<int> arr = {10, 20, 30};
for(int i = 0; i < arr.size(); i++) {
    cout << i << ": " << arr[i] << endl;
}
```

**zip（多陣列對應）：**
```cpp
vector<int> a = {1,2,3};
vector<int> b = {10,20,30};
for(size_t i = 0; i < a.size(); i++) {
    cout << a[i] << " " << b[i] << endl;
}
```

## 6. 二維陣列/矩陣

```cpp
// 3x3全0矩陣
vector<vector<int>> mat(3, vector<int>(3, 0));
mat[0][0] = 1;

// 動態大小
int n, m;
cin >> n >> m;
vector<vector<int>> grid(n, vector<int>(m));
```

## 7. map (字典) - 超重要! ⭐⭐⭐⭐⭐

```cpp
map<string, int> score;
score["Alice"] = 95;
score["Bob"] = 87;

// 檢查存在
if(score.count("Alice")) {
    cout << score["Alice"] << endl;
}

// 遍歷
for(auto& [name, sc] : score) {    // C++17
    cout << name << ": " << sc << endl;
}
```

## 8. 字元與數字轉換

```cpp
char ch = 'A';
int asc = ch;              // 65（char就是數字！）

int num = '7' - '0';       // 7
char digit = 5 + '0';      // '5'

// 大小寫轉換
tolower('A'), toupper('a')
```

## 9. Lambda 函式與自訂排序 ⭐⭐⭐⭐

```cpp
// Lambda基本
auto f = [](int x){ return x * 2; };
cout << f(5) << endl;      // 10

// 學生排序：(名字,分數)
vector<pair<string,int>> stu = {{"Alice",85},{"Bob",92}};
sort(stu.begin(), stu.end(), [](auto& a, auto& b){
    return a.second > b.second;    // 分數降序
});
```

***

# 三. APCS 競程實作模板

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    int T; cin >> T;  // T組測試資料
    while(T--) {
        int n; cin >> n;
        vector<int> arr(n);
        for(auto& x : arr) cin >> x;
        
        // 處理邏輯...
        
        for(size_t i = 0; i < arr.size(); i++) {
            if(i) cout << " ";
            cout << arr[i];
        }
        cout << endl;
    }
    return 0;
}
```

---

# 四. 題目實作

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