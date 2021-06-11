import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule}  from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
//  import { MatNativeDateModule}from '@angular/material/native-date';
import { MatDialogModule} from '@angular/material/dialog';
import { MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';









const MaterialComponents = [MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatSnackBarModule,
  MatTabsModule,
  MatCardModule,
  MatSliderModule,
  MatMenuModule,
  MatListModule,
   MatAutocompleteModule,
      MatChipsModule,
       MatSlideToggleModule,
        MatExpansionModule,
         MatGridListModule,
          MatButtonToggleModule,
           MatSidenavModule,
            MatDividerModule,
              MatDatepickerModule,
               MatDialogModule,
                MatProgressSpinnerModule,
                 MatSortModule,
                  MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
   MatTooltipModule




];
@NgModule({
 exports: [...MaterialComponents],
  imports: [...MaterialComponents]
})
export class MaterialModule { }
