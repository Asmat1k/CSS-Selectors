import { endMessageClose } from "../game-process/end-game";

// МЕНЮ-БУРГЕР
export function menuInit(): void {
  if (document.querySelector('.nav-burger')) {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.closest('.nav-burger')) {
        lineChange();
        document.documentElement.classList.toggle('menu-open');
        document.querySelector('.nav__header_menu')!.classList.toggle('menu-open');
      }
    });
  }
}

export function lineChange(): void {
  const lines = document.querySelectorAll('.burger-line');
  for(let i = 0; i < lines.length; i += 1) {
    lines[i].classList.toggle('active');
  }
}

export function menuOpen(): void {
  document.documentElement.classList.add('menu-open');
  document.querySelector('.nav__header_menu')!.classList.add('menu-open');
}

export function menuClose(): void {
  endMessageClose();
  lineChange();
  document.documentElement.classList.remove('menu-open');
  document.querySelector('.nav__header_menu')!.classList.remove('menu-open');
}
//----------------------------------------------------------------------
