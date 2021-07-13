import {Component, Input} from "@angular/core";
import {DataService} from "../services/data.service";
import {ActivatedRoute, Route, Router} from "@angular/router";


@Component({
  styleUrls: ['./edit-card.component.css'],
  templateUrl: './edit-card.component.html'
})

export default class AddCardComponent {
  title: string = "";
  content: string = "";
  open: boolean = false;
  isEdit: boolean;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.isEdit = false;
  }

  toBack(){
    this.router.navigate(['/cards']);
  }

  saveCard() {
    this.dataService.addData({title: this.title, content: this.content});
    this.toBack();
  }
  closeModal(isConfirmed: boolean){}
  openModal() {}
}
