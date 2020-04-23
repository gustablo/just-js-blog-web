import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';

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
        MatPaginatorModule,
    ]
})
export class MaterialSharedModule { }
