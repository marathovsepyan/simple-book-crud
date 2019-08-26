import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Book } from '../shared/models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      {
        publisher: 'Penguin',
        id: 1,
        publishDate: '2016-05-10T00:00:00',
        author: 'Sean Carroll',
        title: 'The Big Picture'
      },
      {
        id: 2,
        publishDate: '2011-10-25T00:00:00',
        publisher: 'Farrar, Straus and Giroux',
        author: 'Daniel Kahneman',
        title: 'Thinking, Fast and Slow'
      },
      {
        id: 3,
        publishDate: '2016-09-13T00:00:00',
        publisher: 'HarperAudio',
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson'
      },
      {
        publisher: 'Macmillan Audio',
        id: 4,
        publishDate: '2009-09-15T00:00:00',
        author: 'Michael J. Sandel',
        title: 'Justice'
      },
      {
        publisher: 'Pan Books',
        id: 5,
        publishDate: '1979-10-12T00:00:00',
        author: 'Douglas Adams',
        title: 'The Hitchhiker\'s Guide to the Galaxy'
      },
      {
        id: 6,
        publishDate: '1980-10-01T00:00:00',
        publisher: 'Pan Books',
        author: 'Douglas Adams',
        title: 'The Restaurant at the End of the Universe'
      },
      {
        publisher: 'Pan Books',
        id: 7,
        publishDate: '1982-08-01T00:00:00',
        author: 'Douglas Adams',
        title: 'Life, the Universe and Everything'
      },
      {
        publisher: 'Pan Books',
        id: 8,
        publishDate: '1984-11-09T00:00:00',
        author: 'Douglas Adams',
        title: 'So Long, and Thanks for All the Fish'
      }
    ];
    return {books};
  }

  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(hero => hero.id)) + 1 : 11;
  }
}
