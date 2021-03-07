import { Component } from '@angular/core'
import { Log } from '@client/decorators/function.decorator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = "default";
  public index: number = -1;
  constructor() { }
  @Log() public initialize(text: string, value: number) {
    this.title = text;
    this.index = value;
    return `Successfuly updated title value to ${text}`;
  }
}
