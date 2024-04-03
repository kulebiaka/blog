import { mockReactions } from "./mockReactions"

export const getPostById = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return response.json()
}
export const getPosts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await response.json()
  return addMockData(posts, mockReactions)
}

const addMockData = (arr: Array<any>, mockData: Array<any>) => {
  const res = new Array(arr.length)
  for(let i = 0; i<arr.length; i++){
    res[i] = {
      ...arr[i],
      ...mockData[i]
    }
  }
  return res
}
