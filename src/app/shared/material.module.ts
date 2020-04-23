import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
    ]
})
export class MaterialSharedModule { }
