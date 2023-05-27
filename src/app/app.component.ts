import { Component } from '@angular/core';
import { ContainerComponent } from './components/container/container.component';

@Component({
    selector: 'app-root',
    template: '<app-container></app-container>',
    standalone: true,
    imports: [ContainerComponent]
})
export class AppComponent {}
