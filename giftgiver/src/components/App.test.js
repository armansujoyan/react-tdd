import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';

const app = shallow(<App />);

describe('App component tests', () => {
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
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    it('Adds a new gift to rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    })
  })
})
