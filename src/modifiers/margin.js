import { __toPx } from "../utils/units";

export class _MarginModifier {
  value;

  #MARGIN_PROP   = 'margin';

  constructor(
    value,
  ) {
    this.value = __toPx(value);
  }
  
  apply(el) {
    el.style[this.#MARGIN_PROP]   = this.value;
  }
} 
