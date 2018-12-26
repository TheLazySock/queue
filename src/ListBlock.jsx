import React, { Component } from 'react';
import './App.css';

class ListBlock extends Component {
  render() {
    return (
      <div className="listBlock">
        <div className="listBlockLeft">
            {this.props.element.id}
        </div>
        <div className="listBlockRight">
            {this.props.element.value} 
        </div>
      </div>
    );
  }
}

export default ListBlock;
