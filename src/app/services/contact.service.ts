import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  private apiUrl = "https://emailservice-sdgq.onrender.com/contact"; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  sendContactForm(data: {
    name: string;
    email: string;
    website: string;
    message: string;
  }): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(this.apiUrl, data, { headers });
  }
}
