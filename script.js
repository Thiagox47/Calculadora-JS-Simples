// Variável global do parágrafo da operação.
let p1 = document.getElementById("operation");

// Variáveis da resposta e da soma.
let res = document.getElementById('result');

// Função que realiza a alteração do caractere para operação.
function changeOperation(operacao) {
    p1.innerHTML = operacao;
    document.getElementById('num1').style.display = operacao !== '√' ? "block" : "none";
}

// Função que realiza o cálculo.
function calculate() {
    // Variáveis dos inputs.
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    // Verificar se há dados inseridos nos inputs e se foi selecionada a operação.
    if (!p1.innerHTML || (isNaN(n1) && isNaN(n2)) || (n1 == '' && n2 == '')) {
        alert("Os valores devem ser adicionados e a operação deve ser escolhida, verifique se está tudo certo antes de continuar!");
        return;
    }

    // Variável da resposta e switch que identifica qual operação está sendo utilizada.
    let s;
    switch (p1.innerHTML) {
        case '+':
            s = n1 + n2;
            break;
        case '-':
            s = n1 - n2;
            break;
        case '*':
            s = n1 * n2;
            break;
        case '/':
            s = n1 / n2;
            break;
        case '√':
            s = Math.sqrt(n2);
            break;
        case '%':
            s = (n1 / 100) * n2;
            break;
        default:
            break;
    }

    // Mostra o resultado.
    res.innerHTML = `O resultado é: ${s}`;
}
