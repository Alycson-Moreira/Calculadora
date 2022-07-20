function calculadora() {
    const operacao = +prompt('Escolha uma operacao: \n 1- Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão Real(/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**)');

    if (!operacao || operacao>=7 || operacao <= 0) {
        alert('Erro - Operação Inválida');
        calculadora();
    } else{

        let n1  = +prompt(`Insira o Primeiro valor`);
        let n2  = +prompt(`Insira o Segundo valor`);
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - Parametros Inválidos');
            calculadora();
        }else{
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
            }
    
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
            }
    
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} x ${n2} = ${resultado}`);
            }
    
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
            }
    
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão inteira de: ${n1} / ${n2} é ${resultado}`);
            }
    
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} ^ ${n2} = ${resultado}`);
            }

            switch (operacao) {
                case 1:
                    soma();
                    novaOperacao();
                    break;
                case 2:
                    subtracao();
                    novaOperacao();
                    break;
                case 3:
                    multiplicacao();
                    novaOperacao();
                    break;
                case 4:
                    divisaoReal();
                    novaOperacao();
                    break;    
                case 5:
                    divisaoInteira();
                    novaOperacao();
                    break;
                case 6:
                    potenciacao();
                    novaOperacao();
                    break;        
                default:
                    break;
            }

        }
        function novaOperacao() {
            let opcao = +prompt(`Deseja fazer outra operação? \n 1 - Sim\n 2 - Não`);
            
            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert(`Até mais!`);
            } else{
                alert(`Digite uma opção válida`);
                novaOperacao();
            }
        }
        /* if (operacao == 1) {
            soma();
            novaOperacao();
        } else if (operacao == 2) {
            subtracao();
            novaOperacao();
        } else if (operacao == 3){
            multiplicacao();
            novaOperacao();
        } else if (operacao == 4){
            divisaoReal();
            novaOperacao();
        } else if (operacao == 5){
            divisaoInteira();
            novaOperacao();
        } else if (operacao == 6){
            potenciacao();
            novaOperacao();
        } */

        
        
             
       
    }
    
    
    
}


    
calculadora();


