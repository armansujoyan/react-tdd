import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('Balance reducer', () => {
  it('can set a balance', () => {
    const balance = 10;

    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
      .toEqual(balance);
  });

  it('deposits amount to balance', () => {
    const deposit = 10;
    const initialState = 3;

    expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit }))
      .toEqual(13);
  })

  it('withdraws amount from balance', () => {
    const withdraw = 5;
    const initialState = 10;

    expect(balanceReducer(initialState, { type: constants.WITHDRAW, withdraw}))
      .toEqual(5);
  })
})
