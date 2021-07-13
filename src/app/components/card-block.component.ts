import {Component, Input} from "@angular/core";
import {Card} from "../Card";
import {Router} from "@angular/router";


@Component({
  selector: 'card',
  styleUrls: ['./card-block.component.css'],
  template:`
    <div class="card-wrapper">
      <h4>{{card.title}}</h4>
      <div class="card-content"><div>{{card.content}}</div></div>
      <button (click)="handleClick()"> Перейти </button>
    </div>
  `
})

export default class CardBlockComponent{
  @Input() card!: Card;
  @Input() index!: number;

  constructor(private router: Router) {}

  handleClick(){
    this.router.navigate([`card/${this.index}`])
  }
}
