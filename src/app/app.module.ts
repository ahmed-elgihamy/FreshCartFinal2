import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsComponent } from './pages/products/products.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NavBlankComponent } from './pages/nav-blank/nav-blank.component';
import { NavAuthComponent } from './pages/nav-auth/nav-auth.component';
import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './pages/blank-layout/blank-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TextTermPipe } from './pipe/text-term.pipe';
import { SearchPipe } from './pipe/search.pipe'
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AllordersComponent } from './pages/allorders/allorders.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { MyHttpInterceptor } from './pages/Interceptor/my-http.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './pages/Interceptor/loading.interceptor';
import { ForgetComponent } from './pages/forget/forget.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    ProductDetailsComponent,
    NavBlankComponent,
    NavAuthComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    TextTermPipe,
    SearchPipe,
    CheckoutComponent,
    AllordersComponent,
    ForgetComponent,
    WishListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
	RxReactiveFormsModule,
  NgxSpinnerModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:MyHttpInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
