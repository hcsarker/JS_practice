/**
 * ==============================================================================
 * 📚 JAVASCRIPT MASTERCLASS: THE DEFINITIVE A TO Z CURRICULUM DATASET
 * ==============================================================================
 * ২০টি ফেজ ও চ্যাপ্টার যা জাভাস্ক্রিপ্টের শুরু থেকে শুরু করে ইন্টারভিউ, আর্কিটেকচার,
 * মেমোরি মডেল, ES2024 এবং পারফরম্যান্স পর্যন্ত সমস্ত কিছু কভার করে।
 * ==============================================================================
 */

export const categories = [
  { id: "all", label: "সব অধ্যায় (All)" },
  { id: "foundation", label: "১. ফাউন্ডেশন (Basics)" },
  { id: "core", label: "২. কোর ও ডেটা স্ট্রাকচার (Core)" },
  { id: "es6", label: "৩. ফাংশন ও আধুনিক ES6+ (Advanced)" },
  { id: "async-oop", label: "৪. Async ও OOP (Pro)" },
  { id: "web-mastery", label: "৫. DOM ও পারফরম্যান্স (Mastery)" }
];

export const tutorials = [
  // ----------------------------------------------------------------------------
  // PHASE 1: FOUNDATION & BASICS
  // ----------------------------------------------------------------------------
  {
    id: "part-01",
    category: "foundation",
    chapter: "01",
    title: "জাভাস্ক্রিপ্ট ইঞ্জিন, মেমোরি মডেল ও ভেরিয়েবল",
    badge: "Beginner",
    readTime: "6 min",
    summary: "JS Engine (V8), Call Stack vs Memory Heap, Execution Context, var vs let vs const",
    content: `
      <h3>১. জাভাস্ক্রিপ্ট কীভাবে কাজ করে? (Under the Hood)</h3>
      <p>জাভাস্ক্রিপ্ট একটি <strong>Single-Threaded, Synchronous</strong> ল্যাঙ্গুয়েজ। ব্রাউজারে V8 (Chrome) বা SpiderMonkey (Firefox) ইঞ্জিনে কোড এক্সিকিউট হয়। এর দুটি প্রধান অংশ:</p>
      <ul>
        <li><strong>Memory Heap:</strong> যেখানে অবজেক্ট, ফাংশন ও ভেরিয়েবলের জন্য মেমোরি বরাদ্দ (Allocate) করা হয়।</li>
        <li><strong>Call Stack:</strong> যেখানে ফাংশন কলগুলো একের পর এক সাজানো থাকে (LIFO - Last In First Out)।</li>
      </ul>

      <h3>২. ভেরিয়েবল: var বনাম let বনাম const</h3>
      <table class="data-table">
        <thead><tr><th>বৈশিষ্ট্য</th><th>var</th><th>let</th><th>const</th></tr></thead>
        <tbody>
          <tr><td>Scope</td><td>Function Scope</td><td>Block Scope</td><td>Block Scope</td></tr>
          <tr><td>Re-declare</td><td>✅ সম্ভব (বিপজ্জনক)</td><td>❌ ত্রুটি দেখাবে</td><td>❌ ত্রুটি দেখাবে</td></tr>
          <tr><td>Re-assign</td><td>✅ সম্ভব</td><td>✅ সম্ভব</td><td>❌ পরিবর্তন অসম্ভব</td></tr>
          <tr><td>Hoisting</td><td>Undefined দিয়ে Hoisted</td><td>Temporal Dead Zone (TDZ)</td><td>TDZ</td></tr>
        </tbody>
      </table>
    `,
    defaultCode: `// ১. মেমোরি ও ভেরিয়েবল স্কোপ পরীক্ষা
const PI = 3.14159;
let currentScore = 95;

{
  let blockVariable = "আমি শুধু এই ব্লকের ভেতরেই সীমাবদ্ধ!";
  var leakedVariable = "আমি ফাংশন স্কোপড, ব্লক পেরিয়ে বাইরে লিক হয়ে যাই!";
  console.log("ব্লকের ভেতর:", blockVariable);
}

// console.log(blockVariable); // ❌ ReferenceError!
console.log("ব্লকের বাইরে leakedVariable:", leakedVariable); // ✅ কাজ করবে (var এর ত্রুটি)

// ২. অবজেক্টের ক্ষেত্রে const এর আচরণ (Mutation)
const user = { name: "Hridoy", role: "Developer" };
user.role = "Lead Architect"; // ✅ অবজেক্টের ভিতরের প্রোপার্টি পরিবর্তন সম্ভব!
// user = {}; // ❌ নতুন অবজেক্ট অ্যাসাইন করা অসম্ভব

console.log("Updated user object:", user);`,
    tips: "কোড লেখার সময় ৯৫% ক্ষেত্রে `const` ব্যবহার করুন। শুধুমাত্র লুপ বা কাউন্টারের মতো ক্ষেত্রে যখন মান পরিবর্তন বাধ্যতামূলক, তখন `let` ব্যবহার করুন। `var` সম্পূর্ণরূপে পরিহার করুন।",
    quiz: {
      question: "নিচের কোন ক্ষেত্রে ReferenceError ঘটবে?",
      options: [
        "একটি `const` অবজেক্টের প্রোপার্টির মান পরিবর্তন করলে",
        "`let` ভেরিয়েবল ডিক্লেয়ার করার আগে অ্যাক্সেস করার চেষ্টা করলে (TDZ)",
        "`var` ভেরিয়েবল ডিক্লেয়ার করার আগে অ্যাক্সেস করলে"
      ],
      correctIndex: 1,
      explanation: "`let` এবং `const` হোইস্টিং হলেও ডিক্লেয়ারেশনের পূর্ব পর্যন্ত Temporal Dead Zone (TDZ)-এ থাকে, তাই আগে অ্যাক্সেস করলে ReferenceError হয়।"
    }
  },
  {
    id: "part-02",
    category: "foundation",
    chapter: "02",
    title: "ডাটা টাইপস, Type Coercion ও Truthy/Falsy",
    badge: "Beginner",
    readTime: "7 min",
    summary: "7 Primitive Types, Reference Types, Implicit vs Explicit Coercion, NaN, 6 Falsy Values",
    content: `
      <h3>১. প্রিমিটিভ বনাম রেফারেন্স ডাটা টাইপ</h3>
      <ul>
        <li><strong>Primitive (Immutables):</strong> <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>symbol</code>, <code>bigint</code>। এগুলো মেমোরিতে সরাসরি মান হিসেবে জমা থাকে (Stack)।</li>
        <li><strong>Reference (Mutables):</strong> <code>Object</code>, <code>Array</code>, <code>Function</code>। এগুলো মেমোরি হেপে জমা থাকে এবং ভেরিয়েবলে শুধু মেমোরি অ্যাড্রেস (রেফারেন্স) সেভ হয়।</li>
      </ul>

      <h3>২. Type Coercion (অটোমেটিক টাইপ কনভার্সন)</h3>
      <p>জাভাস্ক্রিপ্ট অনেক সময় নিজে থেকেই এক টাইপ থেকে অন্য টাইপে ডাটা কনভার্ট করে ফেলে। যেমন: <code>"5" + 2 = "52"</code> (স্ট্রিং কনক্যাটেনেশন), কিন্তু <code>"5" - 2 = 3</code> (সংখ্যার বিয়োগ)! এজন্য সতর্ক থাকা দরকার।</p>
    `,
    defaultCode: `// ১. Type Coercion এর ম্যাজিক ও ফাঁদ
console.log("'10' + 5  =>", '10' + 5);      // "105" (স্ট্রিং রূপান্তর)
console.log("'10' - 5  =>", '10' - 5);      // 5 (নাম্বার রূপান্তর)
console.log("true + 2   =>", true + 2);      // 3 (true = 1)
console.log("false + 2  =>", false + 2);     // 2 (false = 0)
console.log("null + 5   =>", null + 5);      // 5 (null = 0)
console.log("undefined + 5 =>", undefined + 5); // NaN

// ২. Reference Types এর মেমোরি আচরণ
const personA = { name: "Yeash" };
const personB = personA; // একই রেফারেন্স কপি হলো!

personB.name = "Sarker";
console.log("personA.name:", personA.name); // "Sarker" (কারণ উভয়ে একই অবজেক্টকে পয়েন্ট করছে)

// ৩. NaN এর বিশেষ নিয়ম
console.log("NaN === NaN:", NaN === NaN); // false!
console.log("Number.isNaN('abc'):", Number.isNaN('abc')); // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true`,
    tips: "কোনো ভ্যালু NaN কিনা তা নিশ্চিত হতে সর্বদা `Number.isNaN()` ব্যবহার করুন।",
    quiz: {
      question: "জাভাস্ক্রিপ্টে typeof null এর আউটপুট কী আসে?",
      options: ["'null'", "'undefined'", "'object'"],
      correctIndex: 2,
      explanation: "জাভাস্ক্রিপ্টের প্রথম সংস্করণের একটি পরিচিত এবং ঐতিহাসিক বাগের কারণে `typeof null` এর মান 'object' দেখায়।"
    }
  },
  {
    id: "part-03",
    category: "foundation",
    chapter: "03",
    title: "অপারেটরস, শর্ট-সার্কিট ও মডার্ন কন্ট্রোল ফ্লো",
    badge: "Beginner",
    readTime: "7 min",
    summary: "Strict Equality (===), Short-circuit (&&, ||), Nullish (??), Optional Chaining (?.), Switch",
    content: `
      <h3>১. Short-Circuit Evaluation</h3>
      <p>লজিক্যাল অপারেটরগুলো কেবল বুলিয়ান রিটার্ন করে না, বরং সরাসরি প্রথম সত্য বা মিথ্যা অপারেন্ড রিটার্ন করে:</p>
      <ul>
        <li><code>A && B</code>: A যদি ফলসি হয়, সাথে সাথে A রিটার্ন করবে; অন্যথায় B রিটার্ন করবে।</li>
        <li><code>A || B</code>: A যদি ট্রুথি হয়, সাথে সাথে A রিটার্ন করবে; অন্যথায় B রিটার্ন করবে।</li>
      </ul>

      <h3>২. Nullish Coalescing (<code>??</code>) বনাম <code>||</code></h3>
      <p><code>||</code> যেকোনো ফলসি মান (0, "", false) পেলে ডানপাশের মান নেয়। কিন্তু <code>??</code> শুধুমাত্র <code>null</code> বা <code>undefined</code> পেলেই ডানপাশের ফলব্যাক মান দেয়।</p>
    `,
    defaultCode: `// ১. Short-Circuiting বাস্তব ব্যবহার
const isLoggedIn = true;
const showNotification = () => console.log("🔔 নতুন নোটিফিকেশন এসেছে!");
isLoggedIn && showNotification(); // লগইন ট্রু হলেই কেবল ফাংশন রান করবে

// ২. ?? বনাম || এর নিখুঁত পার্থক্য
const productCount = 0; // স্টক ০ টি
const countUsingOR = productCount || 10;
const countUsingNullish = productCount ?? 10;

console.log("Using || (ভুল ফলব্যাক):", countUsingOR);        // 10
console.log("Using ?? (সঠিক প্রকৃত স্টক):", countUsingNullish); // 0

// ৩. Optional Chaining (?.) সহ ডিপ নেস্টেড অবজেক্ট
const enterprise = {
  organization: {
    dept: {
      teamLead: "Hridoy",
      getSalary: () => 120000
    }
  }
};

console.log("Lead:", enterprise?.organization?.dept?.teamLead);
console.log("Salary:", enterprise?.organization?.dept?.getSalary?.());
console.log("Non-existing:", enterprise?.client?.accountManager); // undefined, কোনো ত্রুটি নেই!`,
    tips: "কনফিগারেশন সেটিংসে যখন 0 বা খালি স্ট্রিংও ভ্যালিড মান হতে পারে, তখন সর্বদা `??` (Nullish Coalescing) ব্যবহার করুন।",
    quiz: {
      question: "console.log(false || 'default') এর মান কী হবে?",
      options: ["false", "'default'", "undefined"],
      correctIndex: 1,
      explanation: "যেহেতু `false` একটি ফলসি মান, তাই `||` অপারেটর দ্বিতীয় মান অর্থাৎ 'default' রিটার্ন করে।"
    }
  },
  {
    id: "part-04",
    category: "foundation",
    chapter: "04",
    title: "লুপ ও ইটারেশনস (Deep Dive on Loops)",
    badge: "Beginner",
    readTime: "8 min",
    summary: "for, while, do-while, break, continue, for...of, for...in, Labeled Statements",
    content: `
      <h3>১. কোন লুপ কখন ব্যবহার করবেন?</h3>
      <ul>
        <li><strong>for...of:</strong> অ্যারে, স্ট্রিং, সেট, ম্যাপ ইত্যাদি ইটারেবলের উপাদান (Values) রিড করতে।</li>
        <li><strong>for...in:</strong> শুধুমাত্র অবজেক্টের কী (Keys) বের করার জন্য। (কখনোই অ্যারেতে নয়!)</li>
        <li><strong>for loop:</strong> যখন সূচিপত্র বা ইনডেক্স নিয়ে জটিল অপারেশন প্রয়োজন।</li>
      </ul>

      <h3>২. লেবেলযুক্ত স্টেটমেন্ট (Labeled Loops)</h3>
      <p>নেস্টেড লুপের ক্ষেত্রে ভেতরের লুপ থেকে সরাসরি বাইরের লুপ ব্রেক করার জন্য লেবেল ব্যবহার করা যায়।</p>
    `,
    defaultCode: `// ১. Labeled Loop উদাহরণ
console.log("--- Labeled Loop Execution ---");
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      console.log(\`ভেতর থেকে সরাসরি বাইরের লুপ বন্ধ: i=\${i}, j=\${j}\`);
      break outerLoop; // সরাসরি outerLoop বন্ধ করে দিবে
    }
    console.log(\`i=\${i}, j=\${j}\`);
  }
}

// ২. for...of দিয়ে স্ট্রিং ইটারেশন
const tech = "JS";
for (const char of tech) {
  console.log("Character:", char);
}

// ৩. for...in এর সাথে Object.hasOwn নিরাপত্তা
const car = { brand: "Tesla", model: "Model 3" };
for (const key in car) {
  if (Object.hasOwn(car, key)) {
    console.log(\`\${key}: \${car[key]}\`);
  }
}`,
    tips: "অ্যারে লুপ করার সময় সবসময় `for...of` বা আধুনিক মেথড (`forEach`, `map`) ব্যবহার করুন।"
  },

  // ----------------------------------------------------------------------------
  // PHASE 2: CORE DATA STRUCTURES & BUILT-INS
  // ----------------------------------------------------------------------------
  {
    id: "part-05",
    category: "core",
    chapter: "05",
    title: "নাম্বার্স, বিগইন্ট, ম্যাথ ও প্রিসিশন হ্যান্ডলিং",
    badge: "Intermediate",
    readTime: "8 min",
    summary: "IEEE 754 Floating point problem, 0.1+0.2===0.3 issue, Math methods, BigInt, Number.EPSILON",
    content: `
      <h3>১. ফ্লোটিং পয়েন্ট ও 0.1 + 0.2 সমস্যা</h3>
      <p>জাভাস্ক্রিপ্ট IEEE 754 ডাবল প্রিসিশন ব্যবহার করে। তাই বাইনারিতে দশমিক ফ্র্যাকশন রূপান্তরের সীমাবদ্ধতার কারণে <code>0.1 + 0.2 === 0.30000000000000004</code> আসে! ফিন্যান্সিয়াল অ্যাপে এটি খুবই জটিল সমস্যা সৃষ্টি করে।</p>
      <p><strong>সমাধান:</strong> <code>Number.EPSILON</code> ব্যবহার করে দুটি দশমিকের পার্থক্য সহনশীল সীমার ভেতর আছে কিনা তা যাচাই করা।</p>

      <h3>২. BigInt</h3>
      <p><code>Number.MAX_SAFE_INTEGER</code> (9007199254740991) এর চেয়ে বড় সংখ্যার সুনির্দিষ্ট হিসাব রাখতে সংখ্যার শেষে <code>n</code> যোগ করে <strong>BigInt</strong> তৈরি করা হয়।</p>
    `,
    defaultCode: `// ১. 0.1 + 0.2 সমস্যার সমাধান
const sum = 0.1 + 0.2;
console.log("0.1 + 0.2 সরাসরি যোগফল:", sum);
console.log("0.1 + 0.2 === 0.3 :", sum === 0.3); // false!

// নিরাপদ যাচাইয়ের ফাংশন
function areFloatsEqual(num1, num2) {
  return Math.abs(num1 - num2) < Number.EPSILON;
}
console.log("নিরাপদ চেকিং (areFloatsEqual):", areFloatsEqual(0.1 + 0.2, 0.3)); // true!

// ২. BigInt দিয়ে বিশাল সংখ্যার হিসাব
const hugeNumberA = 9007199254740995n;
const hugeNumberB = 10n;
console.log("BigInt গুণফল:", hugeNumberA * hugeNumberB);

// ৩. ক্রিপ্টোগ্রাফিক সিকিউর র‍্যান্ডম সংখ্যা
console.log("Round:", Math.round(4.5));
console.log("Ceil:", Math.ceil(4.1));
console.log("Floor:", Math.floor(4.9));`,
    tips: "মুদ্রা বা টাকার হিসাব করার সময় পয়সায় (Cent বা Poisha) পূর্ণসংখ্যায় কনভার্ট করে হিসাব করুন এবং শেষে ১০০ দিয়ে ভাগ করুন।"
  },
  {
    id: "part-06",
    category: "core",
    chapter: "06",
    title: "স্ট্রিং ও রেগুলার এক্সপ্রেশন (Strings & RegEx)",
    badge: "Intermediate",
    readTime: "8 min",
    summary: "Unicode/UTF-16, Template Literals, Tagged Templates, RegEx patterns (test, match, replace)",
    content: `
      <h3>১. ট্যাগড টেমপ্লেট লিটারেল (Tagged Templates)</h3>
      <p>টেমপ্লেট লিটারেলের পূর্বে একটি ফাংশন ট্যাগ বসিয়ে স্ট্রিং ও এক্সপ্রেশনগুলোকে ইন্টারসেপ্ট করে কাস্টম ফরম্যাটিং করা যায় (যেমন Styled Components এ ব্যবহৃত হয়)।</p>

      <h3>২. রেগুলার এক্সপ্রেশন (RegEx)</h3>
      <p>ইনপুট ভ্যালিডেশন (যেমন ইমেইল, ফোন নম্বর) এবং প্যাটার্ন খোঁজার জন্য RegEx অপরিহার্য। <code>/pattern/flags</code> এর মাধ্যমে রেজেক্স ডিফাইন করা হয়।</p>
    `,
    defaultCode: `// ১. Tagged Template এর জাদু
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    const val = values[i] ? \`<b style="color:blue">\${values[i]}</b>\` : "";
    return \`\${acc}\${str}\${val}\`;
  }, "");
}

const devName = "Hridoy";
const experienceYears = 3;
console.log(highlight\`Developer \${devName} has \${experienceYears} years experience.\`);

// ২. রেগুলার এক্সপ্রেশন দিয়ে ইমেইল ও ফোন ভ্যালিডেশন
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
console.log("test@example.com ভ্যালিড? ->", emailRegex.test("test@example.com"));
console.log("invalid-email ভ্যালিড? ->", emailRegex.test("invalid-email"));

// ৩. replaceAll এবং ক্যাপিটালাইজেশন
const titleText = "learn javascript with passion";
const capitalized = titleText.replace(/\\b\\w/g, char => char.toUpperCase());
console.log("Capitalized Title:", capitalized);`,
    tips: "`includes()`, `startsWith()`, `endsWith()` ব্যবহার করলে সাধারণ স্ট্রিং খোঁজার জন্য ভারী RegEx এর প্রয়োজন পড়ে না।"
  },
  {
    id: "part-07",
    category: "core",
    chapter: "07",
    title: "আধুনিক অ্যারে মেথডস ও ES2023 ইমিউটেবল অপারেশনস",
    badge: "Intermediate",
    readTime: "10 min",
    summary: "map, filter, reduce, toSorted(), toReversed(), toSpliced(), with(), flat, flatMap",
    content: `
      <h3>১. পুরাতন Mutating মেথড বনাম নতুন ES2023 Non-Mutating মেথড</h3>
      <p>জাভাস্ক্রিপ্টের ঐতিহ্যবাহী <code>sort()</code>, <code>reverse()</code>, <code>splice()</code> মূল অ্যারেকে সরাসরি পরিবর্তন করে দেয় (Mutate)। আধুনিক ফ্রেমওয়ার্কে (React, Redux, Vue) ইমিউটেবিলিটি বাধ্যতামূলক।</p>
      <ul>
        <li><code>arr.toSorted()</code>: মূল অ্যারে অপরিবর্তিত রেখে নতুন সর্ট করা অ্যারে দেয়।</li>
        <li><code>arr.toReversed()</code>: নতুন রিভার্সড অ্যারে দেয়।</li>
        <li><code>arr.toSpliced()</code>: নতুন স্প্লাইসড অ্যারে দেয়।</li>
        <li><code>arr.with(index, value)</code>: কোনো ইনডেক্সের মান বদলে নতুন কপি তৈরি করে।</li>
      </ul>
    `,
    defaultCode: `// ১. ES2023 ইমিউটেবল অ্যারে মেথডস
const originalScores = [88, 45, 92, 70];

const sortedScores = originalScores.toSorted((a, b) => a - b);
console.log("মূল অ্যারে অক্ষত:", originalScores); // [88, 45, 92, 70]
console.log("নতুন সর্ট করা অ্যারে:", sortedScores); // [45, 70, 88, 92]

const replacedFirst = originalScores.with(0, 100);
console.log("With() দিয়ে নতুন কপি:", replacedFirst);

// ২. flat() এবং flatMap()
const nestedArrays = [1, [2, [3, [4]]]];
console.log("Full Deep Flatten (Infinity):", nestedArrays.flat(Infinity));

// ৩. reduce দিয়ে জটিল এগ্রিগেশন (গ্রুপিং)
const inventory = [
  { name: "Laptop", category: "Tech" },
  { name: "Apple", category: "Food" },
  { name: "Phone", category: "Tech" }
];

const grouped = inventory.reduce((acc, item) => {
  acc[item.category] = acc[item.category] || [];
  acc[item.category].push(item.name);
  return acc;
}, {});
console.log("Category Wise Grouped:", grouped);`,
    tips: "ইমিউটেবল মেথড ব্যবহার করলে কোডে অপ্রত্যাশিত সাইড-ইফেক্ট (Side-effects) ও বাগ দূর হয়।"
  },
  {
    id: "part-08",
    category: "core",
    chapter: "08",
    title: "অবজেক্ট, Shallow Copy বনাম Deep Copy (structuredClone)",
    badge: "Intermediate",
    readTime: "9 min",
    summary: "Object.freeze, Object.seal, Object.preventExtensions, Spread trap, structuredClone()",
    content: `
      <h3>১. Shallow Copy বনাম Deep Copy এর ফাঁদ</h3>
      <p>স্প্রেড অপারেটর (<code>{...obj}</code>) অথবা <code>Object.assign()</code> কেবল <strong>Shallow Copy</strong> করে। অর্থাৎ ভেতরের নেস্টেড অবজেক্টগুলো আগের মতোই একই রেফারেন্স ধরে রাখে।</p>
      <p>পূর্বে <code>JSON.parse(JSON.stringify(obj))</code> দিয়ে ডিপ কপি করা হতো, যা Date, Function, undefined এবং Circular Reference সাপোর্ট করে না। আধুনিক ব্রাউজারে এর সর্বশ্রেষ্ঠ সমাধান হলো <code>structuredClone()</code>!</p>
    `,
    defaultCode: `// ১. Shallow Copy এর সমস্যা
const originalUser = {
  name: "Robin",
  preferences: { theme: "dark" }
};

const shallowCopy = { ...originalUser };
shallowCopy.preferences.theme = "light"; // নেস্টেড প্রোপার্টি পরিবর্তন

console.log("Original theme নষ্ট হয়ে গেছে:", originalUser.preferences.theme); // "light"!

// ২. structuredClone দিয়ে পরিপূর্ণ Deep Copy
const safeUser = {
  name: "Yeash",
  joinedDate: new Date(),
  tags: ["javascript", "coding"],
  profile: { status: "active" }
};

const deepCopied = structuredClone(safeUser);
deepCopied.profile.status = "offline";

console.log("Original status অক্ষত:", safeUser.profile.status); // "active" (নিরাপদ!)

// ৩. Object.freeze বনাম Object.seal
const config = { apiEndpoint: "https://api.com", timeout: 5000 };
Object.freeze(config); // কোনো প্রোপার্টি যোগ, বিয়োগ বা এডিট করা যাবে না
// config.timeout = 1000; // কাজ করবে না`,
    tips: "নেস্টেড অবজেক্ট বা অ্যারে সম্পূর্ণ ক্লোন করতে সর্বদা আধুনিক `structuredClone()` ব্যবহার করুন।"
  },
  {
    id: "part-09",
    category: "core",
    chapter: "09",
    title: "আধুনিক ডেটা স্ট্রাকচার: Set, Map, WeakSet ও WeakMap",
    badge: "Intermediate",
    readTime: "9 min",
    summary: "Unique collection with Set, Key-Value pairs with Map, Garbage Collection with WeakMap",
    content: `
      <h3>১. Set (ইউনিক উপাদানের সংগ্রহ)</h3>
      <p>অ্যারে থেকে ডুপ্লিকেট উপাদান দূর করার সবচেয়ে দ্রুত ও কার্যকরী উপায় হলো <code>Set</code>।</p>

      <h3>২. Map বনাম Object</h3>
      <p>সাধারণ Object-এ কী (Key) হিসেবে শুধুমাত্র স্ট্রিং বা সিম্বল দেওয়া যায়। কিন্তু <code>Map</code>-এ যেকোনো অবজেক্ট, ফাংশন বা প্রিমিটিভ ডাটা টাইপকেও কী হিসেবে ব্যবহার করা যায় এবং এটি ক্রম (Insertion order) বজায় রাখে।</p>

      <h3>৩. WeakMap ও WeakSet</h3>
      <p>এদের কী হিসেবে কেবল অবজেক্ট দেওয়া যায়। কোনো অবজেক্টের আর কোনো রেফারেন্স না থাকলে গারবেজ কালেক্টর স্বয়ংক্রিয়ভাবে মেমোরি খালি করে দেয়, ফলে মেমোরি লিক হয় না।</p>
    `,
    defaultCode: `// ১. Set দিয়ে অ্যারের ডুপ্লিকেট দূর করা (১ লাইনে!)
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 5, 5];
const uniqueNumbers = [...new Set(numbersWithDuplicates)];
console.log("ইউনিক অ্যারে:", uniqueNumbers);

// ২. Map এর চমৎকার ব্যবহার
const userRolesMap = new Map();
const userA = { id: 1, name: "Hridoy" };
const userB = { id: 2, name: "Tanvir" };

userRolesMap.set(userA, "Super Administrator");
userRolesMap.set(userB, "Content Moderator");

console.log("UserA এর রোল:", userRolesMap.get(userA));
console.log("Map সাইজ:", userRolesMap.size);

// ৩. WeakMap উদাহরণ
const privateData = new WeakMap();
let tempObj = { sensitiveInfo: "1234-pass" };
privateData.set(tempObj, "Secret Metadata");

console.log("WeakMap Info:", privateData.get(tempObj));
tempObj = null; // মেমোরি হেপ থেকে গারবেজ কালেক্টর স্বয়ংক্রিয়ভাবে মুছে ফেলবে`,
    tips: "যখন ডুপ্লিকেট বাদ দিতে হবে তখন `Set` এবং যখন যেকোনো ডেটা টাইপকে Key বানাতে হবে তখন `Map` ব্যবহার করুন।"
  },

  // ----------------------------------------------------------------------------
  // PHASE 3: ADVANCED FUNCTIONS & ES6+ IN-DEPTH
  // ----------------------------------------------------------------------------
  {
    id: "part-10",
    category: "es6",
    chapter: "10",
    title: "ফাংশন আর্কিটেকচার, স্কোপ চেইন ও ক্লোজার্স (Closures)",
    badge: "Advanced",
    readTime: "10 min",
    summary: "Execution Context, Lexical Environment, Scope Chain, Closures, Currying, IIFE",
    content: `
      <h3>১. ক্লোজার (Closure) কীভাবে মেমোরিতে কাজ করে?</h3>
      <p>ফাংশন তৈরির সময় তার চারপাশের লেক্সিক্যাল এনভায়রনমেন্টের (Lexical Environment) সাথে ফাংশনটি যুক্ত হয়ে একটি ক্লোজার তৈরি করে। বাইরের ফাংশন শেষ হয়ে গেলেও ভেতরের ফাংশন বাইরের ভেরিয়েবলগুলোকে ব্যাকপ্যাকে (Backpack / Heap) সংরক্ষণ করে রাখে।</p>

      <h3>২. কারিয়িং (Currying)</h3>
      <p>একটি বহু-আর্গুমেন্টের ফাংশনকে রূপান্তর করে একগুচ্ছ একক-আর্গুমেন্ট ফাংশনে পরিণত করার টেকনিক। যেমন: <code>f(a, b, c)</code> হয়ে যায় <code>f(a)(b)(c)</code>।</p>
    `,
    defaultCode: `// ১. ক্লোজার দিয়ে প্রাইভেট স্টেট মেমোরি
function bankVault(initialCash) {
  let secretVaultBalance = initialCash; // বাইরে থেকে সরাসরি অ্যাক্সেস অসম্ভব

  return {
    deposit: (amount) => {
      secretVaultBalance += amount;
      return \`জমা হয়েছে: $\${amount}, মোট: $\${secretVaultBalance}\`;
    },
    checkBalance: () => secretVaultBalance
  };
}

const myVault = bankVault(1000);
console.log(myVault.deposit(500));
console.log("প্রাইভেট ব্যালেন্স:", myVault.checkBalance());

// ২. ফাংশন কারিয়িং (Currying)
const discountCalculator = (discountPercent) => (price) => {
  return price - (price * discountPercent) / 100;
};

const tenPercentDiscount = discountCalculator(10);
const twentyPercentDiscount = discountCalculator(20);

console.log("১০% ছাড় সহ $500 পণ্যের মূল্য:", tenPercentDiscount(500));
console.log("২০% ছাড় সহ $500 পণ্যের মূল্য:", twentyPercentDiscount(500));`,
    tips: "ক্লোজার ডাটা এনক্যাপসুলেশন ও প্রাইভেট ভেরিয়েবল তৈরির জন্য ফাংশনাল প্রোগ্রামিংয়ের সবচেয়ে শক্তিশালী অস্ত্র।"
  },
  {
    id: "part-11",
    category: "es6",
    chapter: "11",
    title: "The `this` Keyword ও Explicit Binding (call, apply, bind)",
    badge: "Advanced",
    readTime: "10 min",
    summary: "Default, Implicit, Explicit & New binding, Arrow function lexical this, call, apply, bind",
    content: `
      <h3>১. 'this' এর ৪টি প্রধান নিয়ম</h3>
      <ul>
        <li><strong>Default Binding:</strong> গ্লোবাল স্কোপে <code>window</code> (বা strict mode এ <code>undefined</code>)।</li>
        <li><strong>Implicit Binding:</strong> অবজেক্টের মেথড হিসেবে কল করলে ডটের বামপাশের অবজেক্টটি <code>this</code> হয়।</li>
        <li><strong>Explicit Binding:</strong> <code>call</code>, <code>apply</code>, বা <code>bind</code> দিয়ে জোরপূর্বক <code>this</code> নির্দিষ্ট করে দেওয়া।</li>
        <li><strong>New Binding:</strong> কনস্ট্রাক্টর ফাংশনে নতুন তৈরি হওয়া অবজেক্টটি <code>this</code> হয়।</li>
      </ul>
      <p>⚠️ <strong>Arrow Function:</strong> অ্যারো ফাংশনের নিজস্ব <code>this</code> নেই, এটি তার প্যারেন্ট স্কোপের <code>this</code> ব্যবহার করে।</p>
    `,
    defaultCode: `// ১. call, apply, bind এর বাস্তব প্রয়োগ
const developer1 = { name: "Hridoy", salary: 80000 };
const developer2 = { name: "Yeash", salary: 95000 };

function printTaxSummary(taxRate, currencySymbol) {
  const tax = (this.salary * taxRate) / 100;
  console.log(\`\${this.name} pays tax: \${currencySymbol}\${tax} (Base: \${currencySymbol}\${this.salary})\`);
}

// call() -> কমা দিয়ে আর্গুমেন্ট পাঠানো হয়
printTaxSummary.call(developer1, 15, "$");

// apply() -> অ্যারে আকারে আর্গুমেন্ট পাঠানো হয়
printTaxSummary.apply(developer2, [20, "$"]);

// bind() -> নতুন একটি ফাংশন রিটার্ন করে যা পরবর্তীতে কল করা যায়
const calculateDev1Tax = printTaxSummary.bind(developer1, 10, "$");
calculateDev1Tax();`,
    tips: "ইভেন্ট লিসেনারে অ্যারো ফাংশন ব্যবহার করলে `this` আর বাটনকে পয়েন্ট করে না। তাই এলিমেন্টকে অ্যাক্সেস করতে `e.currentTarget` ব্যবহার করাই আধুনিক নিরাপদ পন্থা।"
  },
  {
    id: "part-12",
    category: "es6",
    chapter: "12",
    title: "প্রোটোটাইপ ও প্রোটোটাইপাল ইনহেরিট্যান্স (Prototypes Deep Dive)",
    badge: "Advanced",
    readTime: "10 min",
    summary: "prototype vs __proto__, Prototype Chain, Object.create(), Method sharing in memory",
    content: `
      <h3>১. প্রোটোটাইপ কী এবং কেন প্রয়োজন?</h3>
      <p>জাভাস্ক্রিপ্টে যখন আমরা একাধিক অবজেক্ট তৈরি করি, প্রতিটি অবজেক্টের ভেতরে মেথডগুলো বার বার তৈরি না করে তাদের প্যারেন্ট <strong>Prototype</strong>-এ রেখে দেওয়া হয়। এতে লক্ষ লক্ষ অবজেক্ট তৈরি করলেও মেমোরি খরচ হয় না।</p>

      <h3>২. Prototype Chain</h3>
      <p>কোনো অবজেক্টে যখন কোনো প্রোপার্টি খোঁজা হয়, প্রথমে তার নিজের ভেতরে খোঁজা হয়। না পেলে তার <code>__proto__</code> এ যায়, সেখান থেকে <code>Object.prototype</code> এ এবং সর্বশেষে <code>null</code> এ গিয়ে অনুসন্ধান শেষ হয়।</p>
    `,
    defaultCode: `// ১. কনস্ট্রাক্টর ফাংশন ও প্রোটোটাইপ মেথড শেয়ারিং
function Laptop(brand, ram) {
  this.brand = brand;
  this.ram = ram;
}

// মেথডটি প্রোটোটাইপে রাখা হলো যাতে সব ল্যাপটপ অবজেক্ট এটি মেমোরি শেয়ার করে
Laptop.prototype.upgradeRAM = function (additionalRAM) {
  this.ram += additionalRAM;
  console.log(\`\${this.brand} RAM আপগ্রেড হয়েছে: \${this.ram}GB\`);
};

const mac = new Laptop("Apple MacBook", 16);
const dell = new Laptop("Dell XPS", 16);

mac.upgradeRAM(16);

// প্রোটোটাইপ চেইন পরীক্ষা
console.log("mac এর নিজস্ব মেথড?", Object.hasOwn(mac, "upgradeRAM")); // false
console.log("প্রোটোটাইপ থেকে এসেছে?", mac.__proto__ === Laptop.prototype); // true
console.log("রুট প্রোটোটাইপ:", Object.prototype.__proto__); // null (চেইনের সমাপ্তি)`,
    tips: "ES6 এর `class` সিনট্যাক্স মূলত এই প্রোটোটাইপাল চেইনের উপরেই তৈরি একটি 'Syntactic Sugar'।"
  },

  // ----------------------------------------------------------------------------
  // PHASE 4: ASYNC JS & OBJECT ORIENTED PROGRAMMING (PRO)
  // ----------------------------------------------------------------------------
  {
    id: "part-13",
    category: "async-oop",
    chapter: "13",
    title: "অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP - Classes, Encapsulation, Polymorphism)",
    badge: "Advanced",
    readTime: "11 min",
    summary: "ES6 Classes, Private properties (#), Getters/Setters, Static methods, Polymorphism, Bank App",
    content: `
      <h3>১. আধুনিক ক্লাসের ৪টি স্তম্ভ (Pillars of OOP)</h3>
      <ul>
        <li><strong>Encapsulation:</strong> প্রাইভেট ফিল্ড (<code>#private</code>) দিয়ে ক্লাসের অভ্যন্তরীণ ডাটা সুরক্ষিত রাখা।</li>
        <li><strong>Inheritance:</strong> <code>extends</code> ও <code>super()</code> দিয়ে কোড রিইউজ করা।</li>
        <li><strong>Polymorphism:</strong> চাইল্ড ক্লাসে প্যারেন্ট ক্লাসের মেথড ওভাররাইড করে নতুন আচরণ দেওয়া।</li>
        <li><strong>Abstraction:</strong> জটিল লজিক ভেতরে লুকিয়ে সহজ ইন্টারফেস প্রদান করা।</li>
      </ul>
    `,
    defaultCode: `// 🏦 সম্পূর্ণ এনক্যাপসুলেটেড ডিজিটাল ব্যাংক অ্যাকাউন্ট
class BankAccount {
  #balance;           // প্রাইভেট প্রোপার্টি (বাইরে থেকে রিড বা রাইট অসম্ভব)
  #transactionHistory; // প্রাইভেট স্টেট

  constructor(holderName, initialDeposit = 0) {
    this.holderName = holderName;
    this.#balance = initialDeposit;
    this.#transactionHistory = [];
  }

  // Getter (নিরাপদে ব্যালেন্স পড়ার জন্য)
  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("জমার পরিমাণ ধনাত্মক হতে হবে!");
    this.#balance += amount;
    this.#transactionHistory.push({ type: "CREDIT", amount, time: new Date() });
    console.log(\`✅ \${amount} টাকা জমা হয়েছে। বর্তমান ব্যালেন্স: \${this.#balance}\`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(\`❌ অপর্যাপ্ত ব্যালেন্স! আপনার আছে: \${this.#balance}, তুলতে চেয়েছেন: \${amount}\`);
      return false;
    }
    this.#balance -= amount;
    this.#transactionHistory.push({ type: "DEBIT", amount, time: new Date() });
    console.log(\`💸 \${amount} টাকা তোলা হয়েছে। অবশিষ্ট ব্যালেন্স: \${this.#balance}\`);
    return true;
  }
}

// পলিমরফিজম ও ইনহেরিট্যান্স
class IslamicAccount extends BankAccount {
  // প্রফিট ক্যালকুলেশন মেথড
  addAnnualProfit(ratePercent) {
    const profit = (this.balance * ratePercent) / 100;
    console.log(\`🌙 শরীয়াহ সম্মত মুনাফা: +\${profit}\`);
    this.deposit(profit);
  }
}

const myAccount = new IslamicAccount("Hridoy", 5000);
myAccount.deposit(2000);
myAccount.withdraw(1000);
myAccount.addAnnualProfit(6.5);
console.log("চূড়ান্ত ব্যালেন্স:", myAccount.balance);`,
    tips: "প্রাইভেট ফিল্ড (#) ক্লাসের ভেতরেই কেবল অ্যাক্সেসযোগ্য। ফলে কোনো বাইরের লাইব্রেরি বা কোড ডাটা করাপ্ট করতে পারে না।"
  },
  {
    id: "part-14",
    category: "async-oop",
    chapter: "14",
    title: "ইভেন্ট লুপ, মাইক্রোটাস্ক বনাম ম্যাক্রোটাস্ক কিউ (Event Loop Mastery)",
    badge: "Advanced",
    readTime: "11 min",
    summary: "Call Stack, Event Loop, Microtask Queue (Promises, queueMicrotask) vs Macrotask Queue (setTimeout)",
    content: `
      <h3>১. ইভেন্ট লুপ কীভাবে কাজ করে?</h3>
      <p>জাভাস্ক্রিপ্ট সিনক্রোনাস কোডগুলো প্রথমে <strong>Call Stack</strong>-এ সরাসরি চালায়। অ্যাসিনক্রোনাস কাজগুলোকে ব্যাকগ্রাউন্ডে পাঠিয়ে দেয় এবং তাদের সম্পূর্ণ হওয়ার পর দুটি কিউতে সাজায়:</p>
      <ol>
        <li><strong>Microtask Queue:</strong> <code>Promise.then/catch</code>, <code>async/await</code>, <code>queueMicrotask()</code>, <code>MutationObserver</code>। (সর্বোচ্চ প্রায়োরিটি!)</li>
        <li><strong>Macrotask Queue (Task Queue):</strong> <code>setTimeout</code>, <code>setInterval</code>, <code>setImmediate</code>, I/O ইভেন্ট।</li>
      </ol>
      <p><strong>নিয়ম:</strong> Call Stack খালি হওয়ার সাথে সাথে ইভেন্ট লুপ আগে <em>সমস্ত</em> মাইক্রোটাস্ক শেষ করবে, তারপর মাত্র <em>একটি</em> ম্যাক্রোটাস্ক এক্সিকিউট করবে!</p>
    `,
    defaultCode: `// 🎯 বিখ্যাত ইন্টারভিউ পাজল: আউটপুটের ক্রম কী হবে?
console.log("১: Synchronous Start");

setTimeout(() => {
  console.log("৪: Macrotask (setTimeout - 0ms)");
}, 0);

Promise.resolve().then(() => {
  console.log("৩: Microtask (Promise 1)");
}).then(() => {
  console.log("৩.১: Microtask Chained (Promise 2)");
});

queueMicrotask(() => {
  console.log("৩.২: Explicit queueMicrotask");
});

console.log("২: Synchronous End");

// ফলাফল ক্রমান্বয়ে:
// ১: Synchronous Start
// ২: Synchronous End
// ৩: Microtask (Promise 1)
// ৩.২: Explicit queueMicrotask
// ৩.১: Microtask Chained (Promise 2)
// ৪: Macrotask (setTimeout - 0ms)`,
    tips: "প্রতিটি ম্যাক্রোটাস্ক চলার আগে সমস্ত মাইক্রোটাস্ক অগ্রাধিকার পায় — এটি মনে রাখলে জটিল অ্যাসিনক্রোনাস কোড ডিবাগ করা সহজ হয়।"
  },
  {
    id: "part-15",
    category: "async-oop",
    chapter: "15",
    title: "প্রমিজ কম্বিনেটরস (Promise.all, allSettled, race, any)",
    badge: "Advanced",
    readTime: "10 min",
    summary: "Parallel asynchronous execution, Promise.all, Promise.allSettled, Promise.race, Promise.any",
    content: `
      <h3>৪টি প্রমিজ কম্বিনেটর কখন কোনটা ব্যবহার করবেন?</h3>
      <table class="data-table">
        <thead><tr><th>মেথড</th><th>কখন ব্যবহার করবেন?</th><th>ব্যর্থতার আচরণ</th></tr></thead>
        <tbody>
          <tr><td>Promise.all()</td><td>সবগুলো কাজ সফল হওয়া বাধ্যতামূলক হলে</td><td>যেকোনো ১টি ফেইল করলেই পুরোটা রিজেক্ট হয় (Fail-fast)</td></tr>
          <tr><td>Promise.allSettled()</td><td>সবগুলো রিকোয়েস্টের রেজাল্ট (সফল/ব্যর্থ) রিপোর্ট দেখতে চাইলে</td><td>কখনোই রিজেক্ট হয় না, সবগুলোর স্ট্যাটাস দেয়</td></tr>
          <tr><td>Promise.race()</td><td>যে সবার আগে রেজাল্ট দেয় (সফল বা ব্যর্থ) তাকে গ্রহণ করতে</td><td>প্রথম যেই প্রমিজ নিষ্পত্তি হবে সেটাই রিটার্ন করবে</td></tr>
          <tr><td>Promise.any()</td><td>একাধিক মিরর সার্ভার থেকে দ্রুততম সফল রেজাল্ট পেতে</td><td>সবগুলো ফেইল করলে তবেই AggregateError দেয়</td></tr>
        </tbody>
      </table>
    `,
    defaultCode: `// প্রমিজ সিমুলেটর
const createJob = (name, delay, willPass) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (willPass) resolve(\`✅ \${name} সম্পন্ন হয়েছে (\${delay}ms)\`);
    else reject(new Error(\`❌ \${name} ফেইল করেছে!\`));
  }, delay);
});

async function runCombinatorsDemo() {
  console.log("--- ১. Promise.allSettled ডেমো ---");
  const jobs = [
    createJob("User Data", 300, true),
    createJob("Order History", 500, false), // ফেইল করবে
    createJob("Notifications", 200, true)
  ];

  const results = await Promise.allSettled(jobs);
  results.forEach(res => {
    if (res.status === "fulfilled") {
      console.log("Fulfilled:", res.value);
    } else {
      console.log("Rejected:", res.reason.message);
    }
  });

  console.log("\\n--- ২. Promise.race (দ্রুততম রেসপন্স) ---");
  const fastest = await Promise.race([
    createJob("Server Asia", 400, true),
    createJob("Server US", 150, true)
  ]);
  console.log("Fastest Response:", fastest);
}

runCombinatorsDemo();`,
    tips: "স্বাধীন একাধিক এপিআই কল করার সময় `await` পরপর না লিখে `Promise.all()` বা `Promise.allSettled()` দিয়ে প্যারালাল রান করুন; এতে সাইটের লোডিং টাইম কয়েকগুণ কমে যায়!"
  },
  {
    id: "part-16",
    category: "async-oop",
    chapter: "16",
    title: "Fetch API, AbortController ও রিয়েল-ওয়ার্ল্ড CRUD",
    badge: "Advanced",
    readTime: "10 min",
    summary: "HTTP methods (GET, POST, PUT, DELETE), Headers, JSON parsing, Canceling requests with AbortController",
    content: `
      <h3>১. AbortController (রিকোয়েস্ট বাতিল করা)</h3>
      <p>ব্যবহারকারী যখন এক পেজ থেকে অন্য পেজে চলে যায় বা সার্চ ইনপুটে দ্রুত নতুন শব্দ টাইপ করে, তখন পূর্বের অপ্রয়োজনীয় নেটওয়ার্ক রিকোয়েস্ট বাতিল করতে <code>AbortController</code> ব্যবহার করা হয়। এটি মেমোরি ও ডাটা সাশ্রয় করে।</p>

      <h3>২. Fetch এর এরর হ্যান্ডলিংয়ের ফাঁদ</h3>
      <p><code>fetch()</code> কিন্তু 404 বা 500 স্ট্যাটাস কোড আসলে রিজেক্ট হয় না! শুধুমাত্র নেটওয়ার্ক বিচ্ছিন্ন হলেই রিজেক্ট হয়। তাই সবসময় <code>if (!response.ok)</code> চেক করতে হয়।</p>
    `,
    defaultCode: `// ১. রিকোয়েস্ট ক্যান্সেলেশন (AbortController)
async function fetchWithCancellation() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort(); // ৫০০ms এর বেশি সময় নিলে রিকোয়েস্ট ক্যানসেল হয়ে যাবে
  }, 500);

  try {
    console.log("⏳ নেটওয়ার্ক কল শুরু হচ্ছে...");
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error(\`HTTP Status Error: \${res.status}\`);
    const data = await res.json();
    console.log("✅ সফল ডাটা:", data.title);
  } catch (err) {
    if (err.name === "AbortError") {
      console.warn("⏱️ রিকোয়েস্ট টাইমআউট হয়ে ক্যানসেল করা হয়েছে!");
    } else {
      console.error("অন্যান্য এরর:", err.message);
    }
  }
}

fetchWithCancellation();`,
    tips: "React বা আধুনিক অ্যাপ্লিকেশনে `useEffect` ক্লিনআপে সবসময় `controller.abort()` রিটার্ন করা বেস্ট প্র্যাকটিস।"
  },

  // ----------------------------------------------------------------------------
  // PHASE 5: WEB APIS, DOM & BROWSER MASTERY
  // ----------------------------------------------------------------------------
  {
    id: "part-17",
    category: "web-mastery",
    chapter: "17",
    title: "ইভেন্ট ডেলিগেশন, বাবলিং বনাম ক্যাপচারিং (DOM Events)",
    badge: "Advanced",
    readTime: "9 min",
    summary: "Event Bubbling, Event Capturing, Event Delegation, stopPropagation, preventDefault",
    content: `
      <h3>১. Event Bubbling ও Capturing</h3>
      <p>HTML পেজে কোনো এলিমেন্টে ক্লিক করলে ইভেন্টটি ৩টি ফেজে চলে:</p>
      <ol>
        <li><strong>Capturing Phase:</strong> উইন্ডো থেকে নিচের দিকে টার্গেট এলিমেন্টের দিকে নামে।</li>
        <li><strong>Target Phase:</strong> ক্লিক করা মূল এলিমেন্টে পৌঁছায়।</li>
        <li><strong>Bubbling Phase:</strong> টার্গেট থেকে আবার উপরের দিকে (DOM root) বুদবুদের মতো উঠতে থাকে।</li>
      </ol>

      <h3>২. Event Delegation (মেমোরি সেভার টেকনিক)</h3>
      <p>১০০টি লিস্ট আইটেমে আলাদা ১০০টি ইভেন্ট লিসেনার না লাগিয়ে তাদের কমন প্যারেন্ট এলিমেন্টে মাত্র ১টি লিসেনার লাগানোকে ইভেন্ট ডেলিগেশন বলে। <code>e.target</code> দিয়ে নির্দিষ্ট চাইল্ডকে চেনা যায়।</p>
    `,
    defaultCode: `// ব্রাউজার ইভেন্ট ডেলিগেশন সিমুলেশন
console.log("DOM Event Delegation Concept:");

// প্যারেন্ট এলিমেন্টে সিঙ্গেল লিসেনার
function setupEventDelegationDemo() {
  if (typeof document !== "undefined") {
    const parentContainer = document.querySelector("#app-container") || document.body;
    
    parentContainer.addEventListener("click", (e) => {
      // শুধুমাত্র যদি বাটনে ক্লিক পড়ে তবেই অ্যাকশন হবে
      if (e.target.matches("button.btn")) {
        console.log("🎯 বাটন ক্লিক হয়েছে ইভেন্ট ডেলিগেশনের মাধ্যমে:", e.target.textContent);
      }
    });
    console.log("Parent delegation listener attached successfully!");
  } else {
    console.log("Event delegation runs in browser DOM.");
  }
}

setupEventDelegationDemo();`,
    tips: "ডাইনামিকালি যোগ হওয়া নতুন এলিমেন্টগুলোতেও ইভেন্ট সক্রিয় রাখতে ইভেন্ট ডেলিগেশনই একমাত্র নিখুঁত সমাধান।"
  },
  {
    id: "part-18",
    category: "web-mastery",
    chapter: "18",
    title: "পারফরম্যান্স অপ্টিমাইজেশন: Debouncing বনাম Throttling",
    badge: "Advanced",
    readTime: "10 min",
    summary: "High-frequency events (scroll, resize, input), Debounce vs Throttle implementations",
    content: `
      <h3>Debounce বনাম Throttle এর পার্থক্য</h3>
      <ul>
        <li><strong>Debouncing:</strong> ইউজার কাজ থামানোর নির্দিষ্ট সময় (যেমন 300ms) পর মাত্র <em>একবার</em> ফাংশন রান করে। (সার্চ ইনপুট বা অটো-সেভের জন্য আদর্শ)।</li>
        <li><strong>Throttling:</strong> কাজ অনবরত চলতে থাকলেও নির্দিষ্ট ব্যবধানে (যেমন প্রতি 200ms এ) নিয়মিত <em>একবার করে</em> ফাংশন রান করে। (উইন্ডো স্ক্রল বা গেম লুপের জন্য আদর্শ)।</li>
      </ul>
    `,
    defaultCode: `// ১. পারফেক্ট Throttling ইমপ্লিমেন্টেশন
function throttle(func, interval = 300) {
  let isThrottled = false;
  return function (...args) {
    if (!isThrottled) {
      func.apply(this, args);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, interval);
    }
  };
}

const onWindowScroll = throttle(() => {
  console.log("📜 Window scroll event executed safely!");
}, 400);

// স্ক্রল সিমুলেশন
onWindowScroll();
onWindowScroll();
onWindowScroll(); // মাঝের কলগুলো ড্রপ হবে

// ২. পারফেক্ট Debouncing
function debounce(func, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const searchApi = debounce((query) => {
  console.log(\`🔍 সার্চ এপিআই কল হয়েছে: "\${query}"\`);
}, 300);

searchApi("J");
searchApi("Java");
searchApi("JavaScript"); // শুধুমাত্র এই শেষটি রান হবে`,
    tips: "সার্চের জন্য `debounce` এবং স্ক্রল বা উইন্ডো রিসাইজের জন্য `throttle` ব্যবহার করুন।"
  },
  {
    id: "part-19",
    category: "web-mastery",
    chapter: "19",
    title: "মডার্ন ব্রাউজার এপিআই: IntersectionObserver ও স্টোরেজ",
    badge: "Mastery",
    readTime: "10 min",
    summary: "Lazy loading images, Infinite scroll with IntersectionObserver, IndexedDB vs localStorage",
    content: `
      <h3>১. Intersection Observer API</h3>
      <p>কোনো এলিমেন্ট ব্রাউজার ভিউপোর্টে (স্ক্রিনে) দৃশ্যমান হচ্ছে কিনা তা স্ক্রল ইভেন্ট লিসেনার ছাড়াই অত্যন্ত পারফরম্যান্ট উপায়ে শনাক্ত করা যায়। এটি দিয়ে ইমেজ লেজি লোডিং এবং ইনফিনিট স্ক্রলিং তৈরি করা হয়।</p>

      <h3>২. IndexedDB বনাম LocalStorage</h3>
      <p><code>localStorage</code> সিঙ্ক্রোনাস এবং সর্বোচ্চ ৫ মেগাবাইট পর্যন্ত টেক্সট রাখতে পারে। অন্যদিকে <code>IndexedDB</code> অ্যাসিনক্রোনাস, শত শত মেগাবাইট জটিল অবজেক্ট ডাটা অফলাইনে সেভ রাখতে পারে (PWA ও অফলাইন অ্যাপের ভিত্তি)।</p>
    `,
    defaultCode: `// ১. IntersectionObserver এর কনসেপ্ট
console.log("IntersectionObserver Demo Code:");

if (typeof window !== "undefined" && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("🖼️ এলিমেন্ট স্ক্রিনে এসেছে! ইমেজ লোড করো:", entry.target);
        obs.unobserve(entry.target); // কাজ শেষে অবজার্ভার খুলে ফেলা
      }
    });
  }, { threshold: 0.1 });
  console.log("IntersectionObserver তৈরি সফল!");
} else {
  console.log("Observer is running in browser context.");
}`,
    tips: "স্ক্রল ইভেন্ট ব্যবহার না করে `IntersectionObserver` ব্যবহার করলে ব্রাউজারের সিপিইউ ইউসেজ শূন্যের কোঠায় নেমে আসে।"
  },
  {
    id: "part-20",
    category: "web-mastery",
    chapter: "20",
    title: "মেমোরি লিক প্রিভেনশন, সিকিউরিটি ও ফাইনাল ক্যাপস্টোন চ্যালেঞ্জ",
    badge: "Mastery",
    readTime: "12 min",
    summary: "Memory leaks (dangling timers, uncleaned listeners), XSS & eval prevention, Complete capstone project",
    content: `
      <h3>১. মেমোরি লিকের ৪টি প্রধান কারণ</h3>
      <ol>
        <li><strong>অপ্রয়োজনীয় গ্লোবাল ভেরিয়েবল:</strong> ভুল করে <code>window.myVar</code> তৈরি হওয়া।</li>
        <li><strong>বিচ্ছিন্ন টাইমার:</strong> <code>setInterval</code> চালু করে <code>clearInterval</code> না করা।</li>
        <li><strong>অমুছে ফেলা ইভেন্ট লিসেনার:</strong> DOM থেকে এলিমেন্ট ডিলিট করলেও লিসেনার মেমোরিতে রয়ে যাওয়া।</li>
        <li><strong>ক্লোজারের ফাঁদ:</strong> বড় অবজেক্টকে রেফারেন্স ধরে রাখা।</li>
      </ol>

      <h3>২. সিকিউরিটি বেস্ট প্র্যাকটিস</h3>
      <p>কখনোই <code>eval()</code> ব্যবহার করবেন না। ইউজারের ইনপুট সরাসরি <code>innerHTML</code> এ না দিয়ে <code>textContent</code> ব্যবহার করুন যেন XSS (Cross Site Scripting) অ্যাটাক না হতে পারে।</p>
    `,
    defaultCode: `// 🏆 ফাইনাল ক্যাপস্টোন: ই-কমার্স শপিং কার্ট ম্যানেজার
class ShoppingCartManager {
  #cartItems = new Map(); // ইউনিক আইডি ভিত্তিক প্রাইভেট কালেকশন

  addItem(product) {
    if (this.#cartItems.has(product.id)) {
      const existing = this.#cartItems.get(product.id);
      existing.quantity += 1;
    } else {
      this.#cartItems.set(product.id, { ...product, quantity: 1 });
    }
    console.log(\`🛒 \${product.name} কার্টে যোগ করা হয়েছে।\`);
  }

  calculateTotal(discountCode = "") {
    let subtotal = 0;
    for (const item of this.#cartItems.values()) {
      subtotal += item.price * item.quantity;
    }

    const discountRate = discountCode === "PROMO20" ? 0.20 : 0;
    const discountAmount = subtotal * discountRate;
    const finalAmount = subtotal - discountAmount;

    return {
      subtotal,
      discountAmount,
      finalAmount,
      itemCount: this.#cartItems.size
    };
  }
}

const myCart = new ShoppingCartManager();
myCart.addItem({ id: 101, name: "Mechanical Keyboard", price: 85 });
myCart.addItem({ id: 101, name: "Mechanical Keyboard", price: 85 }); // কোয়ান্টিটি ২ হবে
myCart.addItem({ id: 202, name: "Gaming Mouse", price: 45 });

console.log("কার্ট বিল রসিদ (PROMO20 কুপন সহ):", myCart.calculateTotal("PROMO20"));`,
    tips: "অভিনন্দন! আপনি জাভাস্ক্রিপ্ট বেসিক থেকে শুরু করে আধুনিক অ্যাডভান্সড আর্কিটেকচার পর্যন্ত সমস্ত কনসেপ্ট হ্যান্ডস-অন কভার করেছেন।"
  }
];
