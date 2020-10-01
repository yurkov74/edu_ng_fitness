import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
// app services
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() sidenavClose = new EventEmitter();
  isAuth: boolean;
  authStatusSubscription: Subscription;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void { this.authStatusSubscription = this.authService.authChanged.subscribe(authStatus => this.isAuth = authStatus);}

  onCloseSidenav() { this.sidenavClose.emit(); }

  ngOnDestroy() { this.authStatusSubscription.unsubscribe(); }
}
