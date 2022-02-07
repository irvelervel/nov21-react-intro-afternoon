// you can create a React Component as a function or as a CLASS
// functional components are perfect for simple things
// their features are mostly related to props, they can receive props

import { Component } from 'react'

// class components are a little more tedious to write, but they can receive superpowers:
// 1) a state
// 2) can access LIFECYCLE METHODS

// you can think of a class like a factory, or like a blueprint
// classes in general can be EXTENDED
// when you extend a class, you inherit inner capabilities

class ClassComponent extends Component {
  state = {
    counter: 0, // <-- 0 is called the INITIAL VALUE of the state
  }
  // the state object is a Class Component is a read-only entity
  // that will remember its values over time

  render() {
    // render MUST BE PRESENT IN EVERY CLASS COMPONENT
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              // whatever you put here will be MERGED into the current state object
              counter: this.state.counter + 1,
            })
          }
        >
          +
        </button>
        <div>{this.state.counter}</div>
        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter - 1,
            })
          }
        >
          -
        </button>
      </div>
    )
  }
}

export default ClassComponent

// ok but... why do we need a class?
