import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Navigation } from '../Navigation/navigation';
import { Sidebar } from '../Sidebar/sidebar';
import { AuthService } from '../../services/auth.service'; 

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, Navigation, Sidebar],
  templateUrl: './dashboard.html',
  styleUrls: [
    '../fontawesome-free/css/all.min.css',
    './dashboard.css',
  ],
})
export class Dashboard implements OnInit, AfterViewInit {

  valides: number = 0;
  lecture: number = 0;

  public config: any = {
    type: 'doughnut',
    data: {
      labels: ['Titre', 'Requisition', 'Lotissement'],
      datasets: [{
        data: [6393, 2300, 7462],
        backgroundColor: [
          '#4e73df',
          '#1cc88a',
          '#36b9cc'
        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 20,
            padding: 15
          }
        }
      }
    },
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getStats().subscribe(data => {
      this.valides = data.valides;
      this.lecture = data.lecture;
    });
  }

  ngAfterViewInit(): void {
    new Chart('MyChart', this.config);
  }

  getBarColor(value: number): string {
    if (value > 50) return 'bg-success';
    if (value < 30) return 'bg-danger';
    return 'bg-warning';
  }
}