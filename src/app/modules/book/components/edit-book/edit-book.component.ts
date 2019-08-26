import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksCrudService } from '../../../../core/books-crud.service';
import { Book } from '../../../../shared/models/book.interface';
import { ComponentCanDeactivate } from '../../../../core/component-can-deactivate';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.sass']
})
export class EditBookComponent extends ComponentCanDeactivate implements OnInit {

  public book: Book;
  public saved: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private booksCrudService: BooksCrudService,
  ) {
    super();
    this.saved = false;
  }

  canDeactivate(): boolean {
    return this.saved;
  }

  async ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.book = await this.booksCrudService.getBookById(this.route.snapshot.params.id);
    } else {
      this.book = {
        title: '',
        author: '',
        publisher: '',
        publishDate: ''
      };
    }
  }

  async saveBook(): Promise<void> {
    if (!this.book.id) {
      await this.booksCrudService.createBook(this.book);
    } else {
      await this.booksCrudService.updateBook(this.book);
    }
    this.saved = true;

    await this.router.navigate(['/']);
  }

}
