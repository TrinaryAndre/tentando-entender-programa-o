// esse programa calcula a media aritmética  de uma nota
// andre pedro


programa
{
	
	funcao inicio()
	{
		real nota1,nota2,nota3,nota4,media
		cadeia aluno

		escreva("Digite o nome do aluno: ")
		leia(aluno)
		escreva("O nome digitado foi: " + aluno + "\n")
		escreva(" Digite a nota 1: ")
		leia(nota1)
		escreva(" Digite a nota 2: ")
		leia(nota2)
		escreva(" Digite a nota 3: ")
		leia(nota3)
		escreva(" Digite a nota 4: ")
		leia(nota4)

		media = (nota1+nota2+nota3+nota4)/4

		// verifica se a média é maior ou igaul a 7

		se (media >= 7)
		{
			escreva("O aluno: " + aluno + " obteve a média: " + media + "  passou de ano")
		}

		// caso a nota seja menor que 7
		senao se (media >= 5)
		{
			escreva("O aluno: " + aluno + " obteve a média: " + media + " que está baixa, faça a prova de recuperação")
		}

		// caso não atinja 5
		senao 
		{
			escreva("O aluno: " + aluno + " obteve a média: " + media + " a nota não atingiu a média, mais informações na secretária")
		}
			
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 818; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */