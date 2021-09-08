import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { createGrid } from '../../reducers'
import { Button } from '../../components'

const NewGame: FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>()

  const createNewGrid = useCallback(() => {
    if (window.confirm('Are you sure you want to start a new game?')) {
      dispatch(createGrid())
    }
  }, [dispatch, createGrid])

  return <Button onClick={createNewGrid}>New Game</Button>
}

export default NewGame
