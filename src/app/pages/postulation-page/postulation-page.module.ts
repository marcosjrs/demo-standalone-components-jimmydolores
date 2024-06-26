import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterLink } from '@angular/router';
import { WorkCardComponent } from 'src/app/components/work-card/work-card.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { ExperienceComponent } from './experience/experience.component';
import { PostulationConfirmationComponent } from './postulation-confirmation/postulation-confirmation.component';

@NgModule({
	declarations: [ExperienceComponent, BasicInformationComponent, PostulationConfirmationComponent],
	imports: [
		MatStepperModule,
		MatButtonModule,
		WorkCardComponent,
		RouterLink,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		NgIf,
		MatIconModule
	],
	exports: [
		ExperienceComponent,
		BasicInformationComponent,
		PostulationConfirmationComponent,
		MatStepperModule,
		MatButtonModule,
		NgIf,
		RouterLink
	]
})
export class PostulationPageModule {}
