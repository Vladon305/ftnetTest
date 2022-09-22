import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderRegistrationPageComponent } from './pages/order-registration-page/order-registration-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full',
  },
  {
    path: 'store',
    component: StorePageComponent,
  },
  {
    path: 'order-registration/:step',
    component: OrderRegistrationPageComponent,
  },
  {
    path: '**',
    redirectTo: 'store',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
