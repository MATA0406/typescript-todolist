import React, { Component } from 'react';
import TodoListContainer from './container/TodoListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
