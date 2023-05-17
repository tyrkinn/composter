import { __toPx } from "../utils/units";


export class _BorderModifier {
  size;
  color;
  radius;

  #SIZE_PROP   = 'border-width';
  #COLOR_PROP  = 'border-color';
  #RADIUS_PROP = 'border-radius';
  #STYLE_PROP  = 'border-style';

  constructor(
    size,
    color  = 'black',
    radius = 0,
    style  = 'solid'
  ) {
    this.size   = __toPx(size);
    this.radius = __toPx(radius);
    this.color  = color;
    this.style  = style;
  }
  
  apply(el) {
    el.style[this.#SIZE_PROP]   = this.size;
    el.style[this.#COLOR_PROP]  = this.color;
    el.style[this.#RADIUS_PROP] = this.radius;
    el.style[this.#STYLE_PROP] = this.style;
  }
} 
