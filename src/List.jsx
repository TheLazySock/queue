import React, { Component } from 'react';
import ListBlock from './ListBlock';
import './App.css';

class List extends Component {
  render() {
    return (
      <div className="list">
        <h2>
            Очередь
        </h2>
        {
            this.props.queue.map(el => <ListBlock element={el} key={el.id} />)
        }
      </div>
    );
  }
}

export default List;
