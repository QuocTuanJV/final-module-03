import { Component, OnInit } from '@angular/core';
import {Awesome} from '../awesome';
import {AwesomeService} from '../awesome.service';

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.css']
})
export class AwesomeListComponent implements OnInit {
  awesomeList: Awesome[];
  constructor(private awesomeService: AwesomeService) {
    this.awesomeService.getList().subscribe(result => {
      this.awesomeList = result;
    });
  }
  ngOnInit() {
  }

}
