
function phepcong() {
    let a = +document.getElementById('so1').value;
    let b= +document.getElementById('so2').value;
    let tong = a + b;
    document.getElementById('result').innerHTML='Result addition '+tong;
}
function pheptru() {
    let a = document.getElementById('so1').value;
    let b= document.getElementById('so2').value;
    let hieu = a - b;
    document.getElementById('result').innerHTML='Result subtraction '+hieu;
}
function phepnhan() {
    let a = document.getElementById('so1').value;
    let b= document.getElementById('so2').value;
    let tich = a * b;
    document.getElementById('result').innerHTML='Result multiplication '+tich;
}
function phepchia() {
    let a = document.getElementById('so1').value;
    let b= document.getElementById('so2').value;
    let thuong = a/b;
    document.getElementById('result').innerHTML='Result division '+thuong;
}