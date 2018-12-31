import React from 'react';
import { mount, shallow } from 'enzyme';
import { Loot } from './Loot';

describe('Loot component', () => {
  const mockFetchBitcoin = jest.fn();
  let props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchBitcoin };
  let loot = shallow(<Loot {...props} />);

  it('rendes properly', () => {
    expect(loot).toMatchSnapshot();
  });

  describe('When mounted', () => {
    beforeEach(() => {
      loot = mount(<Loot {...props}/>);
    })

    it('fetchBitcon method is dispatched', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    })
  });

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = {
        balance: 10,
        bitcoin: { bpi: { USD: { rate: '1,000'}}},
        fetchBitcoin: mockFetchBitcoin
      };
      loot = shallow(<Loot {...props} />);
    })

    it('displays correct bitcoin value', () => {
      expect(loot.find('h3').text()).toEqual('Bitcoin Balance: 0.01');
    });
  })
});
