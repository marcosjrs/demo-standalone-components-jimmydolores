import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IWork } from 'src/app/models/components-model.interface';
import { WorkCardComponent } from 'src/app/components/work-card/work-card.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-work-detail-page',
	templateUrl: './work-detail-page.component.html',
	styleUrls: ['./work-detail-page.component.scss'],
	standalone: true,
	imports: [NgIf, MatButtonModule, RouterLink, WorkCardComponent, NgFor]
})
export default class WorkDetailPageComponent implements OnInit {
	@Input() token?: string;

	private _router = inject(Router);
	work?: IWork;

	constructor() {
		const workState = this._router.getCurrentNavigation()?.extras?.state?.['work'];
		if (workState) {
			this.work = workState as IWork;
		}
	}
	ngOnInit(): void {
		console.log('---capturando parametro usando @Input token->', this.token);
	}
}
