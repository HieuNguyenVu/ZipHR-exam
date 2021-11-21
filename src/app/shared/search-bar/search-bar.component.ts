import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ISearchConfiguration, ISearchModel } from '../models/search.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Input()
  configuration: ISearchConfiguration = {
    defaultValue: '',
    defaultCategory: '',
    categories: [],
  };

  @Output() onSearch = new EventEmitter<ISearchModel>();

  searchForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      value: [''],
      category: [''],
    });
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      value: [this.configuration.defaultValue],
      category: [this.configuration.defaultCategory],
    });

    if (this.configuration.defaultValue !== '') {
      this.onClickSearch();
    }
  }

  onClickSearch() {
    const value = {
      value: this.searchForm.value['value'].toLowerCase(),
    };
    this.onSearch.emit({ ...this.searchForm.value, ...value });
  }
}
