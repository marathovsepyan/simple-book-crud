import { TestBed } from '@angular/core/testing';

import { BooksCrudService } from './books-crud.service';

describe('BooksCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksCrudService = TestBed.get(BooksCrudService);
    expect(service).toBeTruthy();
  });

  it('should get list of books (8 items)', () => {
    const service: BooksCrudService = TestBed.get(BooksCrudService);
    service.getBooks().then((books) => {
      expect(books.length).toEqual(8);
    });
  });
});
