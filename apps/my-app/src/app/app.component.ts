import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooComponent } from './foo/foo.component';

@Component({
  imports: [FooComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}
