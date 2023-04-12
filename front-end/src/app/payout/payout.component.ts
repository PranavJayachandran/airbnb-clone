import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css'],
})
export class PayoutComponent {
  @Input() price: number | undefined;
}
