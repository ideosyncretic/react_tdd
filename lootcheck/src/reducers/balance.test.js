import balanceReducer from './balance'
import * as types from '../actions/types'

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance = 10

    // balanceReducer is a pure function
    expect(
      balanceReducer(undefined, {
        type: types.SET_BALANCE,
        balance,
      }),
    ).toEqual(balance)
  })

  it('deposits into the balance', () => {
    const deposit = 10
    const initialState = 5
    expect(
      balanceReducer(initialState, {
        type: types.DEPOSIT,
        deposit,
      }),
    ).toEqual(initialState + deposit)
  })

  it('withdraws from the balance', () => {
    const withdrawal = 10
    const initialState = 20
    expect(
      balanceReducer(initialState, {
        type: types.WITHDRAW,
        withdrawal,
      }),
    ).toEqual(initialState - withdrawal)
  })
})
