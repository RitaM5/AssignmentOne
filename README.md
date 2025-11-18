* What is the use of enums in TypeScript? Provide an example of a numeric and string enum ?

এনাম হলো একটা ছোটো লিস্ট, যেখানে ফিক্সড কিছু নাম থাকে, আর ওই নাম গুলো কোড-এ সেফলি ব্যবহার করা যায় । এমন সিসুয়েশন আসে যেখানে ফিক্সড টাইপ এর কন্সট্যান্ট ভ্যালু থাকবে সেখানে আমরা এনাম এর মাধ্যমে ভ্যালু এবং টাইপকে একসাথে ব্যবহার করতে পারি, এক জায়গায় আবদ্ধ করতে পারি । যেমন,

-      enum Color {
-       Yellow,
-       Green,
-       Purple,
-      };

   let getColor = Color.Yellow;

-       enum Day {
-        Saturday= "SATURDAY",
-        Sunday= "SUNDAY",
-        Monday= "MONDAY"
-       }

   let getDay = Day.Sunday;


* Provide an example of using union and intersection types in TypeScript?

ইউনিয়ন মানে একটা ভেরিয়েবল মাল্টিপল টাইপ এর যেকোনো কিছু হতে পারে । যেমন,

   type ColorRole = "yellow" | "green";

-        const getDashboard = (role: ColorRole) => {
-         if (role === "yellow") {
-           return "sent him yellow t-shirt";
-          }
-         else if (role === "green") {
-           return "sent him green t-shirt";
-         } 
-        else {
-           return "not available";
-         }
-        };

getTshirt("green");


ইন্টারসেকশন মানে এক সাথে দুই টাইপ এর সব প্রোপার্টি থাকবে । যেমন,

-       type Person = { name: string };
-       type Employee = { phone: number };

    type Staff = Person & Employee;

-       const user: Staff = {
-        name: "Ali",
-        phone: 014857485,
-       };
