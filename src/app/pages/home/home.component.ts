import { from } from 'rxjs';
import { IsStation } from '../../model/train';
import { TrainService } from './../../service/train.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  trainService=inject(TrainService)
  router=inject(Router)
  stationList:IsStation[]=[];
  fromStationId:number=0;
  toStationId:number=0;
  dateOfJourney:string='';
ngOnInit(): void {
  this.loadAllStations();
  
}
loadAllStations(){
  debugger
  this.trainService.getAllStations().subscribe((res:any)=>{
this.stationList=res.data;
  })
}
onSearch(){
   if (this.fromStationId==0||this.toStationId==0||this.dateOfJourney==''){
    alert('Please select all fields');
   }else if(this.fromStationId==this.toStationId){
    alert('From and To station cannot be same');
   }else{
this.router.navigate(['/search',this.fromStationId,this.toStationId,this.dateOfJourney]);
   }
}
}
