import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-data',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'real-time-chat-app';
  constructor(private http: HttpClient,private router:Router){

  }



  fetchData() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
      (data) => {
        console.log('Data received:', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    
  
}

  goToSignup() {
  this.router.navigate(['/signup']);
  
   // Navigate to signup component
}
}
