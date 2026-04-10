Algoritmo "Aprovado ou Reprovado"
// Leia a média de um aluno. Se média = 7 ? Aprovado. Caso contrário ? Reprovado.
Var
No1: inteiro
No2: inteiro
No3: inteiro
Media: real

Inicio
escreva("Qual a sua primeira nota? ")
leia (No1)
escreva("Qual a sua segunda nota? ")
leia (No2)
escreva("Qual a sua ultima nota? ")
leia (No3)
Media <-(No1+No2+No3)/3
se Media > 7 entao
escreva ("Você foi aprovado. Parabens!!! ")
senao
escreva ("Você foi reprovado. Tente novamente no proximo ano!!! ")
fimse
Fimalgoritmo