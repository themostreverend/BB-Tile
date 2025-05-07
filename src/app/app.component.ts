import { Component } from '@angular/core';
import { SkyAlertModule } from '@skyux/indicators'; // Import SkyAlertModule here

@Component({
  selector: 'app-root',
  standalone: true, // Keep this if your project is standalone
  imports: [SkyAlertModule], // Add SkyAlertModule to the imports array here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'addin-hello-world';
}