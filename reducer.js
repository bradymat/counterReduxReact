const clone = require('clone')
module.exports = (state, action) => {
  console.log(state);
  const newState = clone(state)
  const { type } = action
  switch (type) {
    case 'INCREMENT':
      return newState + 1
    case 'DECREMENT':
      return newState -1
    default:
      return newState
  }
}
