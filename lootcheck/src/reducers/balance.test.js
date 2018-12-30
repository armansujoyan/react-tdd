import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('Balance reducer', () => {
  it('can set a balance', () => {
    const balance = 10;

    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
      .toEqual(balance);
  })
})
