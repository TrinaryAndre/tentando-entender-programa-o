
// if , else, else if

////var jogador1 = 1;
// jogador2 = 0;

//if(jogador1 > 0){
 //   console.log('Jogador1 marcou ponto');
//} else if(jogador2 > 0) {
//    console.log('Jogador 2 marcou ponto')
//}else{
 //   console.log('Ninguém marcou ponto')
//}

// podemos utilizar mais de um if ou else
// no caso aninhamos as condicoes

//var jogador1 = 1;
//var jogador2 = 0;

//if (jogador1 % -1){
  //  if(jogador1 > 0){
    //} else if(jogador2 > 0) {
      //  console.log('Jogador1 marcou ponto');
        //console.log('Jogador 2 marcou ponto')
    //}else{
    //    console.log('Ninguém marcou ponto')
    //}
//}

// if ternario:
// ex: [condiçao]?[instruçao1]:[instruçao2];
// jogador1 > 0 ? console.log('marcou ponto'): console.log('não marcou ponto');
// lembre de usar a ? e :

//var jogador1 = 0;
//var jogador2 = 1;

//jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') :
//console.log('jogadores inválidos');
//if(jogador1 > 0){
 //  console.log('Jogador1 marcou ponto');
//} else if(jogador2 > 0) {
//   console.log('Jogador 2 marcou ponto')
//}else{
//    console.log('Ninguém marcou ponto')
//}

//
// verificaçoes

// var jogador1 = 2;
// var jogador2 = newFunction();

// if(jogador1 = 0 && jogador2 == 0){
//    console.log('Jogador1 marcou ponto');
//    placar = jogador1 > jogador2;

// } else if(jogador2 = 0 && jogador1 == 0) {
//    console.log('Jogador2 marcou ponto')
//    placar = jogador2 > jogador1;

// }else{
//     console.log('Ninguém marcou ponto')
// }

//

// SWITCH/CASE
// switch (${expressao}){
// case1:
//      ${instrucao};
//  break;
//  case2:
//      ${instruçao};
//  break;
//}


// var jogador1 = 2;
// var jogador2 = 1;
// var placar;
// jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') :
// console.log('jogadores inválidos');

// if(jogador1 > 0 && jogador2 == 0){
//    console.log('Jogador1 marcou ponto');
//    placar = jogador1 > jogador2;

// } else if(jogador2 >  0 && jogador1 == 0) {
//    console.log('Jogador2 marcou ponto')
//    placar = jogador2 > jogador1;

// }else{
//     console.log('Ninguém marcou ponto')
// }
    

// switch (placar) {
//     case placar = jogador1 > jogador2:
//         console.log('jogador 1 ganhou');
//         break;
//     case
//         placar = jogador2 > jogador1:
//         console.log('jogador 2 ganhou');
//         break;
//         default:
//             console.log('ninguém ganhou')
// }

// laços@@@

// code exemplo
// let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5', ];

// let objetct =  {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3:'valor3', }

//for executa uma instrução até que seja falsa

// for (let indice = 0; indice < array.lenght; indice ++) {
//     console.log(indice);

// }

//le-se enquanto indice for menor que o array.lenght(lenght é o tamanho total)
//ou seja enquanto indice não atingir o total de 5 que é o tamamnho
// do array ele vai repetir e receber mais 1 (++)

// for/in 
// funciona como repetiçao a partir de um propriedade

//for(let i in array){
//    console.log(i)

//}

// for(i of array){
//     console.log(i);

// }

// while <<>>
// var a = 0;
//  while(a < 10){

//     a++;
//     console.log(a);



 // <<>> do/while

 var a = 0;
        do{
            a++;
            console.log(a);
    
        } while (a < 10)
