import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainService } from '../../service/train.service';
import { Search } from '../../model/train';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
activatedRoute=inject(ActivatedRoute);
trainService=inject(TrainService);
searchData:Search=new Search();
// trainList:ITrain[]=[];
//  selectedTrain?:ITrain
constructor(){
  this.activatedRoute.params.subscribe((res:any)=>{
    debugger
    this.searchData=res
    this.getTrainSearch();
    console.log(res['from'],res['to'],res['date']);
  })
}
getTrainSearch(){
  this.trainService.getTrainSearch(this.searchData.fromStationId, this.searchData.toStationId, this.searchData.dateOfJourney).subscribe((res:any)=>{
    console.log(res);
  })
}
  showBooking = false;

  openBooking() {
    this.showBooking = true;
  }

  closeBooking() {
    this.showBooking = false;
  }

}
