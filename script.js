function soma(){
    var p1 = document.getElementById('p1')
    p1.innerHTML = '+'
} 
function subtracao(){
    var p1 = document.getElementById('p1')
    p1.innerHTML = '-'
}
function multiplicacao(){
    var p1 = document.getElementById('p1')
    p1.innerHTML = '*'
}
function divisao(){
    var p1 = document.getElementById('p1')
    p1.innerHTML = '/'
}
function raiz(){
    var p1 = document.getElementById('p1')
    p1.innerHTML = '√'
}
function porcentagem(){
    var p1 = document.getElementById('p1')
    p1.innerHTML = '%'
}
function calcular(){  
    var tn1 = document.getElementById('num1')
    var tn2 = document.getElementById('num2')
    var res = document.getElementById('resp')
    var p1 = document.getElementById('p1').innerHTML
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s 
    switch(p1){
        case '+':
            s = n1 + n2
            break
        case '-':
            s = n1 - n2
            break
        case '*':
            s = n1 * n2
            break
        case '/':
            s = n1 / n2
            break
        case '√':
            s = Math.sqrt(n1)
            break
        case '%':
            s = (n1 / 100) * n2
            break
        default:
            break
    }
    res.innerHTML = `${s}`
}
