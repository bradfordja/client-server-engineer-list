import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SiteLocation } from '../siteLocation.model';

@Injectable({
  providedIn: 'root'
})
export class SiteLocationService {

  private API_URL = 'http://localhost:3100/sites';  // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  createSiteLocation(siteLocation: SiteLocation): Observable<SiteLocation> {
    return this.http.post<SiteLocation>(this.API_URL, siteLocation);
}

updateSiteLocation(siteLocation: SiteLocation): Observable<SiteLocation> {
    return this.http.put<SiteLocation>(`${this.API_URL}/${siteLocation.siteId}`, siteLocation);
}

}
