// var greet = function(name){
//     console.log("Hello " + name)
// }
// greet("John")

// function greet(name){
//     console.log("Hello " + name)
// }
// greet("John")

// Viết function truyền vào 3 tham số là 3 lá bài (1 -> 9). Tính điểm của người đó khi chơi 3 cây
// function ba_cay(la_thu_nhat, la_thu_hai, la_thu_ba){
//     let score = la_thu_nhat + la_thu_hai + la_thu_ba;
//     if (score % 10 != 0){
//         console.log("Điểm của người đó là " + score % 10)
//     }
//     else {
//         console.log("Điểm của người đó là " + 10);
//     }
    
// }

// ba_cay(8, 6, 6);

// function check(y){
//     if(y % 4 == 0) {
//         if(y % 100 == 0) {
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     else{
//         return false;
//     }
// }

// console.log(check(2100))

// function check(year){
//     if (year % 400 == 0){
//         console.log("Đúng")
//     }
//     else if (year % 4 == 0 && year % 100 != 0){
//         console.log("Đúng");
//     }
//     else {
//         console.log("Sai");
//     }
// }

// check(2100);

// function check(year){
//     if (year % 400 == 0){
//         return true;
//     }
//     else if (year % 4 == 0 && year % 100 != 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// if (check(2100) == true){
//     console.log("Đúng");
// }
// else console.log("Sai");

// function sum(a, b){
//     return (a + b);
// }
// console.log(sum(3, 4));

const h1 = document.getElementById('heading')
h1.style.color = "red";
h1.style.fontSize = "50px";

const h2 = document.getElementsByClassName("sub-heading");
h2[1].style.color = "blue";
h2[1].style.background = "yellow";

const p = document.getElementsByTagName("p");
p[0].style.color = "green";
p[0].style.backgroundColor = "pink";

// array / mảng
["nam", "son", "yuki", "an", "huu", "khang"]
[1, 2, 3, 4, 5, 6, 7]
[2, 4, 6, 8, 10]