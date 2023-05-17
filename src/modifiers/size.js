import { __toPx } from "../utils/units";

export class _SizeModifier {
  width;
  height;

  #WIDTH_PROP   = 'width';
  #HEIGHT_PROP   = 'height';

  constructor(
    width,
    height
  ) {
    this.width = __toPx(width);
    this.height = __toPx(height);
  }
  
  apply(el) {
    el.style[this.#WIDTH_PROP]   = this.width;
    el.style[this.#HEIGHT_PROP]  = this.height;
  }
} 
