/*
  Implemente um algoritmo para determinar se uma string 
  não tem caracteres repetidos. 
*/

let lyrics = prompt('Digite uma palavra!');

function lettersNotRepeated() {
  let findRepeatedLetter = new Set();
  console.log(findRepeatedLetter)

  for (let char of lyrics){
    if(findRepeatedLetter.has(char)) {
      alert('A palavra escolhida possui letras repetidas')
      console.log('A palavra escolhida possui letras repetidas')
      return false;
    } 
    findRepeatedLetter.add(char)
  }
  alert('A palavra escolhida não possui letras repetidas')
  console.log('A palavra escolhida não possui letras repetidas')
  return true;
}

lettersNotRepeated(lyrics)

/* 
  Conjunto (Set): 
    Em JavaScript, o Set é uma estrutura que armazena valores únicos. 
    Usamos ele para verificar se um caractere já foi encontrado na string.
  
  Iteração: 
    Usamos um loop for...of para percorrer cada caractere da string.
  
  Verificação de Repetição: 
    Se o caractere já estiver no conjunto, o algoritmo retorna false, 
    indicando que há caracteres repetidos.

  Adição ao Conjunto: 
    Se o caractere ainda não estiver no conjunto, ele é adicionado, 
    e a verificação continua.

  Resultado Final: 
    Se o loop termina sem encontrar caracteres repetidos, 
    a função retorna true.
*/