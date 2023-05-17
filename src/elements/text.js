import { __el, __setText } from "../utils"

export const Text = (content, modifier) => {
  return __setText(
    __el('p', modifier),
    content
  )
}
