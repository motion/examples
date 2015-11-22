import { Map, is } from 'immutable'

Flint.decorateViews(imm)

view Main {
  let data = Map({ a: 1 })

  // will change
  on.delay(1000, () => {
    data = data.set('a', 2)
  })

  // wont change
  on.delay(2000, () => {
    data = data.set('a', 2)
  })

  console.log(view.state)

  <Child data={data} />
}

view Child {
  on.change(() => {
    console.log('changed')
  })

  <h2>{view.props.data.get('a')}</h2>
}



// decorate

function imm(view) {
  view.shouldUpdate(immUpdate)
}

function immUpdate(cur, next) {
  if (cur.data) {
    const same = is(cur.data, next.data)
    return !same
  }

  return true
}