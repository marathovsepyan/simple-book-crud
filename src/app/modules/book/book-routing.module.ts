import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { OnTabCloseGuard } from '../../core/on-tab-close.guard';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'edit/:id',
    component: EditBookComponent,
    canDeactivate: [OnTabCloseGuard]
  },
  {
    path: 'new',
    component: EditBookComponent,
    canDeactivate: [OnTabCloseGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
