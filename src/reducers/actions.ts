import { Action, AnyAction } from 'redux'
import { ISelectBlock } from '.'
import * as types from './types'
import { BLOCK_COORDS, NUMBERS } from '../typings'

export const createGrid = (): Action => ({ type: types.CREATE_GRID })

export const selectBlock = (coords: BLOCK_COORDS): ISelectBlock => {
  return {
    type: types.SELECT_BLOCK,
    payload: coords,
  }
}

export const fillBlock = (value: NUMBERS, coords: BLOCK_COORDS): AnyAction => ({
  type: types.FILL_BLOCK,
  payload: {
    coords,
    value,
  },
})
