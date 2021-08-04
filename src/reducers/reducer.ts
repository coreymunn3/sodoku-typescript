import { AnyAction } from 'redux'
import { IReducer, ISelectBlock } from './interfaces'
import { createFullGrid } from '../utils'
import * as types from './types'

const initialState: IReducer = {}

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID:
      return {
        ...state,
        solvedGrid: createFullGrid(),
      }
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.payload,
      }
    default:
      return state
  }
}

export default reducer
