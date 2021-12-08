function ChuyenDoi() {
    let tienvao = document.getElementById('tien').value;
    let selectQG = document.getElementById('quocgia').value;
    let selectTienTe = document.getElementById('tiente').value;
    let tienra;
    if (selectQG == selectTienTe) {
        tienra = tienvao;
    }
    if (selectQG == 'vnd' && selectTienTe == 'usd') {
        tienra = tienvao / 23000;
    }
    if (selectQG == 'usd' && selectTienTe == 'vnd') {
        tienra = tienvao * 23000;
    }
    document.getElementById("result").innerHTML = "Result: " + tienra;
}