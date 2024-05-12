import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Dashboard } from './model/dashboardModel';
import { DashboardServices } from './services/dashboard.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data: any;
  options: any;
  form: FormGroup;
  validSubmit: boolean = false;
  dataGraficg: Dashboard[] = [];
  yearLabels: string[] = [];
  openData: number[] = [];
  lowData: number[] = [];
  highData: number[] = [];
  closeData: number[] = [];

  constructor(
    private router: Router,
    public appComponent: AppComponent,
    private formBuilder: FormBuilder,
    private service: DashboardServices
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(11)]],
    });
  }
  logout() {
    this.router.navigateByUrl('/');
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.findAllData().subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.status == 200) {
          this.dataGraficg = response.body;
          this.prepareChartData();
        }
      },
    });
  }

  prepareChartData() {
    this.dataGraficg.forEach((data) => {
      const year = new Date(data.Date).getFullYear().toString();
      if (!this.yearLabels.includes(year)) {
        this.yearLabels.push(year);
      }

      this.openData.push(data.Open);
      this.lowData.push(data.low);
      this.highData.push(data.high);
      this.closeData.push(data.Close);
    });

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: this.yearLabels,
      datasets: [
        {
          label: 'Apertura',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: this.openData,
        },
        {
          label: 'Bajo',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: this.lowData,
        },
        {
          label: 'Alto',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
          data: this.highData,
        },
        {
          label: 'Cierre',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 1,
          data: this.highData,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  submit() {
    this.validSubmit = false;

    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAllAsTouched();
      });
    }
    if (this.form.valid) {
      this.form.reset();
      this.validSubmit = true;
    }
  }

  onKeyPress(event: KeyboardEvent) {
    const keyCode = event.keyCode || event.which;
    if (keyCode < 48 || keyCode > 57) {
      event.preventDefault();
    }
  }

  onKeyDown(event: KeyboardEvent) {
    const keyCode = event.keyCode || event.which;
    if (keyCode === 190 || keyCode === 188) {
      event.preventDefault();
    }
  }
}
