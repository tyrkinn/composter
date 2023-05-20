import { __el, __setText } from "../utils"

export const TextButton = (content, onclick, modifier) => {
  const el = __setText(__el('button', modifier), content);
  el.addEventListener('click', onclick);
  return el;
}
