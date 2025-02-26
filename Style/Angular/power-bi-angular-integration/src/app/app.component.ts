import { Component,OnInit,ViewChild } from '@angular/core';
import { PowerBIReportEmbedComponent } from 'powerbi-client-angular';
import{IReportEmbedConfiguration,models,service,Embed}from 'powerbi-client';
import { TokenType } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'power-bi-angular-integration';
  reportConfig:IReportEmbedConfiguration={
    type:'report',
    embedUrl:'',
    tokenType:models.TokenType.Embed,
    accessToken:'',
    settings:undefined,
  };
  @ViewChild(PowerBIReportEmbedComponent)
  reportObj!:PowerBIReportEmbedComponent;
  eventHandlersMap=new Map([
    [
      'loaded',
      ()=>{
        const report=this.reportObj.getReport();
        report.setComponentTitle('Embedded report');
      }
    ],
    ['rendered',()=>console.log('Report has rendered')],
    [
      'error',
      (event?:service.ICustomEvent<any>)=>{
        if(event){
          console.error(event.detail);
        }
      },
    ],
    ['visualClicked',()=>console.log('visual clicked')],
    ['pageChanged',(event)=>''],
  ])as Map<
  string,
  (event?:service.ICustomEvent<any>,embeddedEntity?:Embed)=>void|null>;
  constructor(){}
    ngOnInit(){
      this.embedReport();
    }
  embedReport(){
    this.reportConfig={
      ...this.reportConfig,
      accessToken:'your token',
      //id='your reportId',
      embedUrl:'./../assets/dashboard.pbix'
    }
  }
}
