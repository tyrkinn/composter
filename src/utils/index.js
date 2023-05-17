export const __el = (tagName, modifier) => {
  const el = document.createElement(tagName);
  modifier.apply(el);
  return el
}

export const __setText = (element, text) => {
  element.textContent = text;
  return element;
}

export const __setClassName = (element, className) => {
  if (Array.isArray(className)) {
    element.classList.add(...className);
  } else {
    element.className = className;
  }
  return element;
}
