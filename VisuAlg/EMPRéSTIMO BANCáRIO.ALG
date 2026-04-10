Algoritmo "Empréstimo Bancário"
//Leia salário e valor da parcela. Se a parcela for menor ou igual a 30% do salário ? aprovado. Caso contrário? negado.
Var
Sa:real
Pa:real
Nr:real
Inicio
escreva ("Qual o seu salário? ")
Leia (Sa)
escreva ("Qual o sua parcela? ")
Leia (Pa)
Nr <- (Sa *0.3)
Se (Pa <=  Nr ) então
escreva ("Acesso permitido.")
senao escreva ("Acesso negado.")
fimse


Fimalgoritmo