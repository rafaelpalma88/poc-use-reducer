import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface Person {
  name: string
  age: number
}

export const personReducer = (state: Person, action: any): any => {
  switch (action.type) {
    case ActionTypes.INCREMENT_AGE: {
      return produce(state, draft => {
        draft.age = state.age + 1
      })
    }
    case ActionTypes.CHANGE_NAME: {
      return {
        name: 'Taylor',
        age: state.age
      };
    }
    default:
      return state
  }
}




