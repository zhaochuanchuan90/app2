
import React, { Component } from 'react';
import AppNavigator from './AppNavigator'

export default class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppNavigator />
    )
  }
}