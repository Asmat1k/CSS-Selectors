//! TODO Добавить код рядом с элементом на который наводишься

export function changeStyle(): void {
  const editor: HTMLElement = document.querySelector('.table-code')!;
  const table: HTMLElement = document.querySelector('.table')!;
  const platesEd: NodeListOf<Element> = editor.querySelectorAll('.hljs-name')!;
  const platesRe: NodeListOf<Element> = table.querySelectorAll('plate')!;
  console.log(platesEd);
  platesRe.forEach((plate, index) => {
    changeCodeItem(plate, index);
    rechangeCodeItem(plate, index);
  })
  platesEd.forEach((plate, index) => {
    changeRealItem(plate, index);
    rechangeRealItem(plate, index);
  })
}

// Смена стиля у КОДА при наведении на ТАРЕЛКУ
function changeCodeItem(plate: Element, index: number): void {
  const editor: HTMLElement = document.querySelector('.table-code')!;
  const platesEd: NodeListOf<Element> = editor.querySelectorAll('.hljs-tag')!;
  plate.addEventListener('mouseover', () => {
    platesEd[index].classList.add('plate-hover');
  })
}

function rechangeCodeItem(plate: Element, index: number): void {
  const editor: HTMLElement = document.querySelector('.table-code')!;
  const platesEd: NodeListOf<Element> = editor.querySelectorAll('.hljs-tag')!;
  plate.addEventListener('mouseout', () => {
    platesEd[index].classList.remove('plate-hover');
  })
}
// -----------------------------------------------

// Смена стиля у ТАРЕЛКИ при наведении на КОД
function changeRealItem(plate: Element, index: number): void {
  const table: HTMLElement = document.querySelector('.table')!;
  const realPlates: NodeListOf<HTMLElement> = table.querySelectorAll('plate')!;
  plate.addEventListener('mouseover', () => {
    console.log('on');
    realPlates[index].classList.add('plate-hover');
  })
}

function rechangeRealItem(plate: Element, index: number): void {
  const table: HTMLElement = document.querySelector('.table')!;
  const realPlates: NodeListOf<HTMLElement> = table.querySelectorAll('plate')!;
  plate.addEventListener('mouseout', () => {
    console.log('off');
    realPlates[index].classList.remove('plate-hover');
  })
}
// -----------------------------------------------