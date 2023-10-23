import hljs from 'highlight.js';
import { colorBlock } from './color';

// Цветной ввод текста
export function colorInput() {
  const layer: HTMLElement = document.querySelector('.editor-layer')!;
  const input: HTMLInputElement = document.querySelector('.editor__input')!;

  input.oninput = (): void => {
    layer.innerHTML = input.value;
    colorBlock('.editor-layer');
  };
}
