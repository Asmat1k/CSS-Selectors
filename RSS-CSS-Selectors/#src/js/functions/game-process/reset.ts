import { setLocalStorage } from "../../files/functions";
import { initGame } from "../../init-game";
import { updateList } from "../change-level/change-level";
import { LEVELS } from "../level-storage/arr-level";
import { resetLevelsDoneCount } from "./check-level";
import { endMessageClose } from "./end-game";

export function resetGame() {
  const button: HTMLElement = document.querySelector('.header-nav__wrapper')!;
  button?.addEventListener(('click'), () => {
    setLocalStorage('level', '1');
    // Если открыто сообщение о победе
    endMessageClose();
    // Обнуление обьекта
    resetLevelsObj();
    // Снятие галочек
    resetLevelCheck();
    // Обновление листа до текущего
    // ? Нужно ли обнулять и сохранять на текущем левеле?
    updateList(true);
    // Сброс счетчика пройденых уровней
    resetLevelsDoneCount();

    initGame();
  });
}

// Снятие активных галочек
function resetLevelCheck() {
  const checks: NodeListOf<HTMLElement> = document.querySelectorAll('.done')!;
  const checksHelp: NodeListOf<HTMLElement> = document.querySelectorAll('.help-done')!;
  if (checks.length > 0) {
    checks.forEach((check) => {
      check.classList.remove('done');
    })
  }
  if (checksHelp.length > 0) {
    checksHelp.forEach((check) => {
      check.classList.remove('help-done');
    })
  }
}

// Обнуление обьекта
function resetLevelsObj() {
  LEVELS.forEach((level) => {
    level.status = false;
    level.helpUsed = false;
  })
}