import React from 'react';
import { mount, shallow } from 'enzyme';
import { Loot } from './Loot';

describe('Loot component', () => {
  const mockFetchBitcoin = jest.fn();
  const props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchBitcoin };
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
});
