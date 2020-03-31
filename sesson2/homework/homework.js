//Bài tập 1
// let userinput = prompt ("Nhap vao mot so bat ki");
// if (userinput <0){
//         console.log("invalid input");
// }else if(userinput >0 ){
//     let i = 1;
//     let giaithua = 1;
//     while(i<=userinput){
//         giaithua*=i;
//         i+=1;
//     } 
//     console.log(giaithua);
// }


//Bài tập 2
// let name = prompt ("Nhập vào Tên");
// let age = prompt ("Nhập vào số tuổi");
// if (age < 18){
//     console.log(name + " chưa đủ tuổi vào trang web này");
// }else if (age >=18){
//     let userinput = prompt (name + " có muốn tiếp tục vào trang web này không?")
//     if (userinput = "yes"){
//         console.log(name + " đã vào trang web thành công");
//     }else if(userinput = "no"){
//         console.log(name + " đã thoát khỏi trang web");
//     }
// }


//Bài tập 3
// let username = prompt ("Nhập vào tài khoản");
// let password = prompt ("Nhập vào mật khẩu")
// let username2 = "quang";
// let password2 = 123456;
//     if(username != username2 || password != password2){
//         console.log("Đăng nhập thất bại");        
//     }else if(username == username2 && password == password2){
//         console.log("Đăng nhập thành công");      
//  }
        

//Bài tập 4
// let name = prompt ("Nhập vào tên");   
// let month = Number(prompt ("Nhập vào tháng sinh")) ;
// switch(month){
//     case 1:
//     case 2:
//     case 3:
//         console.log(name +" sinh vao mua xuan");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log(name +" sinh vao mua he");
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log(name+" sinh vao mua thu");
//         break;
//     case 10:
//     case 11:
//     case 12:
//         console.log(name+" sinh vao mua dong");
//         break;
//   default:
//       console.log("khong hop le");   
// }


//Bài tập 5
// let useragain = "yes";
// while (useragain = "yes"){
//     let a = prompt ("Nhap vao a");
//     let b = prompt ("Nhap vao b");
//     let c = prompt ("Nhap vao c");
//     let delta = b*b + 4*a*c;
//     if(delta < 0){
//         console.log("Phuong trinh vo nghiem");
//     }else if(delta == 0){
//         console.log("Phuong trinh co nghiem kep x =" + -b/2*a);
//     }else{
//         let x1 = (-b+Math.sqrt(delta))/2*a;
//         let x2 = (-b-Math.sqrt(delta))/2*a;
//         console.log("Phuong trinh co 2 nghiem x1 = " + x1 + " va x2 = " + x2)
//     }
//     useragain = prompt ("Ban co muon su dung tiep ? (yes/no)")
//     if(useragain ==="no"){
//         break;
//     }
// }


//Bài tập 6
// let userinput = prompt("Nhập chuỗi bất kỳ");
// let i=0;
// while (i<userinput.length) {
//    console.log("userinput["+i+"]="+userinput.substr(i,1));
//    i++;
//  }
// let userinput = prompt("Nhập chuỗi bất kỳ");
// for (let i = 0; i < userinput.length; i++) {
//     console.log("userinput["+i+"]="+userinput.charAt(i));       
// }


//Bài tập 7
// let userinput = "yes";
// while (userinput="yes") {
//     let name=prompt("nhập chuỗi bất kỳ");
//     for(let i= name.length-1;i>=0;i--){
//         console.log(i+": "+name.substr(i,1));
        
//     }
//     userinput=prompt("Bạn có muốn tiếp tục (yes/no)");
//     if(userinput==="no"){
//         break;
//     }
// }


