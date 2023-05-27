import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WORK_DUMMY } from 'src/app/models/work-dummy';
import { IWork } from './../../models/components-model.interface';
import { WorkCardComponent } from '../../components/work-card/work-card.component';
import { MatRippleModule } from '@angular/material/core';
import { NgFor } from '@angular/common';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss'],
	standalone: true,
    imports: [NgFor, MatRippleModule, WorkCardComponent]
})
export class HomePageComponent {
	private _router = inject(Router);
	readonly works = WORK_DUMMY;

	clickWorkCard(work: IWork): void {
		this._router.navigate(['/work-detail'], { state: { work }, queryParams: { token: 'miToken' } });
	}
}
