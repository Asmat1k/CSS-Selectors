import { setCurHtml, setCurTable, setCurTask } from "./functions/game-process/set-level";
import { LEVELS } from "./functions/level-storage/arr-level";
import { colorBlock } from "./functions/game-process/color";
import { generateLvlList } from "./functions/change-level/generate-level";
import * as menuFunctions from './functions/menu/burger';

// Инициализация игры
export function initGame(): void {
  let id: number = getLocalStorage();
  setCurTable(LEVELS[id]);
  setCurHtml(LEVELS[id]);
  setCurTask(LEVELS[id]);
  colorBlock('.html');
  // changeStyle();
}

// Из локал сторедж
export function getLocalStorage(): number {
  let cur: string;
  if(localStorage.getItem('level')) {
    cur = localStorage.getItem('level')!;
  }
  return cur! ? +cur - 1 : 0;
}
window.addEventListener('load', getLocalStorage);



