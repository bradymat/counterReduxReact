import { render } from 'react-dom'
import React, { Component } from 'react'
const redux = require('redux')
const reducer = require('./reducer')

const initialState = 0
const { createStore } = redux
const store = createStore(reducer, initialState)
const { getState, dispatch, subscribe } = store

class Counter extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const { props } = this
    return (
      <div>
      {console.log(typeof getState().toString())}
      <h1>Hey {props.name}</h1>
      <p> {getState().toString()} </p>
      <button onClick={props.onIncrement}> add </button>
      <button onClick={props.onDecrement}> remove </button>
      </div>
    )
  }

}
const App = () => {
render(<Counter name='Chris'
            onIncrement={() =>
                dispatch({
                  type: 'INCREMENT'
                  })
                }
                onDecrement={() =>
                  dispatch({
                    type: 'DECREMENT'
                  })
                }
  />, document.querySelector('main'))
}
App()
subscribe(App)
