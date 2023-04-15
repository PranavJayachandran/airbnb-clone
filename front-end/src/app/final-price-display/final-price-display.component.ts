import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-final-price-display',
  templateUrl: './final-price-display.component.html',
  styleUrls: ['./final-price-display.component.css'],
})
export class FinalPriceDisplayComponent {
  @Input() price: number | undefined;
  @Input() image: string | undefined;
  @Input() name: string | undefined;
  @Input() host: string | undefined;
}
