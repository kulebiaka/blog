export const mockReactions = createMockReactions(100)

export function createMockReactions(num: number){
  const res = new Array(num)

  for(let i = 0; i < num; i++){
    res[i] = {
      likeNumber: randomNumber(0,50),
      dislikeNumber: randomNumber(0,50)
    }
  }
  return res
}

function randomNumber(min: number, max: number){
 return Math.floor(Math.random() * (+max + 1 - +min)) + +min
}