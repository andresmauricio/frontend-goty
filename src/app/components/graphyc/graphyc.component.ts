import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-graphyc',
  templateUrl: './graphyc.component.html',
  styleUrls: ['./graphyc.component.scss']
})
export class GraphycComponent implements OnInit, OnDestroy {

  @Input() public results: any;
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votes';
  showYAxisLabel = true;
  yAxisLabel = 'Games';
  colorScheme = 'nightLights';
  interval;

  constructor() {  
    // this.interval = setInterval(() => {
    //   const newResult = [...this.results];
    //   for (let i in newResult) {
    //     newResult[i].value = Math.round(Math.random() * 500);
    //   }
    //   this.results = [...newResult];
    // }, 1500)
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

}
