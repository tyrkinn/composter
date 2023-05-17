import { __el } from "../utils"

export const Block = (modifier, children) => {
  const el = __el('div', modifier);
  children.forEach(child => {
    el.appendChild(child)
  })
  return el;
}
