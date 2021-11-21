import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  BehaviorSubject,
  filter,
  map,
  Observable,
  Subject,
  takeUntil,
} from 'rxjs';

interface IPath {
  label: string;
  path: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  faChevronRight = faChevronRight;
  _paths$ = new BehaviorSubject([] as IPath[]);
  paths$: Observable<IPath[]> = this._paths$.asObservable();
  private readonly destroy$ = new Subject();

  constructor(private router: Router) {
    router.events
      .pipe(
        takeUntil(this.destroy$),
        filter((event) => event instanceof NavigationEnd),
        map((event) => event as NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        let pathItems = event.url
          .split('/')
          .filter(path => !path.startsWith('dashboard'))
          .map((path) => {
            return {
              label: path.charAt(0).toUpperCase() + path.slice(1),
              path,
            };
          })
          .filter((path) => !!path.label);
        this._paths$.next(pathItems);
      });
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.destroy$.next(false);
    this.destroy$.complete();
    this._paths$.complete();
  }
}
