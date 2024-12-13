import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const AllMaterialModules = [
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatListModule,
    MatIconModule
];

@NgModule({
  imports: [AllMaterialModules],
  exports: [AllMaterialModules],
})
export class MaterialModule {}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
