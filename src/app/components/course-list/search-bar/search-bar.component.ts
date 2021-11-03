import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {fromEvent, Subscription} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map} from "rxjs/operators";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  public faPlusCircle = faPlusCircle;
  public searchValue: string = '';

  private subscription!: Subscription;

  @ViewChild('search', {static: true}) search!: ElementRef;
  @Output() onSearch = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.subscription = fromEvent<any>(this.search.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map(event => event.target.value),
        filter(text => text.length > 2),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.onSearch.emit(value);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
