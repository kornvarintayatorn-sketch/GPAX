function caculate(){
    let g1=parseFloat(document.getElementById("t1").value)||0
    let g2=parseFloat(document.getElementById("t2").value)||0
    let g3=parseFloat(document.getElementById("t3").value)||0
    let g4=parseFloat(document.getElementById("t4").value)||0
    let g5=parseFloat(document.getElementById("t5").value)||0
    let g6=parseFloat(document.getElementById("t6").value)||0
    let gpax= (g1*14.0 + g2*16 + g3*16.5 + g4*16.5 + g5*15.5 + g6*14.0) / 92.5
    document.getElementById("result").innerText = "GPAX = " + gpax.toFixed(4)
}
