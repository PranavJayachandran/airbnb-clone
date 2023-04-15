import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placing-request',
  templateUrl: './placing-request.component.html',
  styleUrls: ['./placing-request.component.css'],
})
export class PlacingRequestComponent {
  price: number | undefined;
  image: string | undefined;
  name: string | undefined;
  host: string | undefined;
  number: string = '';
  code: string = '+91';

  selectedCode: option;
  options: option[];
  constructor(
    private activatedroute: ActivatedRoute,
    private location: Location
  ) {
    this.options = [
      {
        id: 1,
        code: '+91',
        value: 'IND',
      },
      {
        id: 2,
        code: '+1',
        value: 'US',
      },
      {
        id: 3,
        code: '+44',
        value: 'UK',
      },
    ];
    this.selectedCode = this.options[0];
  }
  ngOnInit() {
    this.price = history.state.price;
    this.image = history.state.image;
    this.name = history.state.name;
    this.host = history.state.host;
  }

  goBackToPrevPage(): void {
    this.location.back();
  }
}

interface option {
  id: number;
  code: string;
  value: string;
}
