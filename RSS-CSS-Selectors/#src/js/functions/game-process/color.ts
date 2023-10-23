import hljs from 'highlight.js';

export function colorBlock(className: string) {
  document.querySelectorAll(className).forEach((el: Element) => {
    el instanceof HTMLElement && hljs.highlightElement(el);
  });
}