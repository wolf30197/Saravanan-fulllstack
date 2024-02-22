import { Injectable, OnInit } from '@angular/core';
import { Gmail } from '../Interface/gmail';
@Injectable({
  providedIn: 'root'
})
export class GmailService implements OnInit{
  public selectedMailMessage:Gmail;
  constructor() { }
     
  ngOnInit(): void {
    
  }
}
