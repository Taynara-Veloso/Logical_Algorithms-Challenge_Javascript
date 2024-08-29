/*  
  compare dois arrays para ver quem dos alunos possui mais pontos
  Se a[i] > b[i] , então Alice recebe 1 ponto.
  Se a[i] < b[i] , então Bob recebe 1 ponto.
  Se a[i] = b[i] , então nenhuma pessoa recebe um ponto.
  Pontos de comparação são o total de pontos que uma pessoa ganhou.

  Dados a e b , determine seus respectivos pontos de comparação. 
*/

let a = [2,4,6];
let b = [1,5,6];

function compareArrayPoints(a, b) {
  let pointsAlice = 0;
  let pointsBob = 0;
  let points = []
  for(let i = 0; i < a.length; i++){
      if(a[i] > b[i]){
          pointsAlice += 1
      } else if(a[i] < b[i]){
          pointsBob += 1
      }
  }

  points.push(pointsAlice, pointsBob)
  return points
}

console.log(compareArrayPoints(a, b))