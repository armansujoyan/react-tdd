import * as constants from '../actions/constants';

const balance = (state = 0, action) => {
  const { type } = action;
  switch(type) {
    case constants.SET_BALANCE:
      return action.balance;
    case constants.DEPOSIT:
      return action.deposit + state;
    case constants.WITHDRAW:
      return state - action.withdraw;
    default:
      return state;
  }
};

export default balance;