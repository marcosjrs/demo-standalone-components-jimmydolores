import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class ContainerComponent {}
