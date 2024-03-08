import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './pages/blank-layout/blank-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { authGuard } from './core/auth.guard';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AllordersComponent } from './pages/allorders/allorders.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';

const routes: Routes = [
  {
    path: '',
    //  canActivate:[authGuard]
    // ,
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent , canActivate:[authGuard] },
      { path: 'brands', component: BrandsComponent , canActivate:[authGuard] },
      { path: 'cart', component: CartComponent , canActivate:[authGuard] },
      { path: 'wishList', component: WishListComponent , canActivate:[authGuard] },

      { path: 'checkout/:id', component: CheckoutComponent , canActivate:[authGuard] },

      { path: 'details/:id', component: ProductDetailsComponent , canActivate:[authGuard] },
      { path: 'allorders', component: AllordersComponent  , canActivate:[authGuard]},

      { path: 'product', component: ProductsComponent  , canActivate:[authGuard]},
      { path: 'categories', component: CategoriesComponent  , canActivate:[authGuard]},
      { path: 'productdetails', component: ProductDetailsComponent  , canActivate:[authGuard]},





    ],



    
  },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forget', component: ForgetComponent},
    ],
  },
  { path: '**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
