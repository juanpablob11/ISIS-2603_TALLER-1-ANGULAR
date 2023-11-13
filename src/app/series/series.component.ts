import { Component, OnInit } from '@angular/core';
import { serie } from './serie';
import { DataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<serie> = [];
  promedio: number = 0;
  constructor(private SerieService: SerieService) { }

  getSeriesList(): Array<serie> {
    return DataSeries;
  }

  getSeries() {
    this.SerieService.getSeries().subscribe(series => {
      this.series = series;
      this.calculatePromedio();
    });
  }

  calculatePromedio() {
    let summary: number = 0;
    if (this.series.length > 0) {
      this.series.forEach(serie => {
        summary += serie.seasons;
      });
      this.promedio = summary / this.series.length;
    }
  }

  ngOnInit() {
    //this.series = this.getSeriesList();
    this.getSeries()
  }

}
