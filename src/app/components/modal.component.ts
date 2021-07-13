import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector:'modal',
  styleUrls:['./modal.component.css'],
  template:`
<!--    <div class="hystmodal__window">-->
<!--      <p>Точно удалить?</p>-->
<!--      <div>-->
<!--        <button (click)="handleNo()">Нет</button>-->
<!--        <button (click)="handleYes()">Да</button>-->
<!--      </div>-->

<!--    </div>-->

    <div class="modal-background">
      <div class="container">
        <div class="content">
          <span>Удалить?</span>
        </div>
        <div class="action-block">
          <button class=" red" (click)="handleNo()">Нет</button>
          <button class=" blue" (click)="handleYes()">Да</button>
        </div>
      </div>
    </div>
  `
})

export default class ModalComponent{

  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleYes(){
    console.log("Yes")
    this.isConfirmed.emit(true)
  }
  handleNo(){
    console.log("No")
    this.isConfirmed.emit(false)
  }

}
