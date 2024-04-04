import { randomNumber } from "../lib/randomNumber"

export function createArrayMockReactions(length: number){
  const res = new Array(length)

  for(let i = 0; i < length; i++){
    res[i] = {
      likeNumber: randomNumber(0,50),
      dislikeNumber: randomNumber(0,50),
    }
  }
  return res
}
