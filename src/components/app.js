import React, { Component } from 'react';
import Header from './header';
import UserList from './user_list';

export default class App extends Component {
  render() {
    return (
      <div>
    <UserList />
      </div>
    );
  }
}
