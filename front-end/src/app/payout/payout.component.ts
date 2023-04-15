import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css'],
})
export class PayoutComponent {
  @Input() price: number | undefined;
  @Input() image: string | undefined;
  @Input() room_name: string | undefined;
  @Input() host_name: string | undefined;
}
