import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './areas/areas.component';
import { AreaComponent } from './area/area.component';
import { RoomsComponent } from './rooms/rooms.component';
import { PlacingRequestComponent } from './placing-request/placing-request.component';

const routes: Routes = [
  { path: 'areas', component: AreasComponent },
  { path: 'room/:id', component: RoomsComponent },
  {
    path: 'placing_request',
    component: PlacingRequestComponent,
    data: { price: 1 },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
