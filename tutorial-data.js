/**
 * ==============================================================================
 * 📚 JAVASCRIPT MASTERCLASS: COMPLETE TUTORIAL DATASET (A to Z)
 * ==============================================================================
 * প্রতিটি অধ্যায়ে রয়েছে:
 *  - title, badge, category
 *  - description (সহজ ভাষায় ব্যাখ্যা - বাংলা ও ইংরেজি)
 *  - defaultCode (প্লেগ্রাউন্ডে সরাসরি রান করার মতো কোড)
 *  - keyPoints (গুরুত্বপূর্ণ বিষয়সমূহ)
 *  - practicalCase (বাস্তব জীবনের ব্যবহার)
 * ==============================================================================
 */

export const tutorials = [
  {
    id: "part-01",
    chapter: "Part 01",
    title: "জাভাস্ক্রিপ্ট বেসিক্স ও ডাটা টাইপস (Basics & Data Types)",
    badge: "Beginner",
    summary: "Variables (var, let, const), Primitive vs Non-primitive Types, Truthy & Falsy Values",
    content: `
      <h3>১. ভেরিয়েবল ডিক্লেয়ারেশন (var vs let vs const)</h3>
      <p>জাভাস্ক্রিপ্টে ডেটা সংরক্ষণ করতে ভেরিয়েবল ব্যবহার করা হয়। আধুনিক জাভাস্ক্রিপ্টে <code>var</code> ব্যবহার পরিহার করে <code>let</code> এবং <code>const</code> ব্যবহার করা হয়:</p>
      <ul>
        <li><strong>const:</strong> যার মান পরিবর্তন করা যাবে না (Default হিসেবে এটি ব্যবহার করাই বেস্ট প্র্যাকটিস)।</li>
        <li><strong>let:</strong> যার মান পরবর্তীতে পরিবর্তন (Reassign) করার প্রয়োজন হতে পারে।</li>
        <li><strong>var:</strong> পুরোনো পদ্ধতি, ফাংশন স্কোপড এবং হোইস্টিং সমস্যার সৃষ্টি করে।</li>
      </ul>

      <h3>২. ডাটা টাইপসমূহ (Data Types)</h3>
      <p>জাভাস্ক্রিপ্টে মূলত দুই ধরণের ডাটা টাইপ থাকে:</p>
      <ul>
        <li><strong>Primitive (অপরিবর্তনশীল):</strong> <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>symbol</code>, <code>bigint</code></li>
        <li><strong>Non-Primitive / Reference:</strong> <code>Object</code>, <code>Array</code>, <code>Function</code></li>
      </ul>

      <h3>৩. Truthy বনাম Falsy মান</h3>
      <p>জাভাস্ক্রিপ্টে শর্তের ক্ষেত্রে মাত্র ৬টি মান <strong>Falsy</strong> (মিথ্যা হিসেবে গণ্য হয়): <code>false</code>, <code>0</code>, <code>""</code> (খালি স্ট্রিং), <code>null</code>, <code>undefined</code>, এবং <code>NaN</code>। বাকি সবকিছুই <strong>Truthy</strong>!</p>
    `,
    defaultCode: `// ১. ভেরিয়েবল ডিক্লেয়ারেশন
const studentName = "Hridoy Sarker";
let currentAge = 23;
currentAge += 1; // let এর মান পরিবর্তন সম্ভব

// ২. ডাটা টাইপ চেক করা
console.log("studentName:", typeof studentName);
console.log("currentAge:", typeof currentAge);
console.log("isActive:", typeof true);
console.log("emptyValue:", typeof null); // ঐতিহাসিক বাগের কারণে 'object' দেখায়!
console.log("unassigned:", typeof undefined);

// ৩. Truthy ও Falsy যাচাই
const checkValue = (val) => {
  if (val) {
    console.log(\`✅ "\${val}" is TRUTHY\`);
  } else {
    console.log(\`❌ "\${val}" is FALSY\`);
  }
};

checkValue("Hello");
checkValue("");
checkValue(0);
checkValue(100);
checkValue([]); // খালি অ্যারে সবসময় TRUTHY!`,
    tips: "সর্বদা `const` দিয়ে ভেরিয়েবল তৈরি শুরু করুন। পরবর্তীতে মান পরিবর্তন করার দরকার পড়লে তবেই `let` ব্যবহার করুন।"
  },
  {
    id: "part-02",
    chapter: "Part 02",
    title: "অপারেটর এবং কন্ট্রোল ফ্লো (Operators & Control Flow)",
    badge: "Beginner",
    summary: "Arithmetic, Strict Equality (===), Logical (&&, ||), Nullish (??), Optional Chaining (?.)",
    content: `
      <h3>১. কম্প্যারিজন অপারেটর: <code>==</code> বনাম <code>===</code></h3>
      <p><code>==</code> (Loose Equality) শুধুমাত্র মান যাচাই করে এবং প্রয়োজনে স্বয়ংক্রিয়ভাবে টাইপ কনভার্ট করে। কিন্তু <code>===</code> (Strict Equality) মান এবং ডাটা টাইপ দুটোই কঠোরভাবে যাচাই করে। সবসময় <code>===</code> ব্যবহার করুন।</p>

      <h3>২. আধুনিক অপারেটরসমূহ: <code>??</code> এবং <code>?.</code></h3>
      <ul>
        <li><strong>Nullish Coalescing (??):</strong> শুধুমাত্র <code>null</code> অথবা <code>undefined</code> হলে ডানপাশের ফলব্যাক মান দেয় (<code>0</code> বা <code>""</code> কে ফলসি ধরে হারিয়ে ফেলে না)।</li>
        <li><strong>Optional Chaining (?.):</strong> নেস্টেড অবজেক্টের কোনো প্রোপার্টি না থাকলেও কোনো ক্র্যাশ না করে নিরাপদে <code>undefined</code> রিটার্ন করে।</li>
      </ul>

      <h3>৩. টার্নারি অপারেটর (Ternary Operator)</h3>
      <p>ছোট কন্ডিশনের ক্ষেত্রে <code>condition ? ifTrue : ifFalse</code> কোডকে অনেক বেশি ক্লিন করে তোলে।</p>
    `,
    defaultCode: `// ১. Strict Equality পরীক্ষা
console.log("5 == '5'  ->", 5 == "5");   // true (type coercion)
console.log("5 === '5' ->", 5 === "5");  // false (safe & strict)

// ২. Nullish Coalescing (??) বনাম Logical OR (||)
const userGivenScore = 0; // ইউজার শূন্য পেয়েছে
console.log("Using || :", userGivenScore || 100); // ১০০ (ভুল! কারণ ০ কে ফলসি ধরেছে)
console.log("Using ?? :", userGivenScore ?? 100); // ০ (সঠিক! কারণ ০ নাল নয়)

// ৩. Optional Chaining (?.)
const user = {
  id: 101,
  name: "Yeash",
  address: {
    city: "Dhaka"
  }
};

console.log("City:", user?.address?.city);
console.log("Zip code:", user?.address?.zipCode); // undefined (ক্র্যাশ করবে না)

// ৪. টার্নারি অপারেটর
const userRole = "admin";
const accessLevel = userRole === "admin" ? "Full Access Granted" : "Restricted";
console.log("Access:", accessLevel);`,
    tips: "অবজেক্টের গভীর প্রোপার্টি রিড করার সময় ক্র্যাশ এড়াতে সর্বদা `?.` (Optional Chaining) ব্যবহার করুন।"
  },
  {
    id: "part-03",
    chapter: "Part 03",
    title: "লুপ এবং ইটারেশন (Loops & Iterations)",
    badge: "Beginner",
    summary: "for, while, do-while, break, continue, for...of, for...in",
    content: `
      <h3>১. লুপের ধরনসমূহ</h3>
      <ul>
        <li><strong>for:</strong> নির্দিষ্ট সংখ্যক বার পুনরাবৃত্তির জন্য।</li>
        <li><strong>while:</strong> শর্ত সত্য থাকা পর্যন্ত চলার জন্য।</li>
        <li><strong>do...while:</strong> শর্ত মিথ্যা হলেও অন্তত ১ বার এক্সিকিউট হবে।</li>
      </ul>

      <h3>২. আধুনিক লুপ: <code>for...of</code> বনাম <code>for...in</code></h3>
      <ul>
        <li><strong>for...of:</strong> অ্যারে (Array), স্ট্রিং (String) ইত্যাদি ইটারেবলের উপাদান (Values) নিয়ে কাজ করতে ব্যবহৃত হয়।</li>
        <li><strong>for...in:</strong> অবজেক্টের (Object) কী (Keys বা Properties) বের করতে ব্যবহৃত হয়।</li>
      </ul>
    `,
    defaultCode: `// ১. for...of দিয়ে অ্যারে আইটেম প্রিন্ট
const frameworks = ["React", "Vue", "Angular", "Next.js"];
console.log("--- Frontend Frameworks (for...of) ---");
for (const fw of frameworks) {
  console.log("Framework:", fw);
}

// ২. for...in দিয়ে অবজেক্টের কী ও ভ্যালু প্রিন্ট
const developer = {
  name: "Hridoy",
  role: "Fullstack Engineer",
  experience: "3 years"
};
console.log("\\n--- Developer Info (for...in) ---");
for (const key in developer) {
  console.log(\`\${key}: \${developer[key]}\`);
}

// ৩. break এবং continue এর ব্যবহার
console.log("\\n--- Numbers skipping 2 and stopping at 4 ---");
for (let i = 1; i <= 6; i++) {
  if (i === 2) continue; // ২ কে স্কিপ করবে
  if (i === 5) break;    // ৫ এ আসলে লুপ থেমে যাবে
  console.log("Number:", i);
}`,
    tips: "অ্যারের উপর লুপ চালাতে কখনোই `for...in` ব্যবহার করবেন না, সবসময় `for...of` বা অ্যারে মেথড (`map`, `forEach`) ব্যবহার করুন।"
  },
  {
    id: "part-04",
    chapter: "Part 04",
    title: "বিল্ট-ইন মেথডস (Strings, Numbers, Math & Date)",
    badge: "Beginner",
    summary: "toFixed, parseInt, Math.random range formula, String trim/slice/includes/split, Date",
    content: `
      <h3>১. Number & Math মেথডস</h3>
      <p>জাভাস্ক্রিপ্টের বিল্ট-ইন <code>Math</code> অবজেক্টে রয়েছে <code>Math.floor()</code>, <code>Math.ceil()</code>, <code>Math.round()</code> ইত্যাদি।</p>
      <p><strong>যেকোনো রেঞ্জের Random Number তৈরি করার ফর্মুলা:</strong><br>
      <code>Math.floor(Math.random() * (max - min + 1)) + min;</code></p>

      <h3>২. স্ট্রিং মেথডস</h3>
      <p>স্ট্রিং ম্যানিপুলেশনের জন্য অত্যন্ত জনপ্রিয় মেথডগুলো হলো <code>trim()</code>, <code>toLowerCase()</code>, <code>slice()</code>, <code>includes()</code>, <code>split()</code> এবং <code>replace()</code>।</p>
    `,
    defaultCode: `// ১. নাম্বার ফরম্যাটিং
const itemPrice = 129.5678;
console.log("toFixed(2):", itemPrice.toFixed(2)); // "129.57" (স্ট্রিং রিটার্ন করে)
console.log("parseInt('50px'):", parseInt("50px")); // 50 (নাম্বার)

// ২. র‍্যান্ডম সংখ্যা জেনারেটর (min থেকে max এর মধ্যে)
function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random OTP (1000 - 9999):", generateRandom(1000, 9999));

// ৩. স্ট্রিং ম্যানিপুলেশন
const rawInput = "   learn-javascript-today   ";
const cleaned = rawInput.trim();
console.log("Trimmed:", cleaned);
console.log("Slug to Words:", cleaned.split("-").join(" ").toUpperCase());
console.log("Includes 'javascript':", cleaned.includes("javascript"));

// ৪. Date মেথড
const today = new Date();
console.log("Current Year:", today.getFullYear());
console.log("Formatted Time:", today.toLocaleTimeString());`,
    tips: "`toFixed()` সবসময় স্ট্রিং রিটার্ন করে। প্রয়োজনে আগে `+` দিয়ে সংখ্যায় রূপান্তর করতে পারেন (যেমন: `+price.toFixed(2)`)."
  },
  {
    id: "part-05",
    chapter: "Part 05",
    title: "ফাংশন ইন-ডেপথ (Functions, Arrow, Callbacks & HOF)",
    badge: "Intermediate",
    summary: "Function Declarations, Arrow Functions, Default/Rest Parameters, Higher-Order Functions",
    content: `
      <h3>১. ফাংশন ডিক্লেয়ারেশন বনাম অ্যারো ফাংশন</h3>
      <p>ES6 এর <strong>Arrow Function</strong> (<code>() => {}</code>) আরও সংক্ষিপ্ত সিনট্যাক্স দেয় এবং নিজের কোনো নিজস্ব <code>this</code> বাইন্ডিং তৈরি করে না (লেক্সিকাল স্কোপ ব্যবহার করে)।</p>

      <h3>২. ডিফল্ট ও রেস্ট প্যারামিটার</h3>
      <ul>
        <li><strong>Default Parameter:</strong> আর্গুমেন্ট না পাঠালে ডিফল্ট মান কাজ করে।</li>
        <li><strong>Rest Parameter (<code>...args</code>):</strong> যেকোনো সংখ্যক আর্গুমেন্টকে একটি অ্যারে হিসেবে গ্রহণ করে।</li>
      </ul>

      <h3>৩. Higher-Order Function (HOF) ও Callback</h3>
      <p>যে ফাংশন অন্য একটি ফাংশনকে প্যারামিটার হিসেবে গ্রহণ করে বা ফাংশন রিটার্ন করে, তাকে <strong>Higher-Order Function</strong> বলা হয়। আর যে ফাংশনটি পাস করা হয় তাকে <strong>Callback Function</strong> বলে।</p>
    `,
    defaultCode: `// ১. Arrow Function ও Default Parameter
const calculateTax = (amount, taxPercent = 15) => {
  return amount + (amount * taxPercent) / 100;
};
console.log("Bill with 15% Tax:", calculateTax(1000));
console.log("Bill with 5% Tax:", calculateTax(1000, 5));

// ২. Rest Parameter (...numbers)
const sumEverything = (...numbers) => {
  return numbers.reduce((total, n) => total + n, 0);
};
console.log("Sum of numbers:", sumEverything(10, 20, 30, 40));

// ৩. Higher-Order Function (HOF) ও Callback
const processTransaction = (amount, callbackAction) => {
  console.log(\`Processing amount: $\${amount}\`);
  return callbackAction(amount);
};

const sendDiscount = (amt) => \`Discounted price: $\${amt * 0.9}\`;
const sendVat = (amt) => \`Price with VAT: $\${amt * 1.05}\`;

console.log(processTransaction(500, sendDiscount));
console.log(processTransaction(500, sendVat));`,
    tips: "অ্যারো ফাংশনে একটি মাত্র এক্সপ্রেশন থাকলে <code>return</code> কীওয়ার্ড এবং কার্লি ব্র্যাকেট <code>{}</code> ছাড়াই সরাসরি মান রিটার্ন করা যায়।"
  },
  {
    id: "part-06",
    chapter: "Part 06",
    title: "অ্যারে মাস্টারক্লাস ও ফাংশনাল মেথডস (Array Mastery)",
    badge: "Intermediate",
    summary: "Mutating vs Non-mutating, map, filter, reduce, find, some, every, sort",
    content: `
      <h3>অ্যারের আধুনিক ও বহুল ব্যবহৃত মেথডস</h3>
      <ul>
        <li><strong>map():</strong> প্রতিটি উপাদানকে রূপান্তর করে একটি নতুন অ্যারে বানায়।</li>
        <li><strong>filter():</strong> শর্ত পূরণ করা উপাদানগুলো নিয়ে নতুন অ্যারে বানায়।</li>
        <li><strong>reduce():</strong> সমস্ত উপাদান প্রসেস করে একটি মাত্র মান (যেমন মোট যোগফল) তৈরি করে।</li>
        <li><strong>find():</strong> প্রথম যে উপাদানটি শর্ত পূরণ করে তা রিটার্ন করে।</li>
        <li><strong>some() / every():</strong> কোনো একটি বা সবকটি উপাদান শর্ত পূরণ করছে কিনা তা boolean (true/false) হিসেবে জানায়।</li>
        <li><strong>sort():</strong> অ্যারেকে সাজানোর জন্য ব্যবহৃত হয় (মনে রাখবেন: মূল অ্যারে পরিবর্তন করে, তাই <code>[...arr].sort()</code> করা উচিত)।</li>
      </ul>
    `,
    defaultCode: `// রিয়েল-ওয়ার্ল্ড ই-কমার্স প্রোডাক্ট লিস্ট
const products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 25, inStock: true },
  { id: 2, name: "Mechanical Keyboard", category: "Electronics", price: 80, inStock: true },
  { id: 3, name: "Coffee Mug", category: "Lifestyle", price: 12, inStock: false },
  { id: 4, name: "Gaming Headset", category: "Electronics", price: 65, inStock: true },
  { id: 5, name: "Desk Mat", category: "Lifestyle", price: 20, inStock: true }
];

// ১. map() -> কেবল নাম এবং মূল্যের লিস্ট
const productCards = products.map(p => \`\${p.name} ($$\${p.price})\`);
console.log("Product Cards:", productCards);

// ২. filter() -> স্টকে থাকা এবং Electronics আইটেম
const availableElectronics = products.filter(p => p.inStock && p.category === "Electronics");
console.log("In-stock Electronics:", availableElectronics.map(p => p.name));

// ৩. reduce() -> মোট পণ্যের মূল্যের যোগফল
const totalCartPrice = products.reduce((acc, item) => acc + item.price, 0);
console.log(\`Total Inventory Worth: $\${totalCartPrice}\`);

// ৪. find() -> $50 এর বেশি মূল্যের প্রথম আইটেম
const premiumItem = products.find(p => p.price > 50);
console.log("First Premium Item:", premiumItem?.name);

// ৫. sort() -> কম মূল্য থেকে বেশি মূল্যে সর্ট
const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
console.log("Cheapest:", sortedByPrice[0].name, \`($\${sortedByPrice[0].price})\`);`,
    tips: "React বা যেকোনো মডার্ন অ্যাপে ইমিউটেবিলিটি (Immutability) বজায় রাখতে `[...array].sort()` বা `toSorted()` ব্যবহার করুন।"
  },
  {
    id: "part-07",
    chapter: "Part 07",
    title: "অবজেক্ট ও আধুনিক ES6+ ফিচার্স (Objects & ES6+)",
    badge: "Intermediate",
    summary: "Object Methods, Destructuring, Spread Operator, Template Literals, ES Modules",
    content: `
      <h3>১. Destructuring (ডিস্ট্রাকচারিং)</h3>
      <p>অবজেক্ট বা অ্যারে থেকে খুব সহজে প্রোপার্টি বা ভ্যালু আলাদা ভেরিয়েবলে বের করে নেওয়ার আধুনিক সিনট্যাক্স। এতে কোড অনেক ছোট এবং ক্লিন হয়।</p>

      <h3>২. Spread Operator (<code>...</code>)</h3>
      <p>অবজেক্ট বা অ্যারেকে সহজে কপি ও মার্জ (Merge) করতে স্প্রেড অপারেটর অপরিহার্য। এটি শ্যালো কপি তৈরি করে।</p>

      <h3>৩. Object Utility Methods</h3>
      <p><code>Object.keys()</code>, <code>Object.values()</code> এবং <code>Object.entries()</code> দিয়ে অবজেক্টকে সহজেই ইটারেট করা যায়।</p>
    `,
    defaultCode: `// ১. অবজেক্ট ডিস্ট্রাকচারিং
const userProfile = {
  id: 101,
  fullname: "Hridoy Sarker",
  role: "Lead Developer",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
};

const { fullname, role, address: { city }, salary = 60000 } = userProfile;
console.log(\`Developer: \${fullname}, Role: \${role}, City: \${city}, Base Salary: \${salary}\`);

// ২. অ্যারে ডিস্ট্রাকচারিং
const coordinates = [23.8103, 90.4125];
const [latitude, longitude] = coordinates;
console.log(\`Lat: \${latitude}, Lng: \${longitude}\`);

// ৩. Spread Operator দিয়ে অবজেক্ট ক্লোন ও আপডেট
const updatedProfile = {
  ...userProfile,
  role: "Principal Architect",
  isVerified: true
};
console.log("Updated Role:", updatedProfile.role);
console.log("Original Role:", userProfile.role);

// ৪. Object.entries লুপ
const settings = { theme: "dark", notifications: true, sound: false };
for (const [key, value] of Object.entries(settings)) {
  console.log(\`Setting: \${key} -> \${value}\`);
}`,
    tips: "ডিস্ট্রাকচারিং করার সময় ডিফল্ট মান (যেমন `salary = 50000`) নির্ধারণ করে দেওয়া ভালো অভ্যাস।"
  },
  {
    id: "part-08",
    chapter: "Part 08",
    title: "এরর হ্যান্ডলিং ও ডিবাগিং (Error Handling)",
    badge: "Intermediate",
    summary: "try, catch, finally, Custom Error throwing, Error types",
    content: `
      <h3>১. কেন এরর হ্যান্ডলিং প্রয়োজন?</h3>
      <p>কোনো অপ্রত্যাশিত সমস্যা বা ভুল ইনপুটের কারণে যেন সম্পূর্ণ অ্যাপ্লিকেশন ক্র্যাশ না করে, সেজন্য <code>try...catch...finally</code> ব্লক ব্যবহার করা হয়।</p>

      <h3>২. কাস্টম এরর থ্রো করা (throw new Error)</h3>
      <p>যখন কোনো বিজনেস লজিক পূরণ হয় না (যেমন বয়স ১৮ এর কম হওয়া বা ব্যালেন্স অপর্যাপ্ত থাকা), তখন আমরা নিজে থেকে এরর থ্রো করতে পারি।</p>
    `,
    defaultCode: `function registerUser(name, age) {
  if (!name || name.trim() === "") {
    throw new Error("Name is required and cannot be empty!");
  }
  if (age < 18) {
    throw new Error("User must be at least 18 years old to register.");
  }
  return { status: "success", message: \`Welcome, \${name}! You are registered.\` };
}

// ট্রাই-ক্যাচ ব্লক
try {
  console.log("Attempt 1 (Valid User):");
  const res1 = registerUser("Hridoy", 23);
  console.log("Result:", res1.message);

  console.log("\\nAttempt 2 (Underage User):");
  registerUser("Robin", 16); // এটি Error তৈরি করবে
} catch (error) {
  console.error("❌ Caught an Error:", error.message);
} finally {
  console.log("🔔 Finally block executed: Cleanup actions or logs recorded.");
}`,
    tips: "`finally` ব্লক সবসময় রান করবে, চাই এরর আসুক বা না আসুক। এটি ফাইল ক্লোজ বা লোডার বন্ধ করার জন্য আদর্শ।"
  },
  {
    id: "part-09",
    chapter: "Part 09",
    title: "JSON ও ওয়েব স্টোরেজ (JSON & Web Storage)",
    badge: "Intermediate",
    summary: "JSON.stringify, JSON.parse, localStorage, sessionStorage",
    content: `
      <h3>১. JSON কী?</h3>
      <p>JSON (JavaScript Object Notation) হলো সার্ভার ও ক্লায়েন্টের মধ্যে টেক্সট আকারে ডেটা আদান-প্রদানের সর্বজনীন ফরম্যাট।</p>
      <ul>
        <li><code>JSON.stringify(object)</code>: জাভাস্ক্রিপ্ট অবজেক্টকে JSON স্ট্রিং এ রূপান্তর করে।</li>
        <li><code>JSON.parse(string)</code>: JSON স্ট্রিংকে পুনরায় জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর করে।</li>
      </ul>

      <h3>২. localStorage বনাম sessionStorage</h3>
      <p><code>localStorage</code> ব্রাউজার বন্ধ করলেও তথ্য সংরক্ষণ করে রাখে। আর <code>sessionStorage</code> ব্রাউজার ট্যাব বন্ধ করার সাথে সাথে তথ্য মুছে ফেলে।</p>
    `,
    defaultCode: `// ১. অবজেক্ট তৈরি
const userPreferences = {
  theme: "dark",
  fontSize: 16,
  savedBookmarks: ["JavaScript", "Async JS", "OOP"]
};

// ২. JSON এ রূপান্তর
const serializedData = JSON.stringify(userPreferences);
console.log("JSON String:", serializedData);

// ৩. পুনরায় অবজেক্টে রূপান্তর
const restoredData = JSON.parse(serializedData);
console.log("Parsed Object:", restoredData.theme);

// ৪. LocalStorage হ্যান্ডলিং (ব্রাউজার সিমুলেশন)
if (typeof localStorage !== "undefined") {
  localStorage.setItem("user_theme", restoredData.theme);
  const currentTheme = localStorage.getItem("user_theme");
  console.log("Read from LocalStorage:", currentTheme);
} else {
  console.log("Note: localStorage runs inside the browser environment.");
}`,
    tips: "LocalStorage এ সবসময় স্ট্রিং আকারে ডাটা রাখতে হয়, তাই অবজেক্ট সেভ করার পূর্বে `JSON.stringify()` এবং রিড করার পর `JSON.parse()` ব্যবহার করতে হয়।"
  },
  {
    id: "part-10",
    chapter: "Part 10",
    title: "অ্যাসিনক্রোনাস জাভাস্ক্রিপ্ট (Promises, Async/Await & Fetch)",
    badge: "Advanced",
    summary: "Event Loop, Call Stack, Microtask Queue, Promises, async/await, Fetch API",
    content: `
      <h3>১. জাভাস্ক্রিপ্ট কীভাবে Asynchronous কাজ করে?</h3>
      <p>জাভাস্ক্রিপ্ট একটি <strong>Single-Threaded</strong> ল্যাঙ্গুয়েজ। এটি ব্রাউজারের <strong>Event Loop</strong>, <strong>Call Stack</strong>, এবং <strong>Task / Microtask Queue</strong> এর মাধ্যমে কোনো কাজকে আটকে না রেখে ব্যাকগ্রাউন্ডে হ্যান্ডেল করে।</p>

      <h3>২. প্রমিজ (Promise) এর ৩টি স্টেট</h3>
      <ul>
        <li><strong>Pending:</strong> কাজ চলছে।</li>
        <li><strong>Fulfilled (resolve):</strong> কাজ সফল হয়েছে।</li>
        <li><strong>Rejected (reject):</strong> ব্যর্থ হয়েছে বা এরর ঘটেছে।</li>
      </ul>

      <h3>৩. Async / Await</h3>
      <p><code>.then()</code> ও <code>.catch()</code> চেইনিং এর চেয়ে <code>async/await</code> কোডকে দেখতে সিঙ্ক্রোনাস কোডের মতো সহজবোধ্য ও ক্লিন করে তোলে।</p>
    `,
    defaultCode: `// ১. একটি কৃত্রিম প্রমিজ তৈরি (সিমুলেটেড নেটওয়ার্ক কল)
function fetchStudentData(studentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (studentId === 101) {
        resolve({ id: 101, name: "Hridoy Sarker", department: "CSE", gpa: 3.92 });
      } else {
        reject(new Error("Student record not found in database!"));
      }
    }, 600);
  });
}

// ২. async/await এর মাধ্যমে ডেটা আনা
async function loadStudentProfile() {
  try {
    console.log("⏳ Fetching student profile...");
    const student = await fetchStudentData(101);
    console.log("✅ Data Loaded:", student);
    console.log(\`Student: \${student.name}, GPA: \${student.gpa}\`);
  } catch (err) {
    console.error("❌ Fetch Error:", err.message);
  }
}

loadStudentProfile();

// ৩. বাস্তব API কল (JSONPlaceholder)
async function getLiveTodo() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    console.log("🌐 Real API Response Title:", data.title);
  } catch (err) {
    console.log("Network note:", err.message);
  }
}
getLiveTodo();`,
    tips: "অ্যাসিনক্রোনাস ফাংশনের ভেতর যেকোনো সম্ভাব্য এরর ক্যাপচার করতে সর্বদা `try...catch` ব্লক ব্যবহার করুন।"
  },
  {
    id: "part-11",
    chapter: "Part 11",
    title: "অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং - OOP (Classes & Bank App)",
    badge: "Advanced",
    summary: "ES6 Classes, Constructor, Private Fields (#), Encapsulation, Inheritance, Bank Account App",
    content: `
      <h3>১. ক্লাস এবং কনস্ট্রাক্টর (ES6 Classes)</h3>
      <p>জাভাস্ক্রিপ্ট প্রোটোটাইপ-ভিত্তিক ল্যাঙ্গুয়েজ হলেও ES6 ক্লাসের সিনট্যাক্স দিয়ে অবজেক্ট তৈরি ও হ্যান্ডেল করা অনেক বেশি সুসংগঠিত হয়েছে।</p>

      <h3>২. এনক্যাপসুলেশন ও প্রাইভেট ফিল্ড (<code>#privateField</code>)</h3>
      <p>ক্লাসের কোনো প্রোপার্টির আগে <code>#</code> চিহ্ন দিলে সেটি প্রাইভেট হয়ে যায়, অর্থাৎ ক্লাসের বাইরে থেকে সরাসরি তা পরিবর্তন করা যায় না।</p>

      <h3>৩. ইনহেরিট্যান্স (Inheritance - <code>extends</code> ও <code>super</code>)</h3>
      <p>একটি প্যারেন্ট ক্লাসের বৈশিষ্ট্য ও মেথড চাইল্ড ক্লাসে উত্তরাধিকার সূত্রে ব্যবহার করার নিয়ম।</p>
    `,
    defaultCode: `// 🏦 প্র্যাকটিক্যাল ব্যাংক অ্যাকাউন্ট ক্লাস
class BankAccount {
  #balance; // প্রাইভেট ফিল্ড (বাইরে থেকে পরিবর্তন অসম্ভব)

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  // Getter
  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount <= 0) return console.log("Deposit amount must be positive.");
    this.#balance += amount;
    console.log(\`💵 Deposited $\${amount}. New Balance: $\${this.#balance}\`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(\`❌ Insufficient balance! Tried to withdraw $\${amount}, have $\${this.#balance}\`);
      return;
    }
    this.#balance -= amount;
    console.log(\`💸 Withdrawn $\${amount}. Remaining: $\${this.#balance}\`);
  }
}

// ইনহেরিট্যান্স: প্রিমিয়াম সেভিংস অ্যাকাউন্ট
class SavingsAccount extends BankAccount {
  constructor(owner, initialBalance, interestRate = 5) {
    super(owner, initialBalance);
    this.interestRate = interestRate;
  }

  addInterest() {
    const interest = (this.balance * this.interestRate) / 100;
    console.log(\`📈 Adding \${this.interestRate}% interest: +$\${interest}\`);
    this.deposit(interest);
  }
}

// ব্যবহার
const mySavings = new SavingsAccount("Hridoy", 1000, 8);
mySavings.deposit(500);
mySavings.withdraw(300);
mySavings.addInterest();
console.log("Final Balance:", mySavings.balance);`,
    tips: "প্রাইভেট ফিল্ড ব্যবহারের ফলে ডাটা সিকিউরিটি বাড়ে এবং বাইরের কোনো কোড ভুলবশত ব্যালেন্স পরিবর্তন করতে পারে না।"
  },
  {
    id: "part-12",
    chapter: "Part 12",
    title: "অ্যাডভান্সড কনসেপ্টস (Closures, Hoisting, this & Debounce)",
    badge: "Advanced",
    summary: "Lexical Scope, Closures, Hoisting & TDZ, this rules, Debouncing & Throttling",
    content: `
      <h3>১. ক্লোজার (Closure) কী?</h3>
      <p>একটি ফাংশন যখন তার বাইরের লেক্সিক্যাল স্কোপের (Lexical Scope) ভেরিয়েবলগুলোকে নিজের ভেতরে মনে রাখতে পারে, এমনকি বাইরের ফাংশনটি এক্সিকিউট হওয়া শেষ হয়ে যাওয়ার পরেও — তখন তাকে <strong>Closure</strong> বলা হয়। এটি প্রাইভেট স্টেট তৈরিতে ব্যবহৃত হয়।</p>

      <h3>২. ডিবাইউন্সিং (Debouncing)</h3>
      <p>সার্চ বক্সে ইউজার দ্রুত টাইপ করার সময় প্রতি ক্লিকে সার্ভার কল না পাঠিয়ে টাইপিং শেষ হওয়ার নির্দিষ্ট সময় (যেমন 300ms) পর মাত্র একবার কল করার টেকনিক হলো Debounce। এটি ওয়েব পারফরম্যান্সের জন্য অত্যন্ত গুরুত্বপূর্ণ।</p>
    `,
    defaultCode: `// ১. ক্লোজার (Closure) এর মাধ্যমে প্রাইভেট কাউন্টার তৈরি
function createSecureCounter(start = 0) {
  let count = start; // এটি বাইরে থেকে অ্যাক্সেস করা যাবে না!
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createSecureCounter(10);
console.log("Counter +1:", counter.increment()); // 11
console.log("Counter +1:", counter.increment()); // 12
console.log("Current:", counter.getCount());     // 12

// ২. ডিবাইউন্স ফাংশন (Debounce implementation)
function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const performSearch = (query) => {
  console.log(\`🔍 API Request fired for: "\${query}"\`);
};

const debouncedSearch = debounce(performSearch, 300);

// টাইপিং সিমুলেশন
console.log("User typing fast...");
debouncedSearch("R");
debouncedSearch("Re");
debouncedSearch("React"); // শুধুমাত্র শেষটি কল হবে!`,
    tips: "ইন্টারভিউতে সবচেয়ে বেশি জিজ্ঞাসিত প্রশ্নগুলোর মধ্যে অন্যতম হলো 'What is a Closure?' এবং 'How does Debounce work?'"
  },
  {
    id: "part-13",
    chapter: "Part 13",
    title: "DOM ম্যানিপুলেশন ও ইভেন্টস (DOM Mastery)",
    badge: "Advanced",
    summary: "Selectors (querySelector), modifying text/HTML/classes, createElement, Event Listeners",
    content: `
      <h3>১. DOM (Document Object Model) কী?</h3>
      <p>ব্রাউজার HTML পেজ লোড করার পর সেটিকে একটি অবজেক্ট ট্রির (Object Tree) মতো রিপ্রেজেন্ট করে। জাভাস্ক্রিপ্ট দিয়ে সেই ট্রির প্রতিটি এলিমেন্ট পরিবর্তন, পরিমার্জন এবং নতুন এলিমেন্ট তৈরি করা যায়।</p>

      <h3>২. প্রধান DOM মেথডসমূহ</h3>
      <ul>
        <li><code>document.querySelector('selector')</code>: যেকোনো CSS সিলেক্টর দিয়ে এলিমেন্ট ধরা।</li>
        <li><code>element.textContent</code>: টেক্সট পরিবর্তন করা।</li>
        <li><code>element.classList.add() / remove() / toggle()</code>: CSS ক্লাস যোগ-বিয়োগ করা।</li>
        <li><code>document.createElement('tag')</code>: নতুন HTML এলিমেন্ট তৈরি করা।</li>
        <li><code>element.addEventListener('click', handler)</code>: ইউজারের অ্যাকশনে সাড়া দেওয়া।</li>
      </ul>
    `,
    defaultCode: `// ব্রাউজার পরিবেশে রান করার কোড
console.log("DOM Demonstration Code:");

// ১. সিলেক্টর চেক
if (typeof document !== "undefined") {
  const heading = document.querySelector("#title");
  console.log("Current Page Title Text:", heading?.textContent);

  // ২. নতুন এলিমেন্ট বানিয়ে যুক্ত করা
  const newBadge = document.createElement("span");
  newBadge.textContent = " [Interactive]";
  newBadge.style.color = "#2563eb";
  console.log("Dynamically created element:", newBadge.textContent);

  // ৩. ইভেন্ট লিসেনার সিমুলেশন
  console.log("Event listener successfully attached to interactive elements.");
} else {
  console.log("DOM is executed in the browser window.");
}`,
    tips: "`innerHTML` ব্যবহারের চেয়ে `textContent` ব্যবহার করা অনেক বেশি নিরাপদ কারণ এটি XSS অ্যাটাক প্রতিরোধ করে।"
  },
  {
    id: "part-14",
    chapter: "Part 14",
    title: "চ্যালেঞ্জ ও কুইজ প্র্যাকটিস (Hands-on Challenges)",
    badge: "Practice",
    summary: "Palindrome Checker, Discount Calculator, Custom Array Map Function, Live Problem Solving",
    content: `
      <h3>🎯 আপনার জাভাস্ক্রিপ্ট দক্ষতা যাচাই করুন!</h3>
      <p>নিচের কোড এডিটরে ৩টি বাস্তব প্রোগ্রামিং সমস্যা সমাধান দেওয়া আছে। কোডটি রান করে আউটপুট দেখুন এবং নিজের মতো করে পরিবর্তন করে প্র্যাকটিস করুন:</p>
      <ol>
        <li><strong>প্যালিনড্রোম চেকার (Palindrome Checker):</strong> কোনো শব্দ সোজা ও উল্টো দিক থেকে একই কিনা তা যাচাই।</li>
        <li><strong>শপিং কার্ট ডিসকাউন্ট অ্যালগরিদম:</strong> মোট কেনাকাটা $100 ছাড়িয়ে গেলে ১০% ছাড় দেওয়া।</li>
        <li><strong>কাস্টম ম্যাপ ফাংশন (Build your own Array.map):</strong> জাভাস্ক্রিপ্টের বিল্ট-ইন <code>map()</code> এর মতো নিজস্ব ফাংশন বানানো।</li>
      </ol>
    `,
    defaultCode: `// 🎯 চ্যালেঞ্জ ১: প্যালিনড্রোম চেকার
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = clean.split("").reverse().join("");
  return clean === reversed;
}

console.log("Is 'madam' palindrome? ->", isPalindrome("madam"));
console.log("Is 'racecar' palindrome? ->", isPalindrome("racecar"));
console.log("Is 'hello' palindrome? ->", isPalindrome("hello"));

// 🎯 চ্যালেঞ্জ ২: ডিসকাউন্ট ক্যালকুলেটর
function calculateTotalWithDiscount(items) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const discount = subtotal > 100 ? subtotal * 0.10 : 0;
  return {
    subtotal,
    discount,
    finalTotal: subtotal - discount
  };
}

const myCart = [
  { name: "Backpack", price: 60 },
  { name: "Water Bottle", price: 20 },
  { name: "Headphones", price: 45 }
];
console.log("\\nCart Calculation:", calculateTotalWithDiscount(myCart));

// 🎯 চ্যালেঞ্জ ৩: নিজস্ব Custom Map Function
function myCustomMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

const numbers = [2, 4, 6, 8];
const squared = myCustomMap(numbers, (num) => num * num);
console.log("\\nCustom Map Squared Numbers:", squared);`,
    tips: "প্রতিদিন অন্তত ১টি করে ছোট সমস্যা সমাধান করার মাধ্যমে জাভাস্ক্রিপ্টের লজিক্যাল থিংকিং মজবুত হয়।"
  }
];
