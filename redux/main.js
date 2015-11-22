import { createStore } from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

let store = createStore(counter)
let run = type => store.dispatch({ type })

view Main {
  let count = 0
  
  store.subscribe(() => {
    count = store.getState()
  })
  
  <h1>count is {count}</h1>
  <button onClick={() => run('INCREMENT')}>up</button>
  <button onClick={() => run('DECREMENT')}>down</button>

  $ = {
    color: 'royalblue',
    padding: 20
  }
  
}