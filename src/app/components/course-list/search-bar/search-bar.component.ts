import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public faPlusCircle = faPlusCircle;
  public searchValue: string = '';

  @Output() onSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchCourse() {
    this.onSearch.emit(this.searchValue);
  }

}
