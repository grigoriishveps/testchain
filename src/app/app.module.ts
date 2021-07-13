import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {CardsComponent} from "./components/cards.component";
import CartInfo from "./components/edit-card.component";
import {DataService} from "./services/data.service";
import CardBlockComponent from "./components/card-block.component";
import ModalComponent from "./components/modal.component";
import CartInfoComponent from "./components/edit-card.component";
import AddCardComponent from "./components/add-card.component";
import EditCardComponent from "./components/edit-card.component";

const appRoutes: Routes = [
  { path:'', pathMatch:'prefix', redirectTo:'cards'},
  { path: 'cards', component: CardsComponent},
  { path: 'card/:id', component: EditCardComponent , pathMatch:'full'},
  { path: 'add', component: AddCardComponent},
];

@NgModule({
  declarations: [
    AppComponent, EditCardComponent, AddCardComponent, CardsComponent, CardBlockComponent, CardBlockComponent,ModalComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
