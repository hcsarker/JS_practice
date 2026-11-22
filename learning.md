# 🚀 জাভাস্ক্রিপ্ট সম্পূর্ণ হ্যান্ডবুক ও রোডম্যাপ (Basic to Advanced)

স্বাগতম! এই ফাইলটিতে জাভাস্ক্রিপ্ট (JavaScript) শেখার জন্য একটি সম্পূর্ণ, সুসংগঠিত কারিকুলাম ও রোডম্যাপ তৈরি করা হয়েছে। প্রতিটি বিষয়ের প্র্যাকটিক্যাল কোড এবং উদাহরণ [script.js](file:///d:/Programming/JS_practice/script.js) ফাইলে সাজিয়ে দেওয়া হয়েছে।

---

## 📑 সূচিপত্র (Syllabus & Learning Flow)

### 🟢 ফেজ ১: জাভাস্ক্রিপ্ট বেসিক্স ও ফান্ডামেন্টালস
1. **ভিত্তি ও সিনট্যাক্স:**
   - কমেন্ট (`//`, `/* */`), স্টেটমেন্ট, কেস-সেনসিটিভিটি
   - ইনপুট/আউটপুট (`console.log`, `alert`, `prompt`)
   - এস্কেপ ক্যারেক্টার (`\n`, `\t`)
2. **ভেরিয়েবল ও স্কোপ:**
   - `var` vs `let` vs `const` এর মধ্যে গভীর পার্থক্য
3. **ডাটা টাইপসমূহ (Data Types):**
   - **Primitive:** `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`
   - **Reference / Non-Primitive:** `object`, `array`, `function`
   - `typeof` অপারেটর
4. **Truthy বনাম Falsy ভ্যালু:**
   - ৬টি ফলসি মান: `false`, `0`, `""`, `null`, `undefined`, `NaN`

---

### 🟡 ফেজ ২: অপারেটর এবং কন্ট্রোল ফ্লো
1. **অপারেটরস:**
   - **অ্যারিথমেটিক:** `+`, `-`, `*`, `/`, `%`, `**` (Exponentiation)
   - **অ্যাসাইনমেন্ট:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`
   - **কম্প্যারিজন:** `==` vs `===` (Strict Equality), `!=`, `!==`, `>`, `<`, `>=`, `<=`
   - **লজিক্যাল:** `&&` (AND), `||` (OR), `!` (NOT), শর্ট-সার্কিট ইভালুয়েশন
   - **ইউনারি ও টার্নারি:** `++`, `--`, `condition ? trueVal : falseVal`
   - **আধুনিক অপারেটর:** `??` (Nullish Coalescing), `?.` (Optional Chaining)
2. **কন্ডিশনাল কন্ট্রোল স্টেটমেন্ট:**
   - `if`, `else if`, `else`
   - `switch` স্টেটমেন্ট এবং `break`, `default`
3. **লুপ ও ইটারেশন:**
   - `for` লুপ
   - `while` লুপ ও `do...while` লুপ
   - `break` এবং `continue`
   - `for...of` (অ্যারে/স্ট্রিং এর জন্য)
   - `for...in` (অবজেক্টের প্রোপার্টির জন্য)

---

### 🔵 ফেজ ৩: বিল্ট-ইন মেথড ও ফাংশন ইন-ডেপথ
1. **বিল্ট-ইন অবজেক্ট ও মেথড:**
   - **Number:** `toFixed()`, `toPrecision()`, `parseInt()`, `parseFloat()`, `isNaN()`
   - **Math:** `round()`, `floor()`, `ceil()`, `abs()`, `max()`, `min()`, `random()`
   - **String:** `length`, `toUpperCase()`, `toLowerCase()`, `trim()`, `slice()`, `split()`, `includes()`, `replace()`
   - **Date:** `new Date()`, `getFullYear()`, `getMonth()`, `toLocaleTimeString()`
2. **ফাংশন মাস্টারক্লাস:**
   - Function Declaration vs Function Expression
   - Arrow Function (অ্যারো ফাংশন ও সিনট্যাক্স)
   - ডিফল্ট প্যারামিটার (Default Parameters)
   - রেস্ট প্যারামিটার (`...args`)
   - Callback Function এবং Higher-Order Function (HOF)

---

### 🟣 ফেজ ৪: আধুনিক অ্যারে ও অবজেক্ট (ES6+)
1. **অ্যারে মেথডস:**
   - Mutating: `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `reverse()`
   - Non-mutating: `slice()`, `concat()`, `join()`, `includes()`
   - **ফাংশনাল হাইয়ার-অর্ডার মেথড:**
     - `map()` - ডাটা ট্রান্সফর্মেশনের জন্য
     - `filter()` - নির্দিষ্ট শর্তে ডাটা ছাঁকার জন্য
     - `reduce()` - সর্বমোট যোগফল বা এগ্রিগেশনের জন্য
     - `find()` ও `findIndex()` - নির্দিষ্ট উপাদান খোঁজার জন্য
     - `some()` ও `every()` - শর্ত যাচাইয়ের জন্য
     - `sort()` - অ্যালফাবেটিকাল, সংখ্যা ও তারিখ সর্ট করার সঠিক নিয়ম
2. **অবজেক্ট ও আধুনিক ফিচার্স:**
   - অবজেক্ট মেথড: `Object.keys()`, `Object.values()`, `Object.entries()`
   - Destructuring (Object ও Array ডিস্ট্রাকচারিং)
   - Spread Operator (`...`) দিয়ে ক্লোনিং ও মার্জিং
   - Template Literals (ব্যাকটিক্স ও স্ট্রিং ইন্টারপোলেশন `${}`)
   - ES Modules (`import` ও `export`)

---

### 🔴 ফেজ ৫: এরর হ্যান্ডলিং ও ব্রাউজার স্টোরেজ
1. **Error Handling:**
   - এররের ধরন: `SyntaxError`, `ReferenceError`, `TypeError`, `RangeError`
   - `try`, `catch`, `finally` ব্লক
   - কাস্টম এরর থ্রো করা (`throw new Error(...)`)
2. **JSON ও স্টোরেজ:**
   - `JSON.stringify()` (অবজেক্ট থেকে স্ট্রিং)
   - `JSON.parse()` (স্ট্রিং থেকে অবজেক্ট)
   - `localStorage` (`setItem`, `getItem`, `removeItem`, `clear`)

---

### 🟠 ফেজ ৬: অ্যাসিনক্রোনাস জাভাস্ক্রিপ্ট ও এপিআই
1. **অ্যাসিনক্রোনাস আর্কিটেকচার:**
   - Single Threaded মডেল
   - Event Loop, Call Stack, Task Queue, Microtask Queue
   - `setTimeout` এবং `setInterval`
2. **Promises ও Async/Await:**
   - Promise এর ৩টি স্টেট: Pending, Fulfilled (`resolve`), Rejected (`reject`)
   - `.then()`, `.catch()`, `.finally()`
   - `async / await` এর মাধ্যমে ক্লিন ও রিডেবল অ্যাসিনক্রোনাস কোড
3. **Fetch API:**
   - রিয়েল সার্ভার থেকে ডেটা রিড ও প্রসেস করার নিয়ম (GET, POST রিকোয়েস্ট)

---

### 🟤 ফেজ ৭: অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP)
1. **ES6 Classes:**
   - `class`, `constructor`, মেথডস
   - Encapsulation এবং প্রাইভেট ফিল্ড (`#privateProperty`)
   - Getters এবং Setters (`get`, `set`)
   - Inheritance (`extends`, `super`)
   - **বাস্তব প্রজেক্ট:** ফুল ফিচার্ড `BankAccount` ও `SavingsAccount` ক্লাস

---

### ⚪ ফেজ ৮: অ্যাডভান্সড জাভাস্ক্রিপ্ট কনসেপ্টস
1. **Scope ও Hoisting:**
   - Global, Function, Block Scope
   - Temporal Dead Zone (TDZ)
2. **Closures (ক্লোজার):**
   - বাইরের ফাংশনের ভেরিয়েবল মনে রাখার ক্ষমতা এবং প্রাইভেট স্টেট তৈরি
3. **The `this` Keyword:**
   - বিভিন্ন পরিস্থিতিতে `this` এর আচরণ
4. **Debouncing ও Throttling:**
   - পারফরম্যান্স অপ্টিমাইজেশন ও সার্চ ইনপুট হ্যান্ডলিং

---

### 🎯 ফেজ ৯: DOM ম্যানিপুলেশন ও ইভেন্টস
1. এলিমেন্ট সিলেক্ট: `querySelector`, `querySelectorAll`, `getElementById`
2. কন্টেন্ট ও স্টাইল পরিবর্তন: `textContent`, `classList.add()`, `classList.remove()`
3. নতুন এলিমেন্ট তৈরি: `document.createElement()`, `appendChild()`
4. ইভেন্ট লিসেনার: `addEventListener('click')`, `addEventListener('input')`

---

## 🛠️ ফাইল ও ফোল্ডার পরিচিতি
- [script.js](file:///d:/Programming/JS_practice/script.js) — মূল কোড ও সমস্ত প্র্যাকটিক্যাল উদাহরণ।
- [index.html](file:///d:/Programming/JS_practice/index.html) — ব্রাউজারে রান করে DOM ও ইন্টারঅ্যাকশন দেখার পেজ।
- [style.css](file:///d:/Programming/JS_practice/style.css) — ডেমো পেজের আধুনিক ডিজাইন।
- [calculate.js](file:///d:/Programming/JS_practice/calculate.js) — মডিউল এক্সপোর্ট/ইম্পোর্ট ডেমো।
- [person.js](file:///d:/Programming/JS_practice/person.js) — অবজেক্ট এক্সপোর্ট ডেমো।
- [user.js](file:///d:/Programming/JS_practice/user.js) — ডিফল্ট এক্সপোর্ট ডেমো।
