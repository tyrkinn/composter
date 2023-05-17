import { _PaddingModifier, _MarginModifier, _BorderModifier, _SizeModifier } from "../modifiers";

export class Modifier {

  static modifiersMap = {
    'padding': _PaddingModifier,
    'margin': _MarginModifier,
    'border': _BorderModifier,
    'size': _SizeModifier
  }

  static __registerModifier(name, modifier) {
    this.modifiersMap[name] = modifier;
  }

  modifiers = []

  constructor() {
    return new Proxy(this, {
      get(target, key, proxy) {
        if (key === 'apply') {
          return (el) => {
            target.modifiers.forEach(m => {
              m.apply(el)
            })
          }
        }
        
        if (!Object.keys(Modifier.modifiersMap).includes(key)) {
          throw new Error(`No such modifier exists '${key}'`)
        }
        
        return (...args) => {
          target.modifiers.push(
            Reflect.construct(Modifier.modifiersMap[key], args)
          )
          return proxy
        }
      },
    })
  }

  
  
}
