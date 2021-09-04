import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public faPlusCircle = faPlusCircle;

  public searchValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log(this.searchValue);
  }

}
