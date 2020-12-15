import { Component, Input } from '@angular/core';

@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {
    @Input() data: any;

    get imagePath() {
        return this.data.type === 'dir' ? './dir.png' : './file.png';
    }
}
