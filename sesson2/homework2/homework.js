// BÀI TẬP 1

// let userinput = prompt("Nhap vao so N");
// let tongsochan = 0;
// let tongsole = 0 ;
// let A = 0;
// let B = 0;
// let C = 0;
// for(i=1;i<=userinput;i++){
//     if(i%2!=0){
//         tongsole+=i;
//     }else{
//         tongsochan+=i;
//     }
//     A = A + 1/i;
//     B = B+ 1/(i*(i+1));
//     C = C + i/(i+1);
// }
// console.log("Tong cac so chan la: "+tongsochan);
// console.log("Tong cac so le la: "+tongsole);
// console.log("A= "+A);
// console.log("B= "+B);
// console.log("C= "+C);

// BÀI TẬP 2

// let N = prompt ("Nhap vao so N");
// let flag = true;
// if(N<2){
//     flag = false;
//     console.log("Xin nhap so khac");
// }else{
//     for(i=2;i<N-1;i++){
//         if(N % i ==0){
//           flag = false;
//             break;
//         }
//     }
// }
// if(flag == true){
//     console.log(N+" La so nguyen to");
// }else{
//     console.log(N+" Khong la so nguyen to");
// }

//BÀI TẬP 3

// function kiemtrasonguyento(n) {  
//    let flag =true;
//    if(n<2){
//        flag=false;
//    }else{
//         for(let i=2;i<n;i++){
//            if(n%i==0){
//               flag=false;
//               break;
//             }
        
//         }
//    }
    
//     return flag;
// }
// let input=prompt("Nhập số N");

// for(let i=0;i<=input;i++){
//     if (kiemtrasonguyento(i)){
//         console.log(i);
//     }           
// }

//BÀI TẬP 4
// let n=prompt("Nhap N");
// let x1,x2,x3;
// x1=x2=x3=1;
// if(n<=0){
//   console.log("Khong hop le");
  
// }else if(n===1||n===2){
//   console.log(x1);
  
// }else {
//   for(i=3;i<=n;i++){
//     x3=x1+x2;
//     x1=x2;
//     x2=x3;
//   }
//   console.log(x3);
  
// }
//BÀI TẬP 5

// let flag = true;
// let tong = 0;
// while(flag){
//     let userinput = prompt("Nhap vao so");
//     if(userinput>0){
//         tong+=userinput;
//     }else{
//         console.log(tong);
//         break;
//     }
// }
//BÀI TẬP 6
  
// let userinput = prompt("Nhap chuoi")
// flag = 0;

// for (let i = 0; i < Math.ceil(userinput.length / 2); i++) {
//     if (userinput[i] !== userinput[userinput.length - i - 1]) {
//         console.log("Chuoi " +userinput +" khong phai chuoi doi xung.");
//         break;
//     } else {
//         flag++;
//     }
// }
// if (flag === Math.ceil(userinput.length / 2)) {
//     console.log("Chuoi " +userinput+ " la chuoi doi xung.");
// }

//BÀI TẬP 7
//BÀI TẬP 8
// console.log("Giai bai toan Dan Gian");
//     while(n=9,n<25,n++){
//         (n*2+(36-n)*4)===100 ;
//         //máy em chỗ này bị lag nhưng vẫn cho ra kết quả gà = 10 chó = 26
//         console.log("So ga la "+n+" so cho la "+(36-n));         
// }
