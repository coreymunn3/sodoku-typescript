import { GRID, BLOCK_COORDS } from '../typings'
import { Action } from 'redux'
import * as types from './types'

// for reducer state
export interface IReducer {
  challengeGrid?: GRID
  solvedGrid?: GRID
  workingGrid?: GRID
  selectedBlock?: BLOCK_COORDS
}

// action interfaces
export interface ISelectBlock extends Action {
  type: string
  payload: BLOCK_COORDS
}
