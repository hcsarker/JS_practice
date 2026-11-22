/**
 * ==============================================================================
 * 🚀 COMPLETE JAVASCRIPT MASTERCLASS: BASIC TO ADVANCED (বাস্তবধর্মী হ্যান্ডস-অন গাইড)
 * ==============================================================================
 * লেখক / সংগ্রাহক: Hridoy Sarker
 * উদ্দেশ্য: যে কেউ যেন শূন্য থেকে শুরু করে প্র্যাকটিক্যাল উদাহরণসহ জাভাস্ক্রিপ্ট
 *          এর সমস্ত কোর কনসেপ্ট, ES6+, OOP, Async এবং DOM শিখতে পারে।
 * 
 * 📌 সূচিপত্র (Table of Contents):
 * ------------------------------------------------------------------------------
 * PART 01: জাভাস্ক্রিপ্ট বেসিক্স (Variables, Data Types, Type Conversion)
 * PART 02: অপারেটর এবং কন্ট্রোল ফ্লো (Operators, If-Else, Switch, Ternary)
 * PART 03: লুপ এবং ইটারেশন (for, while, do-while, for...of, for...in)
 * PART 04: বিল্ট-ইন মেথড (Number, Math, String, Date)
 * PART 05: ফাংশন ইন-ডেপথ (Declaration, Arrow, Callback, HOF, Rest/Default)
 * PART 06: অ্যারে মাস্টারক্লাস (Mutating/Non-mutating, map, filter, reduce, sort)
 * PART 07: অবজেক্ট এবং আধুনিক ES6+ ফিচার্স (Destructuring, Spread, Modules)
 * PART 08: এরর হ্যান্ডলিং ও ডিবাগিং (try, catch, finally, custom throw)
 * PART 09: JSON ও ব্রাউজার স্টোরেজ (JSON.stringify, localStorage)
 * PART 10: অ্যাসিনক্রোনাস জাভাস্ক্রিপ্ট (Event Loop, Promise, Async/Await, Fetch API)
 * PART 11: অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং - OOP (Class, Constructor, Inheritance, Bank App)
 * PART 12: অ্যাডভান্সড কনসেপ্টস (Scope, Hoisting, Closures, this Keyword, Debounce)
 * PART 13: DOM ম্যানিপুলেশন এবং ইভেন্ট হ্যান্ডলিং (Browser Interactive Demo)
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 📦 ES MODULE IMPORTS (মডিউল ইম্পোর্ট)
// ------------------------------------------------------------------------------
import { addition, subs } from "./calculate.js";
import { person3 } from "./person.js";
import users from "./user.js";

console.log("%c🔥 JavaScript Mastery Guide Loaded Successfully!", "color: #22c55e; font-size: 16px; font-weight: bold;");


/* ==============================================================================
   PART 01: জাভাস্ক্রিপ্ট বেসিক্স (Variables & Data Types)
   ==============================================================================
   - var: Function scoped, re-declare করা যায়, hoisting সমস্যা তৈরি করে (ব্যবহার না করাই ভালো)।
   - let: Block scoped, মান পরিবর্তন (re-assign) করা যায়।
   - const: Block scoped, মান অপরিবর্তনশীল (constant), পরিবর্তন করা যায় না।
*/
console.log("\n--- [PART 01: VARIABLES & DATA TYPES] ---");

// ১. ভেরিয়েবল ডিক্লেয়ারেশন
let studentAge = 22;
studentAge = 23; // Valid: let এর মান পরিবর্তন সম্ভব

const institute = "PSTU";
// institute = "DU"; // ❌ Error: Assignment to constant variable

// ২. ডাটা টাইপসমূহ (Primitive & Non-Primitive)
const userName = "Yeash Sarker";         // String
const userScore = 98.5;                  // Number
const isPassed = true;                   // Boolean
let unassignedJob;                       // Undefined (মান নির্ধারণ করা হয়নি)
const emptyWallet = null;                // Null (ইচ্ছাকৃতভাবে খালি রাখা মান)
const uniqueId = Symbol("id");           // Symbol (ইউনিক আইডেন্টিফায়ার)
const bigNumber = 9007199254740991n;     // BigInt (অনেক বড় পূর্ণসংখ্যা)

console.log("Types:", {
  name: typeof userName,
  score: typeof userScore,
  passed: typeof isPassed,
  job: typeof unassignedJob,
  wallet: typeof emptyWallet, // JS এর একটি পুরনো ত্রুটি: null কে 'object' দেখায়
  id: typeof uniqueId,
  big: typeof bigNumber
});

// ৩. ট্রুথি (Truthy) বনাম ফলসি (Falsy) মান
// জাভাস্ক্রিপ্টে ৬টি ফলসি মান: false, 0, "", null, undefined, NaN
const testVal = "";
if (testVal) {
  console.log("This is Truthy");
} else {
  console.log("Empty string is Falsy!"); // এটি এক্সিকিউট হবে
}


/* ==============================================================================
   PART 02: অপারেটর এবং কন্ট্রোল ফ্লো (Operators & Control Flow)
   ==============================================================================
*/
console.log("\n--- [PART 02: OPERATORS & CONDITIONALS] ---");

// ১. অ্যারিথমেটিক অপারেটর (+, -, *, /, %, **)
const a = 10;
const b = 3;
console.log(`Add: ${a + b}, Modulus (ভাগশেষ): ${a % b}, Exponent: ${a ** b}`);

// ২. অ্যাসাইনমেন্ট ও ইউনারি অপারেটর
let points = 50;
points += 10; // points = points + 10 (60)
let counter = 10;
console.log("Pre-increment (++c):", ++counter); // ১১ (আগে বাড়বে)
console.log("Post-increment (c++):", counter++); // ১১ (পরে বাড়বে)
console.log("Current counter:", counter);        // ১২

// ৩. কম্প্যারিজন (== বনাম ===)
// == শুধু মান যাচাই করে (type coercion করে)
// === মান এবং ডাটা টাইপ দুটিই কঠোরভাবে যাচাই করে (সবসময় === ব্যবহার করা উচিত)
console.log("Loose Equal (5 == '5'):", 5 == "5");     // true
console.log("Strict Equal (5 === '5'):", 5 === "5");   // false

// ৪. কন্ডিশনাল স্টেটমেন্ট (if, else if, else)
const testScore = 78;
let grade = "";

if (testScore >= 80) {
  grade = "A+";
} else if (testScore >= 70) {
  grade = "A";
} else if (testScore >= 60) {
  grade = "B";
} else {
  grade = "Fail";
}
console.log(`Exam Score: ${testScore}, Obtained Grade: ${grade}`);

// ৫. টার্নারি অপারেটর (Short Condition)
const age = 20;
const canVote = age >= 18 ? "Eligible to vote" : "Too young to vote";
console.log("Voter Status:", canVote);

// ৬. নালিশ কোলেসিং (??) এবং অপশনাল চেইনিং (?.)
// ?? শুধুমাত্র null বা undefined থাকলে ডিফল্ট মান দেয় (0 বা "" কে নয়)
const userResponse = 0;
const finalScore = userResponse ?? 100; // 0 পাবে (ফলসি বিবেচনা করবে না)
console.log("Nullish Coalescing Score:", finalScore);

const customer = { profile: { address: { city: "Dhaka" } } };
console.log("Optional Chaining City:", customer?.profile?.address?.city);
console.log("Non-existing Property:", customer?.profile?.phone?.number); // undefined দেবে, ক্র্যাশ করবে না!

// ৭. সুইচ কেস (Switch Statement - Menu Example)
const dayNumber = 3;
let dayName = "";

switch (dayNumber) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  default:
    dayName = "Other day";
}
console.log(`Day ${dayNumber} is: ${dayName}`);


/* ==============================================================================
   PART 03: লুপ এবং ইটারেশন (Loops & Iterations)
   ==============================================================================
*/
console.log("\n--- [PART 03: LOOPS] ---");

// ১. For Loop
console.log("For loop count:");
let loopOutput = [];
for (let i = 1; i <= 5; i++) {
  loopOutput.push(i);
}
console.log(loopOutput.join(", "));

// ২. While Loop & Do-While Loop
let w = 1;
while (w <= 3) {
  // console.log(`While loop: ${w}`);
  w++;
}

let d = 5;
do {
  // শর্ত মিথ্যা হলেও কমপক্ষে ১ বার রান করবে
  console.log("Do-While ran at least once, d =", d);
  d++;
} while (d < 5);

// ৩. break এবং continue
console.log("Loop with break and continue:");
for (let i = 1; i <= 6; i++) {
  if (i === 2) continue; // ২ স্কিপ করবে
  if (i === 5) break;    // ৫ এ আসলে লুপ বন্ধ হয়ে যাবে
  console.log(`Value: ${i}`);
}

// ৪. for...of (অ্যারে বা স্ট্রিং এর মানের উপর লুপ চালানোর জন্য)
const techStack = ["JavaScript", "React", "Node.js", "MongoDB"];
for (const tech of techStack) {
  console.log(`- Tech: ${tech}`);
}

// ৫. for...in (অবজেক্টের কী বা প্রোপার্টির উপর লুপ চালানোর জন্য)
const devProfile = { name: "Hridoy", role: "Full Stack Engineer", exp: "2 years" };
for (const key in devProfile) {
  console.log(`${key.toUpperCase()}: ${devProfile[key]}`);
}


/* ==============================================================================
   PART 04: বিল্ট-ইন মেথড (Number, Math, String, Date)
   ==============================================================================
*/
console.log("\n--- [PART 04: BUILT-IN METHODS] ---");

// ১. Number Methods
const pi = 3.14159265;
console.log("toFixed(2):", pi.toFixed(2));             // "3.14" (স্ট্রিং হিসেবে রিটার্ন করে)
console.log("parseInt('42px'):", parseInt("42px"));     // 42
console.log("parseFloat('12.5rem'):", parseFloat("12.5rem")); // 12.5
console.log("isNaN('abc'):", isNaN("abc"));             // true

// ২. Math Methods & Random Number Formula
console.log("Math.round(4.7):", Math.round(4.7)); // 5
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4
console.log("Math.ceil(4.1):", Math.ceil(4.1));   // 5
console.log("Math.abs(-25):", Math.abs(-25));     // 25

// বাস্তব উদাহরণ: নির্দিষ্ট সীমার (min থেকে max) মধ্যে Random Integer তৈরি
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random number between 10 and 20:", getRandomInt(10, 20));

// ৩. String Methods
const rawText = "   Learn JavaScript with Real Projects!   ";
const cleanText = rawText.trim();
console.log("Original Text Length:", rawText.length);
console.log("Trimmed:", cleanText);
console.log("Uppercase:", cleanText.toUpperCase());
console.log("Includes 'JavaScript':", cleanText.includes("JavaScript"));
console.log("Slice(6, 16):", cleanText.slice(6, 16));
console.log("Replace:", cleanText.replace("Real", "Awesome"));
console.log("Split into words:", cleanText.split(" "));

// ৪. Date Methods
const now = new Date();
console.log(`Current Year: ${now.getFullYear()}, Month: ${now.getMonth() + 1}, Time: ${now.toLocaleTimeString()}`);


/* ==============================================================================
   PART 05: ফাংশন ইন-ডেপথ (Functions & Callbacks)
   ==============================================================================
*/
console.log("\n--- [PART 05: FUNCTIONS DEEP-DIVE] ---");

// ১. ট্র্যাডিশনাল ফাংশন ডিক্লেয়ারেশন
function calculateDiscount(price, discountPercent = 10) {
  // ডিফল্ট প্যারামিটার: discountPercent পাস না করলে ১০% নিবে
  const discountAmount = (price * discountPercent) / 100;
  return price - discountAmount;
}
console.log("Discounted Price ($100 with default 10%):", calculateDiscount(100));
console.log("Discounted Price ($200 with 25%):", calculateDiscount(200, 25));

// ২. অ্যারো ফাংশন (Arrow Function)
const multiply = (x, y) => x * y;
console.log("Arrow Multiply (6 * 7):", multiply(6, 7));

// ৩. রেস্ট প্যারামিটার (...numbers)
// অজানা সংখ্যক আর্গুমেন্ট গ্রহণ করে একটি অ্যারে বানায়
const sumAll = (...numbers) => numbers.reduce((total, n) => total + n, 0);
console.log("Sum of multiple numbers:", sumAll(5, 10, 15, 20, 25));

// ৪. হায়ার-অর্ডার ফাংশন (Higher Order Function) এবং কলব্যাক ফাংশন (Callback)
// HOF: যে ফাংশন অন্য কোনো ফাংশনকে প্যারামিটার হিসেবে গ্রহণ করে বা রিটার্ন করে।
const performCalculation = (num1, num2, operationCallback) => {
  return operationCallback(num1, num2);
};

const addOp = (x, y) => x + y;
const subOp = (x, y) => x - y;
const mulOp = (x, y) => x * y;

console.log("Callback Calc (Addition):", performCalculation(15, 5, addOp));
console.log("Callback Calc (Multiply):", performCalculation(15, 5, mulOp));


/* ==============================================================================
   PART 06: অ্যারে মাস্টারক্লাস (Arrays & Modern Array Methods)
   ==============================================================================
*/
console.log("\n--- [PART 06: ARRAY MASTERY] ---");

// ১. বেসিক অ্যারে অপারেশন
const inventory = ["Laptop", "Keyboard", "Mouse"];
inventory.push("Monitor");    // শেষে যুক্ত করে
inventory.unshift("Desk");    // শুরুতে যুক্ত করে
console.log("Inventory after additions:", inventory);
inventory.pop();              // শেষেরটি বাদ দেয়
inventory.shift();            // শুরুরটি বাদ দেয়
console.log("Inventory after removals:", inventory);

// ২. slice বনাম splice
// slice: মূল অ্যারে পরিবর্তন করে না (immutability রক্ষা করে)
const slicedItems = inventory.slice(0, 2);
console.log("Sliced Items (safe):", slicedItems);

// splice: মূল অ্যারে সরাসরি পরিবর্তন (mutate) করে
inventory.splice(1, 1, "Mechanical Keyboard"); // ইনডেক্স ১ এর উপাদান বদলে নতুন উপাদান বসায়
console.log("Inventory after splice:", inventory);

// ৩. রিয়েল-ওয়ার্ল্ড ই-কমার্স প্রোডাক্ট ডেটাসেট
const ecomProducts = [
  { id: 1, name: "Apple iPhone 15 Pro", category: "Mobile", price: 1200, rating: 4.8, inStock: true, date: "2024-01-15" },
  { id: 2, name: "Samsung Galaxy S24 Ultra", category: "Mobile", price: 1100, rating: 4.7, inStock: true, date: "2024-02-10" },
  { id: 3, name: "Sony WH-1000XM5 Headphone", category: "Audio", price: 380, rating: 4.9, inStock: false, date: "2023-11-05" },
  { id: 4, name: "MacBook Pro M3", category: "Laptop", price: 2000, rating: 4.9, inStock: true, date: "2024-03-01" },
  { id: 5, name: "Logitech MX Master 3S", category: "Accessories", price: 99, rating: 4.6, inStock: true, date: "2023-10-20" },
  { id: 6, name: "Dell UltraSharp 27 Monitor", category: "Accessories", price: 450, rating: 4.5, inStock: false, date: "2023-12-12" },
];

// ৪. map() - রূপান্তর (Transformation): নতুন অ্যারে রিটার্ন করে
const productSummaries = ecomProducts.map(p => `${p.name} - $${p.price}`);
console.log("Product Summaries (map):", productSummaries);

// ৫. filter() - নির্দিষ্ট শর্তে ফিল্টার করা
const inStockAffordableProducts = ecomProducts.filter(p => p.inStock && p.price <= 1200);
console.log("In Stock & <= $1200 (filter):", inStockAffordableProducts.map(p => p.name));

// ৬. find() এবং findIndex()
const headphone = ecomProducts.find(p => p.category === "Audio");
console.log("Found Audio Product (find):", headphone?.name);
const macbookIndex = ecomProducts.findIndex(p => p.name.includes("MacBook"));
console.log("MacBook Index in Array:", macbookIndex);

// ৭. reduce() - হিসাব ও এগ্রিগেশন (সব পণ্যের মোট মূল্য বের করা)
const totalInventoryValue = ecomProducts.reduce((sum, item) => sum + item.price, 0);
console.log(`Total Inventory Value: $${totalInventoryValue}`);

// ৮. some() এবং every()
const hasExpensiveItem = ecomProducts.some(p => p.price > 1500); // যেকোনো একটি শর্ত পূরণ করলেই true
console.log("Is there any item over $1500? (some):", hasExpensiveItem);

const allInStock = ecomProducts.every(p => p.inStock); // প্রতিটি আইটেম শর্ত পূরণ করলে তবেই true
console.log("Are all items in stock? (every):", allInStock);

// ৯. sort() - সঠিকভাবে সর্টিং করা (Number, String, Date)
// Note: sort মূল অ্যারেকে mutate করে, তাই কপি করে([...array]) সর্ট করা বেস্ট প্র্যাকটিস
const sortedByPriceAsc = [...ecomProducts].sort((a, b) => a.price - b.price);
console.log("Cheapest Product:", sortedByPriceAsc[0].name, `($${sortedByPriceAsc[0].price})`);

const sortedByName = [...ecomProducts].sort((a, b) => a.name.localeCompare(b.name));
console.log("Alphabetical First Product:", sortedByName[0].name);


/* ==============================================================================
   PART 07: অবজেক্ট এবং আধুনিক ES6+ ফিচার্স (Objects & Modern ES6+)
   ==============================================================================
*/
console.log("\n--- [PART 07: OBJECTS & MODERN ES6+] ---");

const developer = {
  id: 101,
  name: "Hridoy",
  title: "Software Engineer",
  skills: ["JavaScript", "TypeScript", "React", "Node.js"],
  contact: {
    email: "hridoy@example.com",
    city: "Patuakhali",
    country: "Bangladesh"
  },
  introduce() {
    return `Hi, I am ${this.name}, working as a ${this.title}.`;
  }
};

console.log(developer.introduce());

// ১. অবজেক্ট ডিস্ট্রাকচারিং (Destructuring with Renaming & Default Values)
const { name: devName, title, contact: { city }, salary = 50000 } = developer;
console.log(`Destructured -> Name: ${devName}, Title: ${title}, City: ${city}, Salary: ${salary}`);

// ২. অ্যারে ডিস্ট্রাকচারিং
const rgbColors = ["#ff0000", "#00ff00", "#0000ff"];
const [red, green, blue] = rgbColors;
console.log("Destructured Colors:", red, green, blue);

// ৩. স্প্রেড অপারেটর (...) - অবজেক্ট ও অ্যারে ক্লোন ও মার্জ
const originalArr = [1, 2, 3];
const mergedArr = [...originalArr, 4, 5, 6];
console.log("Merged Array with Spread:", mergedArr);

const updatedDev = { ...developer, title: "Senior Software Engineer", status: "Active" };
console.log("Updated Developer Title:", updatedDev.title);

// ৪. Object Methods: keys, values, entries
console.log("Object Keys:", Object.keys(developer.contact));
console.log("Object Values:", Object.values(developer.contact));

// ৫. মডিউল টেস্টিং (বাইরের ফাইল থেকে আনা কোড)
console.log("External Module Addition (calculate.js):", addition(25, 75));
console.log("External Module Subs (calculate.js):", subs(50, 15));
console.log("External Person Info (person.js):", person3.name, person3.nationality);
console.log("External Users Data (user.js):", users.length, "users loaded");


/* ==============================================================================
   PART 08: এরর হ্যান্ডলিং ও ডিবাগিং (Error Handling)
   ==============================================================================
*/
console.log("\n--- [PART 08: ERROR HANDLING] ---");

function processPayment(amount, userBalance) {
  if (typeof amount !== "number" || amount <= 0) {
    throw new Error("Invalid payment amount. Amount must be a positive number.");
  }
  if (amount > userBalance) {
    throw new Error("Insufficient balance for this transaction!");
  }
  return { success: true, remainingBalance: userBalance - amount };
}

try {
  console.log("Trying valid payment...");
  const receipt = processPayment(150, 500);
  console.log("Payment successful! Remaining:", receipt.remainingBalance);

  console.log("Trying invalid payment (exceeding balance)...");
  processPayment(800, 500); // এটি Error throw করবে
} catch (error) {
  console.error("Catch Block Caught Error:", error.message);
} finally {
  console.log("Finally Block: Transaction attempt completed (Runs always).");
}


/* ==============================================================================
   PART 09: JSON ও ব্রাউজার স্টোরেজ (JSON & Web Storage)
   ==============================================================================
*/
console.log("\n--- [PART 09: JSON & LOCALSTORAGE] ---");

const sessionUser = {
  username: "yeash_dev",
  theme: "dark",
  lastLogin: new Date().toISOString()
};

// ১. JSON Serialization
const jsonString = JSON.stringify(sessionUser);
console.log("Serialized JSON String:", jsonString);

// ২. JSON Parsing
const parsedUser = JSON.parse(jsonString);
console.log("Parsed Back into Object:", parsedUser.username);

// ৩. LocalStorage হ্যান্ডলিং (Node.js এ রান করলে যেন ক্র্যাশ না করে সে জন্য সেফগার্ড)
if (typeof localStorage !== "undefined") {
  try {
    localStorage.setItem("app_user", JSON.stringify(sessionUser));
    const savedUser = JSON.parse(localStorage.getItem("app_user"));
    console.log("Retrieved from LocalStorage:", savedUser?.username);
  } catch (e) {
    console.warn("LocalStorage access limited:", e.message);
  }
} else {
  console.log("Note: localStorage is available in browser environment.");
}


/* ==============================================================================
   PART 10: অ্যাসিনক্রোনাস জাভাস্ক্রিপ্ট (Async JS, Promises, Async/Await)
   ==============================================================================
   - জাভাস্ক্রিপ্ট Single Threaded হওয়া সত্ত্বেও Event Loop এর মাধ্যমে Asynchronous কাজ করে।
*/
console.log("\n--- [PART 10: ASYNCHRONOUS JAVASCRIPT] ---");

// ১. প্রমিজ (Promise) তৈরি ও ব্যবহার
const simulateFetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, username: "dev_hridoy", role: "Fullstack" });
      } else {
        reject(new Error("Invalid User ID provided"));
      }
    }, 500); // 500ms বিলম্ব
  });
};

// ২. Async / Await ব্যবহার (সবচেয়ে আধুনিক ও ক্লিন অ্যাপ্রোচ)
async function fetchAndDisplayUser() {
  try {
    console.log("⏳ Fetching user data asynchronously...");
    const userData = await simulateFetchUserData(101);
    console.log("✅ User Fetched Successfully:", userData);
  } catch (err) {
    console.error("❌ Failed to fetch user:", err.message);
  }
}
fetchAndDisplayUser();

// ৩. বাস্তব API কল উদাহরণ (Fetch API with JSONPlaceholder)
// নিরাপদভাবে কল করা হয়েছে যাতে ব্রাউজার বা নেটওয়ার্ক সমর্থিত পরিবেশে সরাসরি ডেটা আনে
async function fetchSampleTodos() {
  if (typeof fetch === "function") {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const todo = await response.json();
      console.log("🌐 Real API Fetch Sample (jsonplaceholder):", todo.title);
    } catch (apiError) {
      console.log("Note: API call test finished (offline or restricted sandbox):", apiError.message);
    }
  }
}
fetchSampleTodos();


/* ==============================================================================
   PART 11: অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং - OOP (ES6 Classes & Practical App)
   ==============================================================================
*/
console.log("\n--- [PART 11: OBJECT ORIENTED PROGRAMMING - OOP] ---");

/**
 * 🏦 প্র্যাকটিক্যাল প্রজেক্ট: BankAccount ক্লাস (ইনক্যাপসুলেশন, প্রাইভেট ফিল্ডসহ)
 */
class BankAccount {
  // Private field (#): ক্লাসের বাইরে থেকে সরাসরি পরিবর্তন রোধ করে (Encapsulation)
  #balance;
  #transactions;

  constructor(accountHolder, initialDeposit = 0) {
    this.accountHolder = accountHolder;
    this.#balance = initialDeposit;
    this.#transactions = [];
    if (initialDeposit > 0) {
      this.#transactions.push({ type: "DEPOSIT", amount: initialDeposit, date: new Date() });
    }
  }

  // Getter: ব্যালেন্স নিরাপদে চেক করার জন্য
  get balance() {
    return this.#balance;
  }

  // টাকা জমা দেওয়ার মেথড
  deposit(amount) {
    if (amount <= 0) {
      console.log("❌ Deposit amount must be positive!");
      return;
    }
    this.#balance += amount;
    this.#transactions.push({ type: "DEPOSIT", amount, date: new Date() });
    console.log(`✅ Deposited $${amount}. Current Balance: $${this.#balance}`);
  }

  // টাকা তোলার মেথড
  withdraw(amount) {
    if (amount <= 0) {
      console.log("❌ Withdrawal amount must be positive!");
      return;
    }
    if (amount > this.#balance) {
      console.log(`❌ Insufficient funds! You requested $${amount}, but balance is $${this.#balance}`);
      return;
    }
    this.#balance -= amount;
    this.#transactions.push({ type: "WITHDRAWAL", amount, date: new Date() });
    console.log(`✅ Withdrawn $${amount}. Remaining Balance: $${this.#balance}`);
  }

  // স্টেটমেন্ট প্রিন্ট
  printStatement() {
    console.log(`--- Account Statement for: ${this.accountHolder} ---`);
    console.log(`Total Transactions: ${this.#transactions.length}`);
    console.log(`Net Balance: $${this.#balance}`);
  }
}

// ইনহেরিট্যান্স (Inheritance): SavingsAccount তৈরি
class SavingsAccount extends BankAccount {
  constructor(accountHolder, initialDeposit, interestRate = 5) {
    super(accountHolder, initialDeposit); // প্যারেন্ট ক্লাসের কনস্ট্রাক্টর কল
    this.interestRate = interestRate;
  }

  applyAnnualInterest() {
    const interest = (this.balance * this.interestRate) / 100;
    console.log(`📈 Applying ${this.interestRate}% interest: +$${interest}`);
    this.deposit(interest);
  }
}

// টেস্ট রান
const myAccount = new SavingsAccount("Hridoy Sarker", 1000, 7.5);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.applyAnnualInterest();
myAccount.printStatement();


/* ==============================================================================
   PART 12: অ্যাডভান্সড কনসেপ্টস (Closures, Scope, Hoisting, Debouncing)
   ==============================================================================
*/
console.log("\n--- [PART 12: ADVANCED JAVASCRIPT CONCEPTS] ---");

// ১. ক্লোজার (Closure): ভেতরের ফাংশন বাইরের ফাংশনের স্কোপের ভেরিয়েবল মনে রাখে
function createCounter(initialValue = 0) {
  let count = initialValue; // প্রাইভেট স্টেট
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
}

const counterA = createCounter(10);
console.log("Closure Counter +1:", counterA.increment()); // 11
console.log("Closure Counter +1:", counterA.increment()); // 12
console.log("Closure Counter -1:", counterA.decrement()); // 11

// ২. ডিবাইউন্স ফাংশন (Debounce) - ইন্টারভিউ এবং প্র্যাকটিক্যাল সার্চ ইনপুটের জন্য অত্যন্ত গুরুত্বপূর্ণ
// দ্রুত বারবার ইভেন্ট ট্রিগার হওয়া রোধ করে নির্দিষ্ট সময় পর একবার এক্সিকিউট করে
function debounce(func, delay = 300) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const handleSearch = (searchTerm) => {
  console.log(`🔍 [Debounced Search Query API Called]: "${searchTerm}"`);
};
const debouncedSearch = debounce(handleSearch, 300);
// টাইপিং সিমুলেশন:
debouncedSearch("Ja");
debouncedSearch("Java");
debouncedSearch("JavaScript"); // শুধুমাত্র শেষ ইনপুটটি ৩০০ms পর কল হবে


/* ==============================================================================
   PART 13: DOM ম্যানিপুলেশন এবং ইভেন্ট হ্যান্ডলার কনসেপ্টস
   ==============================================================================
*/
console.log("\n--- [PART 13: DOM & EVENT CONCEPTS] ---");
console.log("DOM manipulation is managed cleanly via the interactive UI components in index.html & app.js.");
