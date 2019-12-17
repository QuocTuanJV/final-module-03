import {Component, Input, OnInit} from '@angular/core';
import {Awesome} from '../awesome';

@Component({
  selector: 'app-awesome',
  templateUrl: './awesome.component.html',
  styleUrls: ['./awesome.component.css']
})
export class AwesomeComponent implements OnInit {
@Input() awesome: Awesome;
  constructor() { }

  ngOnInit() {
  }

}
