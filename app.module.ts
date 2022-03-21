import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChildoneComponent } from './childone/childone.component';
import { ChildtwoComponent } from './childtwo/childtwo.component';
import { ChildthreeComponent } from './childthree/childthree.component';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { FirstserviceService } from './firstservice.service';
import { HttpComponent } from './http/http.component';
import {HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { Login2Component } from './login2/login2.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { ShopComponent } from './shop/shop.component';
import { Shop1Component } from './shop1/shop1.component';
import { MaterialModule } from './material/material.module';
import { ChildfourComponent } from './childfour/childfour.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { SecondService } from './second.service';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './parent/parent.component';
import { FilterpipePipe } from './filterpipe.pipe';
import { Home5Component } from './home5/home5.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildthreeComponent,
    HttpComponent,
    LoginComponent,
    RegisterComponent,
    Login2Component,
    WellcomeComponent,
    ShopComponent,
    Shop1Component,
    ChildfourComponent,
    HomeComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    Home4Component,
    ParentComponent,
    FilterpipePipe,
    Home5Component,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [FirstserviceService,SecondService],
  bootstrap: [AppComponent],

})
export class AppModule { }
