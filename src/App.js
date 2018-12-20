import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Board from './board/components';

import reducer from './reducer';
import defaultState from './defaultState';


const store = createStore(reducer, defaultState)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Board />
        </div>
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
