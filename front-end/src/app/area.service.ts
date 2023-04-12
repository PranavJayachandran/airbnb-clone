import { Injectable } from '@angular/core';
import { Area } from 'area';
// import { Areas } from 'mock_areas';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  areas: Area[] = [];
  area: Area[] = [];
  p: number = 0;
  constructor(private http: HttpClient) {}

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>('http://localhost:5252/Room');
  }
  getArea(id: number): Observable<Area> {
    return this.http.get<Area>(`http://localhost:5252/Room/${id}`);
  }

  toggleLike(id: number): void {
    // for (let i = 0; i < Areas.length; i++) {
    //   if (Areas[i].id === id) Areas[i].liked = !Areas[i].liked;
    // }
    const body = { title: 'Angular PUT Request Example' };
    this.http
      .put(`http://localhost:5252/Room/${id}`, body)
      .subscribe((data) => {
        console.log(data);
      });
    console.log('Called');
  }
}
