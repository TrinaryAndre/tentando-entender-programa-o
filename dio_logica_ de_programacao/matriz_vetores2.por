//programa
//{
	
//	funcao inicio()
//	{
//		cadeia cesta[][] = {{"Pera", "100"}, {"Jaca", "200"}, {"Maça", "900"},{"Uva", "89"}}
//		escreva("Prouto: ")
		// imprimir o que esta na linha 1
//		escreva(cesta[1][0])
//		escreva(" Quantidade: ")
//		// imprimir o que esta na linha 1 e coluna 1
//		escreva(cesta[1][1])
//	}
//

// e para exibir a tabela inteira?
//
//
programa
{
	
	funcao inicio()
	{
		inteiro contador = 0
		cadeia cesta[][] = {{"Pera", "100"}, {"Jaca", "200"}, {"Maça", "900"},{"Uva", "89"}}

		faca{
			escreva("Produto: " + cesta[contador][0] + " Quantidade: " + cesta[contador][1] + "\n")
			contador++
		}enquanto(contador <=3)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 615; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */