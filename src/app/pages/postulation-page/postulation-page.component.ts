import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WorkCardComponent } from 'src/app/components/work-card/work-card.component';
import { IWordCardComponent } from 'src/app/models/components-model.interface';
import { PostulationPageModule } from './postulation-page.module';

@Component({
	selector: 'app-postulation-page',
	templateUrl: './postulation-page.component.html',
	styleUrls: ['./postulation-page.component.scss'],
	standalone: true,
	imports: [WorkCardComponent, PostulationPageModule]
})
export default class PostulationPageComponent {
	private _router = inject(Router);
	confirmation = false;
	wordCard!: IWordCardComponent;

	constructor() {
		const workState = this._router.getCurrentNavigation()?.extras?.state?.['wordCard'];
		if (workState) {
			this.wordCard = workState as IWordCardComponent;
		}
	}
}
