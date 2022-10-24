import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fave } from '../Model/Fave';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer FT3Ka6j6mhMvtLgrVR09`,
    }),
  };

  httpOption = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
    }),
  };

  private apiUrl = 'http://localhost:5000/faves';

  constructor(private http: HttpClient) {}

  // get quotes

  getQuotes() {
    return this.http.get(`https://the-one-api.dev/v2/quote`, this.httpOptions);
  }

  // get characters

  getCharacter(limit: number, p: number, off: number) {
    return this.http.get(
      `https://the-one-api.dev/v2/character?limit=${limit}?page=${p}?offset=${off}`,
      this.httpOptions
    );
  }

  // form

  addFave(fave: Fave): Observable<Fave> {
    return this.http.post<Fave>(this.apiUrl, fave, this.httpOption);
  }

  getFave(): Observable<Fave[]> {
    return this.http.get<Fave[]>(this.apiUrl);
  }

  deleteFave(fave: Fave): Observable<Fave> {
    const url = `${this.apiUrl}/${fave.id}`;
    return this.http.delete<Fave>(url);
  }
}
