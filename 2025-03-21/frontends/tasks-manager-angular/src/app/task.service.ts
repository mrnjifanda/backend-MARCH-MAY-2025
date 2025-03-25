import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { Contact } from './interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly baseUrl: string;
  constructor() {
    this.baseUrl = environment.baseUrl;
  }

  // /lists
  // /create
  // /details/:id
  // /update/:id
  // /delete/:id
  // /delete-many/:ids

  async getAllTacks(): Promise<any> {
    try {
      const request = await fetch(`${this.baseUrl}/lists`, {
        method: 'GET'
      });

      if (request.ok) {
        const response = await request.json();
        return response.data;
      }

      throw new Error(request.statusText);
    } catch (error: any) {

      return {
        error: true,
        statusCode: error.message
      };
    }
  }

  async createOneContact(data: Contact): Promise<any> {
    try {
      const request = await fetch(`${this.baseUrl}/create`, {
        method: 'POST',
        body: JSON.stringify(data)
      });

      if (request.ok) {
        const response = await request.json();
        return response.message;
      }

      throw new Error(request.statusText);
    } catch (error: any) {

      return {
        error: true,
        statusCode: error.message
      };
    }
  }
}
