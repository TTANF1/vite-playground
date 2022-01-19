function addProp(param: string): ClassDecorator {
  return (constructor: Function) => {
    constructor.prototype.job = param
  }
}
function addFunc(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    descriptor.writable = false
  }
}

// @addProp('fe+be')
class Puu {
  // job: string
  // constructor(public name: string) {}
  @addFunc()
  originMethod() {
    console.log("I'm Original!")
  }
}

// let p = new Puu('林不渡')
// console.log(p.job)

let p = new Puu()
