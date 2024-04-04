export const postApi = {
  getPostById: async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.json()
  },
  getPosts: async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await response.json()
    return posts
  }, 
  getPostsByFilter: async (filter: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/?title=${filter}`)
    const posts = await response.json()
    return posts
  }

}