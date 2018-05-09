import * as types from './types'

export const setBalance = balance => ({
  type: types.SET_BALANCE,
  balance,
})

export const deposit = deposit => ({
  type: types.DEPOSIT,
  deposit,
})

export const withdraw = withdrawal => ({
  type: types.WITHDRAW,
  withdrawal,
})
