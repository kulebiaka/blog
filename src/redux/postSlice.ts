import { AppDispatch, RootState } from '.';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { postApi } from '../api';
import { createArrayMockReactions } from '../api/mockData';

const initialState = {
  posts: [] as Array<Post>,
  ratings: createArrayMockReactions(100),
  isPending: false
}

export type Post = {
  title: string
  body: string
  id: string
  userId?: string,
  imgUrl?: string
}
export type Rating = {
  likeNumber: number,
  dislikeNumber: number
  reaction?: 'like' | 'dislike'
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Array<Post>>) {
      state.posts = action.payload
    },
    setRatings(state, action: PayloadAction<Array<Rating>>) {
      state.ratings = action.payload
    },
    likePost(state, action: PayloadAction<string>) {
      let post = state.ratings[+action.payload - 1]
      if (post.reaction == undefined) {
        post.reaction = 'like'
        post.likeNumber += 1
      } else if (post.reaction == 'dislike') {
        post.reaction = 'like'
        post.likeNumber += 1
        post.dislikeNumber -= 1
      } else {
        post.reaction = undefined
        post.likeNumber -= 1
      }
    },

    dislikePost(state, action: PayloadAction<string>) {
      let post = state.ratings[+action.payload - 1]
      if (post.reaction == undefined) {
        post.reaction = 'dislike'
        post.dislikeNumber += 1
      } else if (post.reaction == 'like') {
        post.reaction = 'dislike'
        post.dislikeNumber += 1
        post.likeNumber -= 1
      }
      else {
        post.reaction = undefined
        post.dislikeNumber -= 1
      }
    },

    setIsPending(state, action: PayloadAction<boolean>) {
      state.isPending = action.payload
    }

  }
})

export const getPosts = () => async (dispatch: AppDispatch) => {
  dispatch(setIsPending(true))
  const posts = await postApi.getPosts()
  dispatch(setPosts(posts))
  dispatch(setIsPending(false))
}

export const getPostById = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(setIsPending(true))
  const post = await postApi.getPostById(id)
  dispatch(setIsPending(false))
  return post
}

export const getPostsByFilter = (filter: string) => async (dispatch: AppDispatch) => {
  dispatch(setIsPending(true))
  const posts = await postApi.getPostsByFilter(filter)
  dispatch(setPosts(posts))
  dispatch(setIsPending(false))
}

export const { setPosts, likePost, dislikePost, setRatings, setIsPending } = postSlice.actions
export default postSlice.reducer