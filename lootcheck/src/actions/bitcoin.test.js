import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './bitcoin';

const createStore = configureMockStore([thunk]);
const store = createStore({ bitcoin: {} });

fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json',
  { body: { bpi: 'bitcoin price index'}});

describe('Fetched bitcoin value', () => {
  it('dispatch of fetch gets bitcoin value', () => {
    const expectedActions = [{ type: FETCH_BITCOIN, bitcoin: { bpi: 'bitcoin price index'}}];

    return store.dispatch(fetchBitcoin())
      .then(res => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  })
})
