import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
  }

  state = {
    currentId: 0,
    queue: [],
    peek: null,
  }

  enqueueHandler = () => {
    const input = this.contentRef.current;
    const currentQueue = this.state.queue;
    const element = {
      id: this.state.currentId,
      value: input.value,
    }
    this.setState(state => ({
      queue: [...currentQueue, element],
      currentId: state.currentId + 1,
      peek: null,
    }))
  }

  dequeueHandler = () => {
    const currenQueue = this.state.queue;
    if (currenQueue.length === 1) {
      currenQueue.shift();
      this.setState({
        queue: [...currenQueue],
        currentId: 0,
        peek: null,
      })
    } else {
      currenQueue.shift();
      this.setState({
        queue: [...currenQueue],
        peek: null,
      })
    }
  }

  peekHandler = () => {
    const peek = this.state.queue[0];

    this.setState({
      peek,
    })
  }

  clearHandler = () => {
    this.setState({
      queue: [],
      currentId: 0,
      peek: null,
    });
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          Очередь на базе связного списка.
        </header>
        <main className="appWrapper">
          <section className="listControllers">
            <h2>Контроллеры</h2>
            <div className="controllersGroup">
              <div className="buttonsGroup">
                <button
                  onClick={this.enqueueHandler}
                >
                  Enqueue
                </button>
                <button
                  onClick={this.dequeueHandler}
                >
                  Dequeue
                </button>
                <button
                  onClick={this.peekHandler}
                >
                  Peek
                </button>
                <button
                  onClick={this.clearHandler}
                >
                  Clear
                </button>
              </div>
              <div className="inputsGroup">
                <input type="text" name="content" placeholder="content" ref={this.contentRef} />
              </div>
            </div>
          </section>
          <div className="mainContent">
            <List queue={this.state.queue} />
            {
              this.state.peek
              &&
                <div className="peek">
                  <h2>Верхний элемент</h2>
                  <div className="listBlock">
                    <div className="listBlockLeft">
                        {this.state.peek.id}
                    </div>
                    <div className="listBlockRight">
                        {this.state.peek.value} 
                    </div>
                  </div>
                </div>
            }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
