# Composter

Take on JetPack Compose-like views in JavaScript 

## Code samples

Simple example of usage

```javascript
const view = Block(
  new Modifier()
    .size(200, 200)
    .margin(10)
    .border(10),
  [
    Text(
      'Composter.js',
      new Modifier().padding(15)
    )
  ]
  
)


document.body.append(
  view
);
```

TODO:
- [ ] Get rid of Reflection-style Modificator implementation
- [ ] Make this into library
- [ ] Add more modificators and elements)
- [ ] Use tailwindcss instead of default styles

