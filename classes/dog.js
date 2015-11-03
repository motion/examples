class Dog {
  constructor() {
    this.woof = 'Im sleeping'
  }
  
  wakeUp() {
    this.woof = 'bark!'
  }
}

// put on window until we support imports
// https://github.com/flintjs/flint/issues/78
window.Dog = Dog