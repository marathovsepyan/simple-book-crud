import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksCrudService } from '../../core/books-crud.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../../core/in-memory-data.service';
import { OnTabCloseGuard } from '../../core/on-tab-close.guard';

@NgModule({
  declarations: [BookListComponent, EditDialogComponent, EditBookComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    BookRoutingModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    FormsModule
  ],
  entryComponents: [
    EditDialogComponent,
    EditBookComponent,
  ],
  providers: [
    BooksCrudService,
    OnTabCloseGuard,
  ]
})
export class BookModule { }
