import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public HeronName: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'She Hulk'];
  public deleteHero?: string;

  removeLastHero():void {
    this.deleteHero = this.HeronName.pop();
    // console.log(deleteHero);
  }

}
