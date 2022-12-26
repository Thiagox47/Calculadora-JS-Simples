//Variavel Global do paragrafo da operação.
let p1 = document.getElementById("p1");

//Variavel da resposta e variavel da soma.
let res = document.getElementById('resp');

//Funções que realizam a alteração do caractere para operação.
function soma() {
    p1.innerHTML = '+';
    document.getElementById('num1').style.display = "block";
}

function subtracao() {
    p1.innerHTML = '-';
    document.getElementById('num1').style.display = "block";
}

function multiplicacao() {
    p1.innerHTML = '*';
    document.getElementById('num1').style.display = "block";
}

function divisao() {
    p1.innerHTML = '/';
    document.getElementById('num1').style.display = "block";
}

function raiz() {
    p1.innerHTML = '√';
    document.getElementById('num1').style.display = "none";
}

function porcentagem() {
    p1.innerHTML = '%';
    document.getElementById('num1').style.display = "block";
}

//Função que realiza o calculo.
function calcular() {
    //Variaveis dos inputs.
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    //Verificar se há dados inseridos nos inputs e se foi selecionada a operação.
    if (p1.innerHTML == "" | n1 == "" & n2 == "") {
        alert("Os valores devem ser adicionados e a operação deve ser escolhida, verifique se está tudo certo antes de continuar!")
    } else {
        //Variavel da resposta e switch que identifica qual operação está sendo utilizada.
        let s;
        switch (p1.innerHTML) {
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
                s = Math.sqrt(n2)
                break
            case '%':
                s = (n1 / 100) * n2
                break
            default:
                break
        }
        //Mostra o resultado.
        res.innerHTML = `O resultado é: ${s}`
    }
}