function calculadora() {
    const operacao = prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtrair (-)\n 3 - Multiplicar (*)\n 4 - DivisaoReal (/)\n 5 - DivisaoInteira(%)\n 6 - Potenciacao (**)');

if (!operacao || operacao >= 7){
    alert('Erro - operação inválida');
    calculadora();
}else {    
    let n1 = Number(prompt('Insira o primeiro valor: '));
    let n2 = Number(prompt('Insira o segundo valor: '));
    let resultado;

    if (!n1 || !n2 ){
        alert('Erro parametro inválido')
    } else{ function Soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
    }

    function Subtrair() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
    }

    function Multiplicar() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
    }

    function DivisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
    }

    function DivisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a${resultado}`);
    }

    function Potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a =  ${resultado} `);
    }

    if(operacao ==1) {
        Soma();
        novaOperacao();
    } else if (operacao == 2) {
        Subtrair();
        novaOperacao();
    } else if (operacao == 3) {
        Multiplicar();
        novaOperacao();
    } else if (operacao == 4) {
        DivisaoReal();
        novaOperacao();

    } else if (operacao == 5) {
        DivisaoInteira();
        novaOperacao();
    } else if (operacao == 6) {
        Potenciacao();
        novaOperacao();
    }
    }

   
    function novaOperacao(){
        let opcao = prompt('Deseja fazer outra operação\n 1 - Sim\n 2 - não');
        if(opcao == 1){
            calculadora();
        }else if(opcao == 2){
            alert('Até mais')
        }else{
            alert('Digite uma opcao válida')
            novaOperacao()
        }

    }
        
    
}
}



calculadora();