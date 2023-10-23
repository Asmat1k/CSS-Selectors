import { lineChange, menuOpen } from "../menu/burger";

// Вывод окна об окончании
export function endMessageOpen(): void {
  const message: HTMLElement = document.querySelector('.game-end')!;
  const burgerLine: HTMLElement = document.querySelector('.burger-line')!;
  message.classList.add('end-active');
  if (!burgerLine.classList.contains('active')) lineChange();
  menuOpen();
}

// Закрытие окна
export function endMessageClose(): void {
  const message: HTMLElement = document.querySelector('.game-end')!;
  if (message.classList.contains('end-active')) message.classList.remove('end-active');
}