import bitcoinReducer from './bitcoin';
import { FETCH_BITCOIN } from '../actions/constants';

describe('Bitcoin reducer tests', () => {
  const bitcoinData = { bpi: 'bitcoin price index' };

  it('fetches and saves a bitcoin data', () => {
    expect(bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData }))
      .toEqual(bitcoinData);
  });
})
