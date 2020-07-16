// Variáveis e constantes, com exemplo:
document.write(`Variáveis, Constantes e comandos de decisão. <br><br>`);
var exemplo1 = 18; // variaveis podem ser alteradas.
const exemplo2 = 18; // constantes não podem ser alteradas.

    if (exemplo1 <= 20) {// comando de decisão

        exemplo1 = 30; // aqui irá receber o valor 30
        // exemplo2 ++;  já aqui não irá alterar e dará erro, por isso ela está comentada.
        document.write(`Variável será alterada: ${exemplo1}. <br> <br> Constante não será alterada: ${exemplo2} <br><br><br>`);

    }
document.write(`Loops <br> <br>`);
document.write('While:<br>')
    var valor_exemplo = prompt('Digite um valor: ');

        while(valor_exemplo < 100){ //enquanto o valor exemplo for menor que 100,imprima a mensagem e peça outro valor.
            alert('Valor menor que 100.')
            valor_exemplo = prompt('Digite outro valor: ');

    }
document.write(`Valor = ${valor_exemplo}`);
document.write('For: <br>')

        for(i=prompt('Digite um número para i:'); i == valor_exemplo; i=prompt('Digite um número diferente que o valor anterior:') ){

    }
document.write(`Número i = ${i} <br><br>`);

document.write('Função: <br><br>');
    function resposta(resposta){
        alert(resposta);
    }
    function parouimpar(numero){
    
        if(numero % 2 == 0){
            return 'Par'; 
        }else{
            return 'Ímpar';
        }

    }
var resultado = parouimpar(prompt('Digite um número: ')) ;
resposta(resultado);
document.write(`Seu número é: ${resultado}<br><br>`);

document.write(`Array e objetos <br> <br>`);
var array_exemplo = ["Array1", "Array2", "Array3"]; //array
document.write(`Separadamente: ${array_exemplo[0]} ${array_exemplo[1]} ${array_exemplo[2]} <br> De uma vez só: ${array_exemplo}<br><br>`);//chamei um de cada vez e depois todos juntos


var notebook = { //objetos
    modelo: "Inspiron 15 5000",
    sistema: "Windows 10",
    cor: "preta",
    tamanho: "15 polegadas",
    programas: ["Sonyvegas pro", "Photosho", "Illustrator", "Teams", "Dev c++", "Visual studio code"], //array dentro de objetos
    bateria: 100
};
document.write(`Programas no notebook: ${notebook.programas}. <br><br>`);

document.write("camelCase: Javascript e java -> lowercase <br> PascalCase: C# <br> kibab_case: HTML <br> snake_case: Python <br><br>");
//Caminho absoluto: <a href="//url/nome.extensao"></a>
//Caminho relativo: <a href="nome.extensao"></a>

// Diferença entre: &&, ||, ==,!=
// && -> e
// || -> ou
// == -> igual
//!= -> diferente


//EPER -> ENTENDER, PLANEJAR, EXECUTAR, REVISAR.
// Você entende o que tem que ser feito, planeja como irá fazer, começa a executar/escrever o programa, e 
// revisa para ajeitar erros/bugs.
// Fila: Primeiro que entra é o primeiro que sai. 
// Pilha: Primeiro que entra é o ultimo que sai
document.write('Fila e Pilha: <br><br>');

notebook.programas.shift();//fila
document.write(`Fila, o primeiro que entra é o primeiro que sai então o primeiro a sair é o Sony vegas: ${notebook.programas}.<br><br>`);

notebook.programas.pop(); //pilha
document.write(`Pilha, o primeiro que entra é o último que sai então o primeiro a sair é o Visual studio code: ${notebook.programas}.<br><br>`);

//Diferença entre HTML, javascript, e css
//O HTML é a alma, o javascript é o que da a vida e o css é o que da a beleza.
