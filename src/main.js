import { Block } from "./elements/block";
import { Text } from "./elements/text";
import { Modifier } from "./utils/modifier";

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
