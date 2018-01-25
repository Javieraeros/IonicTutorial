import {Component} from '@angular/core';
import {Events} from "ionic-angular";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  user: string = "";

  constructor(public event: Events) {

  }

}
