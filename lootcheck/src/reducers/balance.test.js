import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('Balance reducer', () => {
  describe('When initializing', () => {
    const balance = 10;

    it('can set a balance', () => {
      expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
        .toEqual(balance);
    });

    describe('Re-init', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      })
    })
  })

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
