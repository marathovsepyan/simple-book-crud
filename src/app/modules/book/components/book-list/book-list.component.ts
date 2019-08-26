import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FieldTypeEnum} from '../../../../shared/models/field-type.enum';
import {Book} from '../../../../shared/models/book.interface';
import {Field} from '../../../../shared/models/field.interface';
import * as orderBy from 'lodash/orderBy';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {DialogActionEnum} from '../../../../shared/models/dialog-action.enum';
import { BooksCrudService } from '../../../../core/books-crud.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass']
})
export class BookListComponent implements OnInit {

  public allBooks: Book[];
  public bookList: Book[];
  public sortFields: Field[] = [
    {
      type: FieldTypeEnum.field,
      name: 'title',
      label: 'Title',
      checked: true,
    },
    {
      type: FieldTypeEnum.field,
      name: 'author',
      label: 'Author',
      checked: false,
    },
    {
      type: FieldTypeEnum.field,
      name: 'publisher',
      label: 'Publisher',
      checked: false,
    },
    {
      type: FieldTypeEnum.field,
      name: 'publishDate',
      label: 'Publish Date',
      checked: false,
    },
  ];
  public sortOrders: Field[] = [
    {
      type: FieldTypeEnum.order,
      name: 'asc',
      label: 'Asc',
      checked: true,
    },
    {
      type: FieldTypeEnum.order,
      name: 'desc',
      label: 'Desc',
      checked: false,
    },
  ];

  private searchText: string;

  constructor(public dialog: MatDialog, private booksCrudService: BooksCrudService) {
    this.bookList = [];
    this.allBooks = [];
    this.loadBooks();
  }

  ngOnInit() {
  }

  public onSortClick(field: Field): void {
    this.sortFields.forEach(f => f.checked = false);
    field.checked = true;
    this.showWithSorting(this.bookList);
  }

  public onOrderClick(field: Field): void {
    this.sortOrders.forEach(f => f.checked = false);
    field.checked = true;
    this.showWithSorting(this.bookList);
  }

  public onSearch(text: string): void {
    this.searchText = text;
    const filtered = this.allBooks.filter((book: Book) => {
      const allInOne = `${book.title}${book.author}${book.publisher}${book.publishDate}`.toLowerCase();
      return allInOne.includes(text.toLowerCase());
    });
    this.showWithSorting(filtered);
  }

  public showActionModal(book: Book): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: book,
    });

    dialogRef.afterClosed().subscribe(async (action: DialogActionEnum) => {
      if (action === DialogActionEnum.remove) {
        await this.removeBook(book);
      }
    });
  }

  private showWithSorting(books: Book[]): void {
    const currentSortField = this.sortFields.find(item => item.checked);
    const currentOrder = this.sortOrders.find(item => item.checked);
    this.bookList = orderBy(books, [currentSortField.name], [currentOrder.name]);
  }

  private async removeBook(book: Book): Promise<void> {
    await this.booksCrudService.deleteBook(book);
    await this.loadBooks();
  }

  private async loadBooks(): Promise<void> {
    this.allBooks = await this.booksCrudService.getBooks();
    this.bookList = this.allBooks;

    if (this.searchText) {
      this.onSearch(this.searchText);
    } else {
      this.showWithSorting(this.allBooks);
    }
  }
}
