import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placing-request',
  templateUrl: './placing-request.component.html',
  styleUrls: ['./placing-request.component.css'],
})
export class PlacingRequestComponent {
  price: number | undefined;
  constructor(private activatedroute: ActivatedRoute) {}
  ngOnInit() {
    this.price = history.state.price;
  }
}
