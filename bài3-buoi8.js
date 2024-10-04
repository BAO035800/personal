function ngaunhien() {
    return Math.floor(Math.random() * 10)
}

function nhapso() {
   let x=ngaunhien();
   let nhap;
   do{
    nhap=parseInt(prompt("Nhập số "), 10);
   }while(nhap!==x);
    document.getElementById("result").innerHTML="congratulation";
}