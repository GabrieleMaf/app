import { Component } from '@angular/core';
import { InfiniteAnimationSerpentComponent } from '../../shared/components/InfiniteAnimationSerpent/InfiniteAnimationSerpent.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InfiniteAnimationSerpentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
