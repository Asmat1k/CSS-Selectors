import { LEVELS } from "../level-storage/arr-level";
import { initGame } from "../../init-game";
import { menuClose } from "../menu/burger";
import { setLocalStorage } from "../../files/functions";
import { endMessageOpen } from "../game-process/end-game";
import { levelsDone } from "../game-process/check-level";

export let currentLevel: number = getLocalStorageforCur();

// Из локалсторэдж
function getLocalStorageforCur(): number {
  let cur: string;
  if(localStorage.getItem('level')) {
    cur = localStorage.getItem('level')!;
  }
  return cur! ? +cur: 1;
}
window.addEventListener('load', getLocalStorageforCur);

// Отметка о прохождении
export function markLevel(num: number): void {
  // Анимация галочки прохождения
  const marks: NodeListOf<HTMLElement> = document.querySelectorAll('.lvl-check')!;
  const curMark: HTMLElement = document.querySelector('.nav-check')!;

  let className;
  // Если была использована помощь
  if (LEVELS[currentLevel - 1].helpUsed) {
    className = 'help-done';
    LEVELS[num].helpUsed = true;
  } else {
    className = 'done';
  }
  
  curMark.classList.add(className);
  marks[num].classList.add(className);
  LEVELS[num].status = true;
}

// Переход к следующему уровню при правильном ответе
export function nextLevel(): void {
  const items = document.querySelectorAll('.header-nav__item')!;
  const input: HTMLInputElement = document.querySelector('.editor__input')!;
  input.value = '';
  if (levelsDone === LEVELS.length) {
    endMessageOpen();
  } else {
    // Если максимальный уровень
    if (currentLevel === LEVELS.length) {
      currentLevel = 1;
      setLocalStorage('level', '1');
    } else if (currentLevel !== LEVELS.length) currentLevel += 1;

    deactivateItem();
    items[currentLevel - 1].classList.add('current');
    changeInfo();
  }
}

// Смена уровней
export function changeLevel(): void {
  changeOnArrow();
  changeOnList();
}

// Смена уровней по стрелкам
function changeOnArrow(): void {
  const right: HTMLElement  = document.querySelector('.arrow-right')!;
  const left: HTMLElement  = document.querySelector('.arrow-left')!;
  // на право
  right?.addEventListener('click', (): void => {
    // проверка на максимум
    if (currentLevel < LEVELS.length) {
      currentLevel += 1;
    }
    updateList();
    changeInfo();
  })
  // на лево
  left?.addEventListener('click', (): void => {
    // проверка на минимум
    if (currentLevel > 1) {
      currentLevel -= 1;
    }
    updateList();
    changeInfo();
  })
}

export function updateList(call?: boolean): void {
  const items = document.querySelectorAll('.header-nav__item')!;
  deactivateItem();
  // Если произошел ресет игры
  if (call) currentLevel = getLocalStorageforCur();
  items[currentLevel - 1].classList.add('current');
}

// Cмена уровней по клику в списке
function changeOnList(): void {
  const items = document.querySelectorAll('.header-nav__item')!;
  items.forEach((item) => {
    item.addEventListener('click', (): void => {
      const num: HTMLElement = item.querySelector('.lvl-number')!;
      deactivateItem();
      item.classList.add('current');
      currentLevel = +num.innerHTML;
      menuClose();
      changeInfo();
    }) 
  })
}

// Снятие активного уровня
function deactivateItem(): void {
  const items = document.querySelectorAll('.header-nav__item')!;
  items.forEach((item) => {
    if (item.classList.contains('current')) item.classList.remove('current');
  });
}

// смена отображения лвла
function changeInfo(): void {
  const current: HTMLElement = document.querySelector('.nav-cur-lvl')!;
  current.innerHTML = `${currentLevel}`;
  changeProgressBar();

  setLocalStorage('level', currentLevel.toString());

  initGame();
}

// смена позиции прогресс бара
export function changeProgressBar(): void {
  const progressPoint: HTMLElement = document.querySelector('.nav-progress-bar')!;
  progressPoint.style.width = `${currentLevel * 10}%`;
}
