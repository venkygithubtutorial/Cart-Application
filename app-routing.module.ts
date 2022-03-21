import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildoneComponent } from './childone/childone.component';
// import { ChildfourComponent } from './childfour/childfour.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';
import { ParentComponent } from './parent/parent.component';
// import { LoginComponent } from './login/login.component';
// import { Login2Component } from './login2/login2.component';
// import { RegisterComponent } from './register/register.component';
// import { WellcomeComponent } from './wellcome/wellcome.component';

const routes: Routes = [
{path: "home",
children:[
  {path:"", component: HomeComponent},
  {path:"home1",
children:[
  {path:"", component: Home1Component},
  {path:"home2/:id", children:[
    {path:"", component: Home2Component}
  ]}
]
}
]
},{path:'home3',component:Home3Component},
{path:'home4',component:Home4Component},
{path:'login',component:ChildoneComponent},
{path:'logout', component:ParentComponent}
];
  // {path:'',component: HomeComponent},
  // {path:'home',component: HomeComponent},
  // {path:'home1',component: Home1Component},
  // {path:'home2',component: Home2Component},
 
  // {path:'',component:HomeComponent}
//   {path:'login', 
//  children:[{
//   path: '', 
//   component:LoginComponent 
// },{
//   path: 'childfour', 
//   component: ChildfourComponent, 
// }]
// },
//   {path:'register', component:RegisterComponent},
//   {path:'login2', component:Login2Component},
 
//   { path: '',   redirectTo: '/LoginComponent', pathMatch: 'full' },
//    {path:'wellcome/:id', component:WellcomeComponent},
//   {path:'wellcome/:productId/photo/:photoId', component:WellcomeComponent},
//   {path:'', redirectTo:'login',pathMatch:'full'},
//   {path:'login',component:LoginComponent},

//   { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },

//   // {path:'', redirectTo:'LoginComponent'},


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
