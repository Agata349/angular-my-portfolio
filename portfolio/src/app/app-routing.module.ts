import { CertificateComponent } from './certificate/certificate.component';
import { MyAppComponent } from './my-app/my-app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
path: 'my-app', component:MyAppComponent
},
{
  path: 'certificate', component:CertificateComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
