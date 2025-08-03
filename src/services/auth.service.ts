import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api'; // Ton backend Laravel

  constructor(private http: HttpClient) {}

  // Méthode de connexion
  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  // ✅ Méthode pour récupérer les statistiques
  getStats(): Observable<{ valides: number; lecture: number }> {
    return this.http.get<{ valides: number; lecture: number }>(`${this.apiUrl}/stats`);
  }
}

 

 
