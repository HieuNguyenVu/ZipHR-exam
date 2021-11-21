import { BehaviorSubject, Observable } from 'rxjs';

export class CommonService<T> {
  protected readonly _state$ = new BehaviorSubject<T[]>([]);
  state$: Observable<T[]> = this._state$.asObservable();
  dataGetted = false;
}
