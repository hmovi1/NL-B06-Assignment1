//Author: Md Hamid Muntasir ;
//Course Email: hmovi0007@gmail.com ;


What are some differences between interfaces and types in TypeScript?

     ইন্টারফেইস আর টাইপের মধ্যে পার্থক্যটা কি?

     এটি আসলে কাঠখোট্টা ডেফিনেশন দিয়ে বুঝালে মাথার উপর দিয়ে যেতে পারে।কিন্তু আসলে কোডিং
     করার সময়ে কিভাবে এপ্লাই করা হচ্ছে সেইভাবে দেখালে আরো ভাল ভাবে বুঝা যাবে।

       একটি primitive/object/Union/Function/Tuple Type declare করতে হচ্ছে,যেনো আমরা তা বারবার বিভিন্ন ব্লকে বার বার Type declare না করে বরং বারবার ব্যবহার করতে পারি। দেখাই যাচ্ছে এটি বিভিন্ন ধরণের ডেটা টাইপ নিয়ে কাজ    করতে পারে। কিন্তু ইন্টারফেইস শুধুমাত্র অব্জেক্ট বা ক্লাস এর জন্য ইনভেন্টেড একটি ফিচার।তবে এটি তার নিজ জায়গায় খুবি ইফেক্টিভ।

       যেমন -  
       type UserID = string;
       let userId: UserID = "user123"; //Primitive

        type Person = {
        name: string;
        age: number;
        isStudent?: boolean; // Optional property
        };   

        const jane: Person = {
        name: "Jane Smith",
        age: 22,
        isStudent: true,
        };      //Object


        আর ইন্টারফেইসের ব্যবহার সবচেয়ে বেশি হয় যখন আমাদেরকে একটি Object অথবা Class
        এর মধ্যে অনেকগুলো টাইপ কে একটি নতুন ধরণের একক টাইপ হিসেবে ব্যবহার করার প্রয়োজন
        পরে*(সব একত্রিত করা বা মার্জ করা) যা পরবর্তীতে ইমপ্লেমেন্ট করতে হবে। অনেক সময় একি টাইপের মধ্যে একি নামের টাইপ বার বার থাকতে পারে। আর এখানেই ইন্টারফেইস এর কারিশ্মা- মুল খেলা OOP তে টের পাওয়া যায়। ইন্টারফেইস extends ব্যবহার করে অন্য ইন্টারফেইস থেকেও নতুন একক ইন্টারফেইস হতে পারে যা বাস্তব রিয়েল ওয়ার্ল্ড প্রোগ্রামিং এ অনেক পাওয়ারফুল একটি ফিচার যা type এর নেই।

            interface User {
                id: number;
                username: string;
                email: string;
                isActive?: boolean; // Optional property
            }   
            কি কি ইমপ্লেমেন্ট করতেই হবে তার একটি ছাচ।।

            const newUser: User = {
               id: 1,
               username: "jane_doe",
               email: "jane@example.com",
               isActive: true,
            }; আর সেই ছাচ থেকে করা ইমপ্লেমেন্টেশন। এখানে কিন্তু ইন্টারসেকশন ব্যবহার না করেই সব মার্জ করা গেছে।

         এক্সটেনশন ফিচার
             
             interface Shape {
               color: string;
            }

            interface Circle extends Shape {
             radius: number;
            }

            const myCircle: Circle = {
            color: "blue",
            radius: 10,
            }; দেখাই যাচ্ছে যে extends এর মাধ্যমে চাইলে অন্য আরেকটি ইন্টারফেইস ও একি ছাচের মধ্যে নিয়ে আসা যাচ্ছে।
             
              এটা অনেকটা আটার দলার মত। ধরো তোমার কাছে একটি গমের আটার দলা আছে যেটিতে
              আছে শুধু লবণ। এবং আরেকটি আটার দলা আছে যেটিতে আছে আটা এবং বেশি পরিমাণে ডিম,
              কিন্তু কোন লবণ নেই।
              এখন তুমি চাইছো পাস্তা বানাবার খামির তাহলে তুমি যদি নরমাল লবন আটার দলার সাথে বেশি ডিম ওয়ালা খামির কে  মেশাও তাহলে পেয়ে যাচ্ছো তোমার পাস্তা বানানোর খামির।

              এখন তুমি এই খামির এর ফর্মুলা থেকে যত ধরণের পাস্তাই বানাও না কেন তাতে আটা লবণ ও ডিম থাকতেই হবে।

              এখানে আটা লবণ ও ডিম একেকটি টাইপ যেগুলো এসেছে ভিন্ন ভিন্ন দলা থেকে।এখানে আটা ছিল কমন।

              কিন্তু দুই দলা এক হয়ে সম্পূর্ণ নতুন একটি পাস্তা খামির। 

                আর এই খামির থেকে যা যা বানানো হবে সবি হবে বাহারি রকমের পাস্তা যার ছাচ হলো
                
                interface NormalDola{
                    Ata: string;
                    Lobon: string;
                }

                interface DimerDola{
                    Dim: string;
                    Ata: string;
                }

                interface PastarKhamir extends NormalDola,DimerDola{
                    mishao(): string;
                }

                const Pasta: PastarKhamir = {
                    Ata: "Teer",
                    Lobon: "Molla",
                    Dim: "Shapno Mart".
                    mishao(){
                        return "mishao";
                    }
                }
                
                এখানেই ইন্টারফেসের তেলেসমাতি! এটি কিন্তু টাইপ দিয়ে করা যেতো না।


What is the use of the keyof keyword in TypeScript? Provide an example.
     টাইপস্ক্রিপ্টে কখন keyof কিওয়ার্ড ব্যবহার করতে হয়?একটি উদাহরণ দাও।
         
            এটিও আসলে একটা প্র্যাক্টিকাল সমস্যার সমাধানে ইনভেন্ট করা প্রয়োজনীয় কী-ওয়ার্ড।
            ধরো আমরা একটি Object লিখলাম। এখন যখন প্রোগ্রাম রান করা হবে তখন যদি এমন
            হয় যে এমন প্রোপার্টি তে এক্সেস করার চেষ্টা করা হল যেটা আসলে আদৌ নেই। তাহলে কি
            হবে? এরর আসবে।

            Interface এবং Type এর ক্ষেত্রে কমপ্লাইলার নিজে নিজেই প্রোগ্রামারের দেয়া স্ট্রাকচার 
            অনুযায়ী চেক করতে পারে। কিন্তু যদি আমাদের কখুনো এমন প্রয়োজন হয় যে একটি ফাংশন
            লিখতে হবে যা শুধুমাত্র নির্দিষ্ট ধরণের টাইপ এর জন্যই সংরক্ষিত রাখতে হবে না হলে,
            ঝামেলা হতে পারে তখনি keyof আমাদেরকে key টা স্ট্রিং লিটারেল হিসেবে রিটার্ন করে।
            যাতে অযাচিত এক্সেস বন্ধ করা যায়।

               function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
                 return obj[key];
               }

               const person = { id: 1, name: "Alice", age: 22 };

               const nameValue = getProp(person, "name"); // OK → string
               const ageValue = getProp(person, "age");   // OK → number

               getProp(person, "salary"); // অর্থাৎ এখানে আমরা person এর salary নিতে পারছি না।
               কারণ এখানে এমন কোন key নেই।

               এখানে আমরা K কে প্যারামিটার হিসেবে দেয়ার আগে এটিকে সকল T প্যারামিটার এর key
               গুলো কে নিচ্ছি।  আর এই key গুলো স্ট্রিং লিটারেল হিসেবে নিয়ে ভেতরে ভেতরে comparison
               চলছে। যেটি মিলবে হুবুহু সেগুলো ওকে। না মিললে আউটপুট আসবে না।






            

              
             
