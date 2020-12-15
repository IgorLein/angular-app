import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-test',
  templateUrl: './home-test.component.html'
})
export class HomeTestComponent {
  @Input() id: string;
  @Input() list: any[];
}
