import '../scss/style.scss';
import * as myFunctions from './files/functions';
import * as menuFunctions from './functions/menu/burger';
import { initGame } from './init-game';
import { changeLevel } from './functions/change-level/change-level';
import { generateLvlList } from './functions/change-level/generate-level';
import { knowAnswer } from './functions/help-block/know-answer';
import { checkCurRes } from './functions/game-process/check-level';
import { colorInput } from './functions/game-process/color-input';
import { resetGame } from './functions/game-process/reset';

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
myFunctions.isWebp();
// Модуль для работы с меню-бургер
menuFunctions.menuInit();

// Генерация уровней в списке из обьекта
generateLvlList();
// Инициализация игры
initGame();
// Печать ответа
knowAnswer();
// Смена уровня
changeLevel();
// Проверка результатов
checkCurRes();
// Окраска ввода
colorInput()
// Ресет игры
resetGame();
