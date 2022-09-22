import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  name = '';
  phone = '';
  confirmation = false;
  SNILS = '';
  photo: string;
  delivery: 'pickup' | 'delivery by mail' = 'pickup';

  constructor() {}
}
