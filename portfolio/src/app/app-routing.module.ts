import { CertificateComponent } from './certificate/certificate.component';
import { MyAppComponent } from './my-app/my-app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
{
  path: 'home', component:HomeComponent
},
{
  path: 'my-app', component:MyAppComponent
},
{
  path: 'certificate', component:CertificateComponent
},
{
  path: '**', pathMatch: 'full', redirectTo: 'home'
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
