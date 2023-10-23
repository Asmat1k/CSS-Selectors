import { Level } from "../../files/types/types";
import { changeProgressBar, updateList } from "../change-level/change-level";
import { getLocalStorage } from "../../init-game";

// Смена информации о таске
export function setCurTask(level: Level): void {
  const taskArea: HTMLElement = document.querySelector('.nav-task')!;
  const number: HTMLElement = document.querySelector('.nav-cur-lvl')!;
  const title: HTMLElement = taskArea.querySelector('.nav__title')!;
  const check: HTMLElement = document.querySelector('.nav-check')!;
  const mainTitle: HTMLElement = document.querySelector('.game__title-main')!;
  const subtitle: HTMLElement = taskArea.querySelector('.nav__subtitle')!;
  const id: HTMLElement = taskArea.querySelector('.id')!;
  const task: HTMLElement = taskArea.querySelector('.nav-task-text')!;
  const example: HTMLElement = taskArea.querySelector('.nav-task-example')!;
  const layer: HTMLInputElement = document.querySelector('.editor-layer')!;

  mainTitle.innerHTML = level.toDo;
  number.innerHTML = (getLocalStorage() + 1).toString();
  title.innerHTML = level.helpText.title;
  // Если левел был проеден или была использована помощь
  if (level.status || level.helpUsed) {
    if(level.helpUsed) check.classList.add('help-done');
    if(level.status) check.classList.add('done');
  } else {
    // Снимаем классы если есть и задание не сдано
    if(check.classList.contains('help-done')) check.classList.remove('help-done');
    if(check.classList.contains('done')) check.classList.remove('done');
  }
  layer.innerHTML = '';
  subtitle.innerHTML = level.helpText.subtitle;
  id.innerHTML = level.helpText.id;
  task.innerHTML = level.helpText.task;
  example.innerHTML = level.helpText.example;
  changeProgressBar();
  updateList();
}

// Установка html
export function setCurHtml(level: Level): void {
  const htmlArea: HTMLElement = document.querySelector('.html-text')!;
  const table: HTMLElement = htmlArea.querySelector('.table-code')!;
  table.innerHTML = level.htmlCode;
}

// Обеовление столов
export function setCurTable(level: Level): void {
  const table: HTMLElement = document.querySelector('.table')!;
  table.innerHTML = level.tableComponents;
}