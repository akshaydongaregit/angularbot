import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'chat' , component: ChatDialogComponent } ,
  { path: 'home' , component: HomeComponent  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
