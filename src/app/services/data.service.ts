import {Injectable} from "@angular/core";
import {Card} from "../Card";

@Injectable()
export class DataService{

  private data: Card[] = [];
  constructor(){}

  getData(): Card[] {
    return this.data;
  }

  getDataById(index:number):Card{
    return this.data[index];
  }

  removeData(index:number){
    this.data.splice(index, 1);
  }

  addData(card: Card){
    this.data.push(card);
  }

  changeData(index: number, card:Card){
    this.data.splice(index,1, card)
  }
}
