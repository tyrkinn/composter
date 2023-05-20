import { Modifier } from "./utils/modifier";
import { Block } from "./elements/block";
import { Text } from "./elements/text";
import { TextButton } from "./elements/text-button";
import { observe } from "@zeppet/core";
import { use } from "@zeppet/core";
import { bindFieldToObs } from "@zeppet/actions";


const nameObs = observe("Nikita")

const btn = TextButton(
  'Click me',
  () => nameObs.mutate((prev) => prev + '!'),
  new Modifier()
    .padding(10)
    .size(100, 50) 
)

const BindedText = use(
  Text(
    nameObs.getValue(),
    new Modifier().padding(15)
  ),
  bindFieldToObs('textContent', nameObs)
)

const view = Block(
  new Modifier()
    .size(200, 200)
    .margin(10)
    .border(10),
  [
    BindedText,
    btn
  ]
)


document.body.append(
  view,
);
