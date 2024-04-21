import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  avg:number =0;
  constructor(private serieService: SerieService) { }
  getSerieList() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.avg=this.getSeasonsAVG(series);
  });
  }

  getSeasonsAVG(series:Serie[]):number{
    let seasonsTotal:number = 0;
    series.forEach((serie)=> seasonsTotal=seasonsTotal+serie.seasons);
    return seasonsTotal/series.length;
}

  ngOnInit() {
    this.getSerieList();
  }

}


