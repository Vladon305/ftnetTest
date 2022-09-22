import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/services/basket.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-order-registration-page',
  templateUrl: './order-registration-page.component.html',
  styleUrls: ['./order-registration-page.component.scss'],
})
export class OrderRegistrationPageComponent implements OnInit {
  constructor(
    public basketService: BasketService,
    public registrationService: RegistrationService,
    private route: ActivatedRoute
  ) {}

  params: string;

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.params = params['step']));
  }
}
