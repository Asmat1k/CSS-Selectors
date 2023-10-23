import { currentLevel } from "../change-level/change-level"
import { colorBlock } from "../game-process/color";
import { LEVELS } from "../level-storage/arr-level"

// Печать ответа
export function knowAnswer(): void {
  const input: HTMLInputElement = document.querySelector('.editor__input')!;
  const layer: HTMLInputElement = document.querySelector('.editor-layer')!;
  const button: HTMLElement = document.querySelector('.answer')!;

  button.addEventListener(('click'), (): void => {
    button.blur();
    button.classList.add('game__button_close');

    LEVELS[currentLevel - 1].helpUsed = true;

    const answer: string = LEVELS[currentLevel - 1].type;
    const text: string = answer;

    let count: number = 0;
    let interval: ReturnType<typeof setInterval>;

    input.value = '';
    layer.innerHTML = '';

    interval = setInterval(() => {
      input.value += text[count];
      layer.innerHTML += text[count++];
      colorBlock('.editor-layer');
      if (count === answer.length) {
        button.classList.remove('game__button_close');
        clearInterval(interval);
      }
    }, 40);
  });

}