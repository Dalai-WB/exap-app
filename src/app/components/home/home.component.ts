import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BodyComponent } from '../body/body.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, BodyComponent, LoginComponent, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
