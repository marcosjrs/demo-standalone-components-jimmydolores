import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { Router, RouterLink } from '@angular/router';
import { IWordCardComponent } from 'src/app/models/components-model.interface';
import { WorkCardComponent } from '../../components/work-card/work-card.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { ExperienceComponent } from './experience/experience.component';
import { PostulationConfirmationComponent } from './postulation-confirmation/postulation-confirmation.component';

@Component({
	selector: 'app-postulation-page',
	templateUrl: './postulation-page.component.html',
	styleUrls: ['./postulation-page.component.scss'],
	standalone: true,
	imports: [
		MatButtonModule,
		RouterLink,
		NgIf,
		WorkCardComponent,
		MatStepperModule,
		ExperienceComponent,
		BasicInformationComponent,
		PostulationConfirmationComponent
	]
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
