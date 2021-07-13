import {Injectable} from "@angular/core";
import {Card} from "../Card";

@Injectable()
export class DataService{

  private data: Card[] = [{title:"Тест1", content:"afsdfsdf"},
    {title:"Тест2", content:"adsfsdf"},
    {title:"Тест3csdafk L", content:"йуа.дтМЛЫВТCSADF'LVLNKSdnvkXNcbmvbjsbkdcl,mzxcvbjsahkeld;lad s dkfbnsjb knak ba kdfbjsj;folbweirajf obewb wqweufhsvdbdkfn,s KDJBLAFJLHWBEK.SNFj.jvlsZDUJK.SL.,ZXFVBQEKAUSYILOI;po:aKFNZV ,N.,AK2LJW;EKIHR[U57384934 23546B3J4VB5HJ4B2N3LWQJREFIL234KWJRO;I3QVOWENF 4JTB 32N 4N 23JV453K4 5KN"},
    {title:"Тест4", content:"фыв"}];
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
