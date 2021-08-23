import { AnyAction } from 'redux'
import { IReducer, ISelectBlock } from './interfaces'
import {
  createFullGrid,
  removenNumbers,
  copyGrid,
  compareArrays,
} from '../utils'
import * as types from './types'
import { GRID } from '../typings'

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

    case types.FILL_BLOCK:
      if (state.workingGrid && state.solvedGrid) {
        // if user guess is incorrect, tell them
        if (
          state.solvedGrid[action.payload.coords[0]][
            action.payload.coords[1]
          ] !== action.payload.value
        ) {
          alert('Incorrect!')
          return state
        }
        // if user guess is correct, update the grid
        state.workingGrid[action.payload.coords[0]][action.payload.coords[1]] =
          action.payload.value
        if (compareArrays(state.workingGrid, state.solvedGrid)) {
          alert('You completed the grid!')
        }
        return {
          ...state,
          workingGrid: [...state.workingGrid] as GRID,
        }
      }
      return state

    default:
      return state
  }
}

export default reducer
