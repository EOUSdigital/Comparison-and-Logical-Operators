//TODO 📗 Module 5. Logic and Control Flow - Lesson 03.01: Comparison and Logical Operators


//TODO  📝 Step 1: Explore the Topic

//* 🔎 What Are Comparison and Logical Operators?
//  These operators form the foundation of decision-making in programming. They allow your code to:
//  • Compare values
//  • Check conditions
//  • Combine multiple conditions
//  • And ultimately control the flow of your program

//* 🔢 Comparison Operators
//  Used to compare two values and return a Boolean (true or false):

//? Operator            Description                         Example                 Result
//  ===                 Strict equality                     5 === 5                 true
//• !==                 Strict inequality                   5 !== '5'               true
//  ==                  Loose equality (type-coercing)      5 == '5'                true (⚠️)
//• !=                  Loose inequality                    5 != '5'                false (⚠️)
//  >                   Greater than                        10 > 7                  true
//  <                   Less than                           3 < 2                   false
//  >=                  Greater than or equal to            5 >= 5                  true
//  <=                  Less than or equal to               4 <= 3                  false

//! ⚠️ Avoid == and != in modern JavaScript—prefer === and !== to avoid bugs due to type coercion.

//* 🧠 Logical Operators
//  Used to combine or invert Boolean expressions:

//? Operator            Name                                Description                         Example
//  &&                  Logical AND                         All conditions must be true         isAdmin && isLoggedIn
//  `                                                       `                                   Logical OR
//• !                   Logical NOT                         Inverts the condition               !isLoggedIn

//* 🧪 When Are These Used?
//  Every time our program checks:
//  • If a user is authenticated
//  • If a cart total qualifies for a discount
//  • If weather is sunny and it is the weekend
//  • If two values match
//  • Or if something should NOT happen
//  ... it is relying on comparison and logical operators.

//* ⚠️ Key Concepts and Limitations
//  • Comparisons return Boolean values (true or false)
//  • Type matters! '5' === 5 → false
//  • Combining expressions? Group with parentheses:
//          → (age > 18 && isMember) is clearer and safer
//  • ! (NOT) only inverts one condition unless grouped:
//      1. one condition:
//          → !isMember && isAdmin
//      2. grouped: 
//          → !(isMember)


//TODO  📝 Step 2: Real-World Examples

//  These operators are everywhere—in code and in real life. Let's look at how JavaScript mirrors common human logic using comparisons and conditionals.

//* 🛒 Example 1: Free Shipping Logic
//  “If your cart total is at least $50 and you are a member, you get free shipping.”

if (cartTotal >= 50 && isMember) {
    console.log("You qualify for free shipping");
}

//! 🧠 Real-life match: Many e-commerce sites use this exact combination of comparison and logical AND (&&).

//* 🎓 Example 2: Grading System
//  “If score is 90 or higher → A, 80 or higher → B…”

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
}

//! 🧠 Real-life match: Schools use numerical comparisons to determine letter grades.

//* 🚦 Example 3: Driving Restrictions
//  “You can drive only if you are over 18 and have a valid license.”

if (age > 18 && hasLicense) {
    console.log("You are allowed to drive.");
}

//! 🧠 Logical AND ensures both conditions must be true.

//* ☀️ Example 4: Weekend Plans Based on Weather
//  “If it is the weekend or a holiday, and it is sunny, go to the beach.”

if ((isWeekend || isHoliday) && weather === "sunny") {
    console.log("Let’s go to the beach!");
}

//! 🧠 Combines OR and AND, with parentheses to control precedence.

//* ❌ Example 5: Login Access
//  “If the user is not logged in, redirect to login page.”

if (!isLoggedIn) {
    console.log("Redirecting to login...");
}

//! 🧠 The logical NOT (!) flips a true/false value. This is especially common in authentication.

//* 🔐 Example 6: Secure Area Access
//  “User must be logged in and either be an admin or a manager.”

if (isLoggedIn && (isAdmin || isManager)) {
    console.log("Access granted to secure area.");
}

//! 🧠 This nested logic is very common in role-based access systems.


//TODO  📝 Step 3: Quiz - Comparison and Logical Operators

//* 1. What does the === operator check for in JavaScript?
//  A. Value only
//  B. Type only
//  C. Value and type
//  D. Nothing—it’s deprecated

//! Answer: C

//* 2. What is the result of this expression?

//  5 == '5'

//  A. true
//  B. false
//  C. TypeError
//  D. NaN

//! Answer: A

//* 3. Which expression is true if both isWeekend and isHoliday are false?
//  A. isWeekend || isHoliday
//  B. !isWeekend && !isHoliday
//  C. isWeekend && isHoliday
//  D. isWeekend || !isHoliday

//! Answer: B

//* 4. What will this code output?

let age = 20;
let hasLicense = false;

if (age > 18 && hasLicense) {
    console.log("You can drive.");
} else {
    console.log("You can not drive");
}

//  A. You can drive
//  B. You cannot drive
//  C. Syntax Error
//  D. Nothing

//! Answer: B

//* 5. Which statement correctly inverts a Boolean value in JavaScript?
//  A. isLoggedIn == false
//  B. !isLoggedIn
//  C. isLoggedIn = false
//  D. false.isLoggedIn

//! Answer: B

//* True or False

//  6. The || operator returns true if either condition is true.
//! Answer: True

//  7. The expression !(a && b) is the same as !a && !b.
//! Answer: False

//  8. You should always use == instead of === for simpler code.
//! Answer: False

//  9. Comparisons like 5 >= 3 return a Boolean value.
//! Answer: True

//  10. !true evaluates to false.
//! Answer: True
