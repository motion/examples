import Dog from './dog'

view Main {
  let d = new Dog()

  function wakeUp() {
    d.wakeUp()
    /* if we change state in an external module we need to tell Flint */
    /* in general we support keeping state within views
       and preferring pure functions over classes, but this works too */
    view.update()
  }

  <h1>Hello world!</h1>
  <h2>{d.woof}</h2>
  <button onClick={wakeUp}>wake up</button>

  $ = {
    color: 'deepskyblue',
    padding: 20
  }
}