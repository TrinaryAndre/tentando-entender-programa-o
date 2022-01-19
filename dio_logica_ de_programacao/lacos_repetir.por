//programa
//{
	
//	funcao inicio()
//	{
//		inteiro contador, limite, resultado
//		contador = 1
//		limite = 10
//		faca{
//			resultado = 9 * contador
//			escreva ("9 x " + contador + " = " + resultado + "\n")
//			contador ++ 
//			//++ é igual a +1
//			
//		} enquanto ( contador <= limite)
//	}
// 
//
// +++++     com base nas informaçoes acima escreva um código que pergunte qual é a tabuada a ser exibida ++++++


programa
{
	
	funcao inicio()
	{
		
		inteiro contador, limite, resultado,numero
		escreva("Insira qual é a tabuada desejada: ")
		leia(numero)
		escreva("Qual é o ultimo número a ser multiplicado?: ")
		leia(limite)
		contador = 1
		limite = limite
		faca{
			resultado = numero * contador
			escreva(+ numero + " x " + contador + " = " + resultado + "\n")
			contador ++ 
			//++ é igual a +1
			
		} enquanto ( contador <= limite)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 630; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */