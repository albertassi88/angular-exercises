import { Component, OnInit } from '@angular/core';
import { ApisService } from './apis.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {

  constructor(private apiService: ApisService) { }

  ngOnInit() {
    this.apiService.get().subscribe(result => {
      console.log(result)
    });
  }

}
