import { Component, Input } from '@angular/core';
import { Area } from 'area';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent {
  @Input() area: Area | undefined;
  toggleLike(liked: boolean | undefined): void {
    this.area = { ...this.area, liked: !liked };
    if (this.area.id !== undefined) this.areaService.toggleLike(this.area.id);
  }
  constructor(private areaService: AreaService) {}

  ngOnInit() {
    // console.log('HER', this.area?.name);
  }
}
