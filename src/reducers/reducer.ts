import { AnyAction } from 'redux'
import { IReducer, ISelectBlock } from './interfaces'
import { createFullGrid, removenNumbers, copyGrid } from '../utils'
import * as types from './types'

const initialState: IReducer = {}

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid()
      const gridCopy = copyGrid(solvedGrid)
      const challengeGrid = removenNumbers(gridCopy)
      const workingGrid = copyGrid(challengeGrid)
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
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
