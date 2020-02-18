import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { AllpostsComponent } from './allposts/allposts.component';
import { ThreadComponent } from './thread/thread.component'
import { ManageComponent } from './manage/manage.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path:'', component: WelcomeComponent},
  { path:'homepage', component: HomepageComponent},
  { path:'login', component: LoginsignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
