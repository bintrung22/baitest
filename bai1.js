function kiem_tra_snt(num) {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}




document.getElementById('ok').addEventListener('click',()=>{
    let numA = document.getElementById('numberA').value;
    let numB = document.getElementById('numberB').value;
    let array =[];
    if(numA>=numB)
        alert("Nhập số A < B và A lớn hơn B");else
    if(numA <0 || numB <0)
        alert("số A hoặc B không nguyên dương");
    for(let i=numA;i<=numB;i++){
        if(kiem_tra_snt(i))
            array.push(i);
    };
    let kq = document.getElementById("kq");
    console.log(array)
    if(array.length>0){
        let nuaa=Math.floor(Math.random(9) * 10000);
        kq.innerHTML = 'dẫy số tự nhiên trong mãng từ '+numA+' đến '+numB+ " Là: "+array;
    }else kq.innerHTML ="trong dãy ko có số tự nhiên";
})