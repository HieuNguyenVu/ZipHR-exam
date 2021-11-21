import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IObjectKeys } from './object-keys.interface';
import { ISearchConfiguration, ISearchModel } from './search.model';

export class PagingAndSearchComponent<T extends IObjectKeys> {
  page = 1;
  pageSize = environment.DEFAULT_PAGE_SIZE;
  collectionSize = 0;
  //search
  configuration: ISearchConfiguration = {
    defaultValue: '',
    defaultCategory: '',
    categories: [],
  };
  sourceStock: T[] = [] as T[];
  lastSearchResult: T[] = [] as T[];

  _datas$: BehaviorSubject<T[]> = new BehaviorSubject([] as T[]);
  datas$: Observable<T[]> = this._datas$.asObservable();

  /**
   * on click Search
   * @param searchForm ISearchModel
   */
  onSearch(searchForm?: ISearchModel) {
    console.log('onSearch', searchForm);
    if (!searchForm) {
      this.lastSearchResult = this.sourceStock;
    } else {
      let content: string = searchForm.value;
      const category: string = searchForm.category;
      if (!content || !category) this.lastSearchResult = this.sourceStock;
      else {
        if (category === 'userId') {
          content = Number(content).toString();
        }
        let result = this.sourceStock.filter((photo) =>
          photo[category].toString().startsWith(content)
        );
        this.lastSearchResult = result;
      }
    }
    this.collectionSize = this.lastSearchResult?.length
      ? this.lastSearchResult?.length
      : 0;
    this.refreshAlbums();
  }

  refreshAlbums() {
    if (this.lastSearchResult !== undefined) {
      let photos = this.lastSearchResult
        .map((country, i) => ({ ...country, index: i + 1 }))
        .slice(
          (this.page - 1) * this.pageSize,
          (this.page - 1) * this.pageSize + this.pageSize
        );
      this._datas$.next(photos);
    }
  }
}
