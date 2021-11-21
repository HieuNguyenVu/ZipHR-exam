import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  faBook,
  faChartBar,
  faFileSignature,
  faImages,
} from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, filter, Subject, takeUntil } from 'rxjs';

interface ILink {
  href: string;
  label: string;
  icon: any;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SideBarComponent implements OnInit {
  _activeId$ = new BehaviorSubject('');
  activeId$ = this._activeId$.asObservable();
  private readonly destroy$ = new Subject();

  links: ILink[] = [
    {
      href: 'dashboard',
      label: 'Dashboard',
      icon: faChartBar,
    },
    {
      href: 'posts',
      label: 'Posts',
      icon: faFileSignature,
    },
    {
      href: 'albums',
      label: 'Albums',
      icon: faBook,
    },
    {
      href: 'photos',
      label: 'Photos',
      icon: faImages,
    },
  ];

  constructor(public router: Router) {
    router.events
      .pipe(
        takeUntil(this.destroy$),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        let ev = event as NavigationEnd;
        if (ev.url === '/'){
          this._activeId$.next('dasboard');
          console.log('hEHRE');
        }
        else {
          let content = ev.url.split('/');
          console.log(content);
          this._activeId$.next(content[1]);
        }
      });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroy$.next(false);
    this.destroy$.complete();
    this._activeId$.complete();
  }
}
