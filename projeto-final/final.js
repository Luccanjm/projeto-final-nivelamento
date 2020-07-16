var lista= [
n1 = prompt('Digite o 1° número:'),
n2 = prompt('Digite o 2° número:'),
n3 = prompt('Digite o 3° número:'),
n4 = prompt('Digite o 4° número:'),
n5 = prompt('Digite o 5° número:')
]
//  Menor ou maior
var min = Math.min(lista[0],lista[1],lista[2],lista[3],lista[4]);
document.write(`O menor número é o: ${min} <br>`);

var max = Math.max(lista[0],lista[1],lista[2],lista[3],lista[4]);
document.write(`O maior número é o: ${max}<br>`);

 // Par ou ímpar
 for (i=0;i<lista.length; i++ ){
   
    if(lista[i] %2 ==0){
        document.write(`Par ${lista[i]}<br>`);
    }else {
        document.write(`Ímpar ${lista[i]}<br>`);
    }
  
    }
    //não deu tempo de fazer número repetido