import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet component', () => {
  const props = { balance: 20 };
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
  });
});
