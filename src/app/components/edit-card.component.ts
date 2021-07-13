import {Component, Input} from "@angular/core";
import {DataService} from "../services/data.service";
import {ActivatedRoute, Route, Router} from "@angular/router";


@Component({
  styleUrls: ['./edit-card.component.css'],
  templateUrl: './edit-card.component.html'
})

export default class EditCardComponent {
  title: string = "";
  content: string = "";
  index:number;
  open: boolean = false;
  isEdit: boolean;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.isEdit = true;
    this.index = Number(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(){
    console.log(this.index)
    const {title, content} = this.dataService.getDataById(this.index);
    this.title= title;
    this.content = content;
  }

  toBack(){
    this.router.navigate(['/cards']);
  }

  saveCard() {
    this.dataService.changeData(this.index, {title: this.title, content: this.content});
    this.toBack();
  }

  openModal() {
    this.open = true;
  }
  public closeModal(isConfirmed: boolean) {
    this.open = false;
    if (isConfirmed) {
      this.dataService.removeData(this.index);
      this.toBack();
    }
  }
}
