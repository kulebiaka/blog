export function randomNumber(min: number, max: number){
  return Math.floor(Math.random() * (+max + 1 - +min)) + +min
 }