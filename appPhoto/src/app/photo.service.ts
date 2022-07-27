import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

interface unspResp {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http
      .get<unspResp>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization:
            'Client-ID iNsRt2p7V_TkREgcFO-2LdwCwMK0TeyBIiJOI0GPwwQ',
        },
      })
      .pipe(map((value) => value.urls.regular));
  }
}
