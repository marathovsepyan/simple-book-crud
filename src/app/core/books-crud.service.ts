import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../shared/models/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksCrudService {

  constructor(
    private http: HttpClient,
    ) { }

  async getBookById(id: number): Promise<Book> {
    return this.http.get<Book>(`api/books/${id}`).toPromise();
  }

  async deleteBook(book: Book): Promise<void> {
    return this.http.delete<any>(`api/books/${book.id}` ).toPromise();
  }

  async updateBook(book: Book): Promise<void> {
    return this.http.put<any>('api/books', book).toPromise();
  }

  async createBook(book: Book): Promise<void> {
    return this.http.post<void>(`api/books`, book).toPromise();
  }

  async getBooks(): Promise<Book[]> {
    return this.http.get<Book[]>('api/books').toPromise();
  }
}
