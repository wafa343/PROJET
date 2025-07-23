import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navigation } from '../Navigation/navigation';
import { Sidebar } from '../Sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, CommonModule, FormsModule, Navigation , Sidebar],
  templateUrl: './dashboard.html',
  styleUrls: [
    '../fontawesome-free/css/all.min.css', 
    './dashboard.css',
  ]
})
export class Dashboard {
  protected title = 'projet';
}
