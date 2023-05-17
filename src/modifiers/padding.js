import { __toPx } from "../utils/units";

export class _PaddingModifier {
  value;

  #PADDING_PROP   = 'padding';

  constructor(
    value,
  ) {
    this.value = __toPx(value);
  }
  
  apply(el) {
    el.style[this.#PADDING_PROP]   = this.value;
  }
} 
