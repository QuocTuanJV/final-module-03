import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Awesome} from '../awesome';
import {AwesomeService} from '../awesome.service';

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.css']
})
export class AwesomeListComponent implements OnInit {
  awesomeList: Awesome[];
  @Output() delete = new EventEmitter();
  constructor(private awesomeService: AwesomeService) {
    this.awesomeService.getList().subscribe(result => {
      this.awesomeList = result;
    });
  }
  ngOnInit() {
  }

  deleteAwesome(id: number) {
    this.awesomeService.deleteAwesome(id).subscribe(result => {
      alert('Delete success');
      this.delete.emit();
    });
  }

  editAwesome() {

  }
}
