function numberOneTriangle(num){
    for (let i = 0; i <= num; i++) {
        let s = ''
        for (let j = 1; j <= i; j++) {
          s = s + '*'
        }
        console.log(s);
        let p = document.createElement('p');
        p.innerHTML = s +"<br>";
        document.getElementById('sao').append(p);
    }
}


document.getElementById('ok').addEventListener("click",()=>{
    let num = parseInt(document.getElementById("number").value);
    numberOneTriangle(num);
})
