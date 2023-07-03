import { LEVELS } from "../level-storage/arr-level";
import { currentLevel, markLevel, nextLevel } from "../change-level/change-level";

export let levelsDone = 0;

// Проверка результатов
export function checkCurRes(): void {
  const attempt: HTMLInputElement = document.querySelector('.editor__input')!;
  inputAnimate(attempt);
  keyboardCheck(attempt);
  buttonCheck(attempt);
}

// Проверка на нажатие на клавишу
function keyboardCheck(input: HTMLInputElement) {
  const editorArea: HTMLElement = document.querySelector('.game-editor')!;
  document.addEventListener( 'keydown', (event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      inputValidate(input, editorArea);
    }
  });
}

// Проверка на нажатие на экране
function buttonCheck(input: HTMLInputElement): void {
  const editorArea: HTMLElement = document.querySelector('.game-editor')!;
  const button: HTMLElement = document.querySelector('.editor-enter')!;
  button.addEventListener('click', () => {
    inputValidate(input, editorArea);
  });
}

// Отыграть анимацию
export function playAnimation(): void {
  const amimatedItem: NodeListOf<HTMLElement> = document.querySelectorAll('.animated');
  amimatedItem.forEach((item) => {
    item.classList.add('vanish');
  })
}

// Проверка инпут поля
function inputValidate(input: HTMLInputElement, area: HTMLElement) {
  // Убираем пробелы (replaceAll еслинт не пропускает почему-то)
  let attempt = input.value;
  for(let i = 0; i < attempt.length; i += 1) {
    if (attempt[i] === ' ') {
      attempt = attempt.replace(' ', '');
    }
  }
  // Проверка
  if (LEVELS[currentLevel - 1].answer.split('|').includes(attempt)) {
    levelsDone += 1;
    // Анимация на маркировку
    markLevel(currentLevel - 1);
    // Анимация на стол
    playAnimation();
    // время на анимацию
    setTimeout(() => nextLevel(), 2000) 
  } else {
    area.classList.add('shake');
    setTimeout(function() {
      area.classList.remove('shake')
    }, 500);
  }
}

// Анимация ввода
function inputAnimate(attempt: HTMLInputElement) {
  attempt.addEventListener('input', () => {
    if (attempt.value.length > 0) {
      attempt.classList.remove('blink')
    } else {
      attempt.classList.add('blink')
    }
  });
}