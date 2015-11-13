let state = 5

let actions = {
  up: () => state = state + 1,
  down: () => state = state + 1
}

view Main {
  <h1>count is {state}</h1>
  <button onClick={actions.up}>up</button>
  <button onClick={actions.down}>down</button>

  $ = {
    padding: 20
  }
}