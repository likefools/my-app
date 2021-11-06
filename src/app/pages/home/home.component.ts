import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = 'my website';
  textHeader: string = 'האתר הטוב ביותר';
  constructor() { }

  ngOnInit(): void {}

}
