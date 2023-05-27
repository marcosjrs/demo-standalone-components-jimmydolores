import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IWork } from 'src/app/models/components-model.interface';
import { WorkCardComponent } from '../../components/work-card/work-card.component';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-work-detail-page',
    templateUrl: './work-detail-page.component.html',
    styleUrls: ['./work-detail-page.component.scss'],
    standalone: true,
    imports: [NgIf, MatButtonModule, RouterLink, WorkCardComponent, NgFor]
})
export default class WorkDetailPageComponent {
	private _router = inject(Router);
	work?: IWork;

	constructor() {
		const workState = this._router.getCurrentNavigation()?.extras?.state?.['work'];
		if (workState) {
			this.work = workState as IWork;
		}
	}
}
