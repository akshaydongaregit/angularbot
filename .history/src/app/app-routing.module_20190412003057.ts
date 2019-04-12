import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
      path: '' ,
      component: HomeComponent ,
      children: [
          { path: 'chat' , component: ChatDialogComponent } 
      ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
