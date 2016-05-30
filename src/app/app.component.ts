import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import '../../app/css/styles.css';
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent { 
    ngOnInit(){
        console.log("On init - App.Component");
    }
}
