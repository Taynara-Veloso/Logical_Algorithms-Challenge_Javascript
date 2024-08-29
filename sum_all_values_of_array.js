/* 
    Crie uma função que retorne a soma dos elementos 
    do array como um inteiro.
*/
let ar = [1, 2, 3, 4, 10, 11]
let sum

function arraySum() {
  sum = ar.reduce((index,value) => {
      return index + value
  },0)
  return sum 
}

arraySum(ar)
console.log(sum)

/* 
  Array.prototype.reduce()

  O método reduce() executa uma função reducer (fornecida por você) 
  para cada elemento do array, resultando num único valor de retorno.

  A função reducer recebe quatro parâmetros:
  
    Acumulador (acc)
    Valor Atual (cur)
    Index Atual (idx)
    Array original (src)

  O valor de retorno da sua função reducer é atribuída ao acumulador. 
  O acumulador, com seu valor atualizado, é repassado para cada 
  iteração subsequente pelo array, que por fim, se tornará o valor 
  resultante, único, final.
*/