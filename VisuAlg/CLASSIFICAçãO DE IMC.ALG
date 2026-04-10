Algoritmo "Classificação de IMC"
//Leia peso e altura. Calcule o IMC e classifique conforme a tabela padrão.
Var
Pe:real
Al:real
Al4:real
IMC:real
Inicio
Escreva("Qual o Peso? ")
Leia (Pe)
Escreva("Qual a sua altura")
Leia (Al)
Al4 <- (Al*Al)
IMC <- (Pe/Al4)
Se (IMC <16 )entao
Escreva ("Está no estagio de Magreza |||.")
senao
     se (IMC >= 16 ) ou (IMC <= 16.9 ) entao
     Escreva ("Está no estagio de Magreza ||")
senao
     se (IMC >= 17 ) ou (IMC <= 18.4) entao
     escreva ("Está no estagio de Magreza |")
senao
     se (IMC >= 18.5 ) ou (IMC <= 24.9) entao
     escreva ("Esta no estagio ideal")
senao
     se (IMC >= 30) ou (IMC <=34.9)entao
     escreva ("Está no estagio de Obesidade |")
senao
     se (IMC >= 35) ou (IMC <=39.9) entao
     escreva ("Está no estagio de Obesidade ||")
senao
     se (IMC >= 40) entao
     escreva ("Está no estagio de Obesidade |")
fimse
fimse
fimse
fimse
fimse
fimse
fimse
Fimalgoritmo