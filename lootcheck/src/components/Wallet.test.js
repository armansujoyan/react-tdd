import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet component', () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = {
    balance: 20,
    deposit: mockDeposit,
    withdraw: mockWithdraw
  };
  const wallet = shallow(<Wallet {...props}/>);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('displays balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20');
  });

  it('renders the input to deposit or withdraw', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  })

  describe('when the user types into the wallet input', () => {
    const userBalance = '21';

    beforeEach(() => {
      wallet.find('.input-wallet').simulate('change', { target: { value: userBalance }});
    });

    it('updates the local wallet balance in the `state` and converts to number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe('user wants to make a deposit', () => {
      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click');
      })

      it('dispatches a deposit action with local balance', () => {
        expect(mockDeposit).toBeCalledWith(parseInt(userBalance, 10));
      })
    })

    describe('user wants to make a withdraw', () => {
      beforeEach(() => {
        wallet.find('.btn-withdraw').simulate('click');
      })

      it('dispatches a withdraw action with local withdraw', () => {
        expect(mockWithdraw).toBeCalledWith(parseInt(userBalance, 10));
      })
    })
  });
});
