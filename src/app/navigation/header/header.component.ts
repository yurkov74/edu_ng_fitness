import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
// app services
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth: boolean;
  authStatusSubscription: Subscription;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authStatusSubscription = this.authService.authChanged.subscribe(authStatus => this.isAuth = authStatus);
  }

  onToggleSidenav() { this.sidenavToggle.emit(); }

  ngOnDestroy() { this.authStatusSubscription.unsubscribe(); }

}
