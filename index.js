const React  = require('react')
const Redux = require('redux')
const { render } = require('react-dom')

const reducer = require('./reducer')

const { Component }  = React
const { createStore } = Redux

const initialState = 0

const store = createStore(reducer, initialState)
const { getState, dispatch, subscribe } = store

class Counter extends Component {
  render () {
    const { name, increment, decrement } = this.props
    return (
      <div>
        <h1>Hey { name }</h1>
        <p> Value { getState().toString() } </p>
        <button onClick={ button(increment) }>add</button>
        <button onClick={ button(decrement) }>remove</button>
      </div>
    )
    function button (type) {
      return () =>
      dispatch({
        type
      })
    }
  }
}

const App = () => {
render(<Counter name='Chris'
                increment='INCREMENT'
                decrement='DECREMENT'
  />, document.querySelector('main'))
}

App()
subscribe(App)
