import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';

const app = shallow(<App />);

describe('App component tests', () => {
  const id = 1;

  it('Renders App component correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('Initialized the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('Clicking the `add gift` button', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    })

    afterEach(() => {
      app.setState({ gifts: [] })
    });

    it('Adds new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('Adds a new gift to rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    })

    it('Creates a gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    })
  })

  describe('User wants to remove a gift', () => {
    beforeEach(() => {
      app.instance().removeGift(id);
    })

    it('Removes a gift from state', () => {
      expect(app.state().gifts).toEqual([]);
    })
  })
})
