import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
    ]
})
export class MaterialModule {}