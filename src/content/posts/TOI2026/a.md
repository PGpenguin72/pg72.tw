---
title: A. 快樂數 (happy)
published: 2026-03-17
updated: 2026-03-17
description: "第一次報名這種競賽，就來說說心得吧！"
image: "./img/TOI.png"
ogImage: 'https://pg72.tw/og/thjcc-2026-writeup-0.png'
tags: [TOI, C++]
category: 程式
draft: false
series:
  id: toi2026
  order: 1
---
# 題目：
![A1](./img/happy%20(it)/1.png)
![A2](./img/happy%20(it)/2.png)

---

# 解題思路：
我的想法是把輸入的數字一直取餘數後除以十，然後把每位數取平方加總起來。如果加總後的數字為1或是在陣列中，就直接輸出。  
我寫的原始代碼如下，然後第二個是我寫有備註的Clean code方便理解，第三個使用Python讓py使用者可以理解（可能會有部分代碼有差異）：
```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int x=0, i=0;

    vector<long long> data;

    cin >> x;
    
    while (x!= 1){
        //cout << x;
        if (find(data.begin(), data.end(), x) != data.end()){
            cout << x << "\n";
            return 0;
        }
        else{
            data.push_back(x);
            int tmp = 0;
            while(x != 0){
                tmp += pow(x%10, 2);
                x /= 10;
                //cout << x << " " << tmp << " ";
            }
            i += 1;
            x = tmp;
            //cout << tmp;
        }
    }
    cout << i << "\n";
    return 0;
}
```

---

```cpp
#include <bits/stdc++.h> // 引入所有函式庫
using namespace std;

bool is_in_history(long long number, vector<long long> history){
    if (find(history.begin(), history.end(), number) != history.end()){
        return true;
    }
    return false;    
}

long long sum_of_digit_squares(long long number){
    long long digit_square_sum = 0;
    while(number != 0){ 
        digit_square_sum += pow(number%10, 2);
        number /= 10;
    }
    return digit_square_sum;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr); // 這兩行代碼用於加速輸入的速度，避免TLE

    long long input_number=0, step=0;
    vector<long long> history;

    cin >> input_number;
    
    while (input_number != 1){
        if (is_in_history(input_number, history)){
            cout << input_number << "\n";
            return 0;
        }
        else{
            history.push_back(input_number);
            input_number = sum_of_digit_squares(input_number);
            step += 1;
        }
    }
    cout << step << "\n";
    return 0;
}
```

---

```py
def is_in_history(number:int, history:list):
    if number in history:
        return True
    else:
        return False

def sum_of_digit_squares(number:int):
    digit_square_sum = 0
    while number != 0:
        digit_square_sum += (number%10)**2
        number //= 10
    return digit_square_sum

def main():
    input_number = int(input())
    history = []
    step = 0

    while input_number != 1:
        if is_in_history(input_number, history):
            print(input_number)
            return 0
        else:
            history.append(input_number)
            input_number = sum_of_digit_squares(input_number)
            step += 1

    print(step)
    return 0

main()
```