// import { type Person } from './reducer'

export enum ActionTypes {
  INCREMENT_AGE = 'INCREMENT_AGE',
  CHANGE_NAME = 'CHANGE_NAME'
}

export function incrementAgeAction (): any {
  return {
    type: ActionTypes.INCREMENT_AGE
  }
}

export function changeNameAction (): any {
  return {
    type: ActionTypes.CHANGE_NAME
  }
}
