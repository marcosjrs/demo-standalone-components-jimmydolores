import { NgFor, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule, Routes } from '@angular/router';

import WorkDetailPageComponent from './work-detail-page.component';

const routes: Routes = [{ path: '', component: WorkDetailPageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes), MatButtonModule, RouterLink, NgIf, NgFor, WorkDetailPageComponent]
})
export class WorkDetailPageModule {}
