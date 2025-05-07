import { Routes } from '@angular/router';
import { MyTileComponent } from './my-tile/my-tile.component';

export const routes: Routes = [
  { path: 'addin-hello-world', children: [
    { path: 'my-tile', component: MyTileComponent }
  ]}
];