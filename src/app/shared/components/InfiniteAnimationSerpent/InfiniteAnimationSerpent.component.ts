import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-infinite-animation-serpent',
  standalone: true,
  imports: [],
  template: `<div class="animation-container">
    <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
      <path
        id="infinityPath"
        d="M 10,25 A 15,15 0 1,1 40,25 A 15,15 0 1,1 70,25 A 15,15 0 1,1 40,25 A 15,15 0 1,1 10,25 Z"
        fill="none"
        stroke="#000"
        stroke-width="2"
      />
    </svg>
    <div class="snake"></div>
  </div>`,
  styleUrl: './InfiniteAnimationSerpent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfiniteAnimationSerpentComponent {}
