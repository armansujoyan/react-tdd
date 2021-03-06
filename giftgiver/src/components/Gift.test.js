import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift component tests', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove }
  const gift = shallow(<Gift {...props} />);

  it('Renders properly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('Initializes a person and present in `state`', () => {
    expect(gift.state()).toEqual({ person: '', present: ''});
  })

  describe('When typing in person input', () => {
    const person = 'Sister';

    beforeEach(() => {
      gift.find('.input-person').simulate('change', { target: { value: person}});
    })

    it('Updates the person in state', () => {
      expect(gift.state().person).toEqual(person);
    })
  })

  describe('When typing in present input', () => {
    const present = 'Book';

    beforeEach(() => {
      gift.find('.input-present').simulate('change', { target: { value: present }});
    })

    it('Updates the presents in `state`', () => {
      expect(gift.state().present).toEqual(present);
    })
  })

  describe('When clicking the remove button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    })

    it('Calls the remove gift callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    })
  })
});