import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import { BasketComponent } from './components/basket/basket.component';
import { OrderRegistrationComponent } from './components/order-registration/order-registration.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { OrderRegistrationPageComponent } from './pages/order-registration-page/order-registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    BasketComponent,
    OrderRegistrationComponent,
    StorePageComponent,
    OrderRegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
