import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Engineer } from '../engineer.model';

@Injectable({
  providedIn: 'root'
})
export class EngineersService {
  private apiUrl = 'http://localhost:3100/engineers';

  constructor(private http: HttpClient) { }

  getAllEngineers(): Observable<Engineer[]> {
    return this.http.get<Engineer[]>(`${this.apiUrl}/all`);
  }

  searchEngineers(fullName: string): Observable<Engineer[]> {
    return this.http.get<Engineer[]>(`${this.apiUrl}/search/${fullName}`);
  }

  searchEngineerBySiteName(siteName: string): Observable<Engineer[]> {
    return this.http.get<Engineer[]>(`${this.apiUrl}/site/${siteName}`);
  }

  createEngineer(engineer: Engineer): Observable<Engineer> {
    return this.http.post<Engineer>(`${this.apiUrl}/`, engineer);
  }

  updateEngineer(engineer: Engineer): Observable<Engineer> {
    // Assuming the API needs the userId to update a specific engineer
    return this.http.put<Engineer>(`${this.apiUrl}/${engineer.userId}`, engineer);
  }

}
