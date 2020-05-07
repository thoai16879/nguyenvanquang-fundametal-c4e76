// Bài 1:
// Để đổi vị trí của 2 phần tử a,b với nhau:
//  C1:
// khởi tạo "trunggian" sau đó:
// trunggian = a;
// a = b;
// b = trunggian;
//
//   C2:
// Sử dụng hàm so sánh: array.sort(function(a,b){ return a-b;})
// khi hàm sort() so sánh hai giá trị, nó sẽ gửi giá trị tới
// hàm so sánh và sắp xếp theo giá trị kết quả trả về
// (-, 0, +)
//
// VD 1:
// let a = 5;
// let b = 6;
// console.log(a,b);
// let trunggian = a;
// a = b;
// b = trunggian;
// console.log(a,b);
//
// VD 2:
// let arr = [40, 100, 1, 5, 25, 10];
// console.log(arr);
// arr.sort(function(a,b){return a-b});
// console.log(arr);
//
//
//
// Bài 2:
// const s = 'hello beauty there'
// a = s.split(" ");
// console.log(a);
//
//
//
// Bài 3:
// const a = [4, 5, 7, -8];
// console.log(...a);
//
//
// Bài 4:
// let shop = ["Jeans","T-Shirt","Socks"];
// let loop = true;
// while(loop){
//     let userinput1 = prompt("127.0.0.1:5000 says\nHi there, welcome to shop admin panel, what do you want (C,R,U,D)").toLowerCase();
//     if(userinput1 === "e"){
//         alert("127.0.0.1:5000 says\nThis command is not supported");
//     }else if(userinput1 === "r"){
//         for(let i=0;i<shop.length;i++){
//             console.log(`${i+1}. ${shop[i]}`);
//         }
//     }else if(userinput1 === "c"){
//         let newClo = shop.push(prompt("127.0.0.1:5000 says\nEnter the name of the new item"));
//         alert("127.0.0.1:5000 says\nDone");
//     }else if(userinput1 === "u"){
//         let n = Number(prompt("127.0.0.1:5000 says\nEnter the position you want to update"));
//         shop[n-1] = prompt("127.0.0.1:5000 says\nEnter the new name");
//         alert("127.0.0.1:5000 says\nDone");
//     }else if(userinput1 === "d"){
//         let n = Number(prompt("127.0.0.1:5000 says\nEnter the position you want to delete"));
//         shop.splice(n-1,1);
//         alert("127.0.0.1:5000 says\nDone");
//     }
//     else{
//         alert("127.0.0.1:5000 says\nSystem will come out");
//         loop = false;
//     }
// }
//
//
//
// Bài 6:
// let thanmore = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<arr[i+1]){
//         arr[i] = arr[i+1];
//     }else {
//     }
//   }
// alert(`The smallest number is ${thanmore}`);
//
//
//
// Bài 7:
// let userinput1 = prompt("Nhap vao so");
// let a = 0;
// if (input1.includes(userinput1)){
//     for (let i=0; i < arr.length; i++){
//         if (userinput1 === arr[i]){
//             a = i;
//         }else{
//         }
//     }
//     alert(`${userinput1} is FOUND in my array at index ${a}`);
// }else{
//     alert(`${userinput1} is not FOUND in my array`)
// }
