/**
 * 🧮 Math Utility Module (গাণিতিক ফাংশনসমূহ)
 * উদ্দেশ্য: ES Modules (Named Export) বোঝানোর জন্য
 */

export const addition = (x1, x2) => {
    return x1 + x2;
};

export const subs = (x1, x2) => {
    return x1 - x2;
};

export const multiplication = (x1, x2) => {
    return x1 * x2;
};

export const division = (x1, x2) => {
    if (x2 === 0) throw new Error("Cannot divide by zero!");
    return x1 / x2;
};
