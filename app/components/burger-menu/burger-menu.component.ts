import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css'],
})
export class BurgerMenuComponent implements OnInit {
  isMenuOpen: boolean = false;
  isUserListHidden: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isMenuOpen = false;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleUserList() {
    this.isUserListHidden = !this.isUserListHidden;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
