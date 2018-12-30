import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Wallet extends Component {
  render() {
    return (
      <div>
        <h2 className='balance'>Wallet Balance: {this.props.balance}</h2>
      </div>
    )
  }
}

export default connect(state => ({ balance: state }), null)(Wallet);
