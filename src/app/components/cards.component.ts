import {Component} from "@angular/core";
import {DataService} from "../services/data.service";
import {Card} from "../Card";
import {Router} from "@angular/router";

@Component({
  styleUrls: ['./cards.component.css'],
  selector: 'cards',
  template: `<h2 style="text-align: center">Блог</h2>
  <div class="main-wrapper">
    <card *ngFor="let item of items; let i = index" [card]="item" [index]="i"></card>
  </div>
  <button class="relative-btn" (click)="goToAdd()"> + Добавить</button>
  `
})

export class CardsComponent {
  items: Card[] = [];

  constructor(private dataService: DataService, private router: Router) {
  }

  goToAdd() {
    this.router.navigate(['/add']);
  }

  ngOnInit() {
    this.items = this.dataService.getData();
  }

}
