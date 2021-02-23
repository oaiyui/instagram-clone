import { BaseThunkType, InferActions } from './store';
import {InstState, PostType} from './../types/types'
import {instApi} from '../api/inst-api'


const initialState: InstState = {
  authId: 4,
  isInitializing: false,
  posts: [],
}

const instReducer = (state: InstState = initialState, action: Actions): InstState => {

  switch (action.type) {

    case 'SET_IS_INITIALIZING': {
      return {...state, isInitializing: action.isInitializing}
    }

    case 'SET_INIT_POSTS': {
      return {...state, posts: action.posts}
    }

    default:
      return state
  }
}

export const actions = {
  setIsInitializing: (isInitializing: boolean) => ({type: 'SET_IS_INITIALIZING', isInitializing} as const),
  setPosts: (posts: PostType[]) => ({type: 'SET_INIT_POSTS', posts} as const),
}



export const addComment = (body: string, postId: number): ThunkType => async (dispatch, getState) => {
  const authorId = getState().inst.authId
  await instApi.addComment(authorId, body, postId)
}
export const initRequestAndSetPosts = (): ThunkType => async (dispatch) => {
  dispatch(actions.setIsInitializing(true))
  const data = await instApi.requestPosts()
  dispatch(actions.setIsInitializing(false))
  dispatch(actions.setPosts(data))
}

export default instReducer



// types
type Actions = InferActions<typeof actions>
type ThunkType = BaseThunkType<Actions>