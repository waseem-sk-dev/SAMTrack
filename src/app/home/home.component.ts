import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const btn = document.getElementById('toggleBtn');
    const info = document.getElementById('infoSection');

    if (btn && info) {
      btn.addEventListener('click', () => {
        info.classList.toggle('hidden');
        btn.textContent = info.classList.contains('hidden')
          ? 'Know the System'
          : 'Hide Info';
      });
    }
  }
}
