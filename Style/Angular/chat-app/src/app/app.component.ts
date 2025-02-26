import { Component,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  

  constructor(private http: HttpClient) {}
      ngOninit(){
        this.httpGet();
      }

      httpGet() {
        this.http.get('https://api.publicapis.org/entries').subscribe((data) => {
          console.log(data);
        });
      }
  
}

