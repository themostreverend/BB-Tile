import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SkyAlertModule } from '@skyux/indicators'; // Make sure this import exists
import { AppComponent } from './app.component';
import { MyTileComponent } from './my-tile/my-tile.component';
import { RouterModule } from '@angular/router';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';

@NgModule({
  declarations: [
    AppComponent,
    MyTileComponent
  ],
  imports: [
    BrowserModule,
    SkyAlertModule, // Make sure SkyAlertModule is in the imports array
    RouterModule.forRoot([
      { path: 'addin-hello-world', children: [
        { path: 'my-tile', component: MyTileComponent}
      ]}
    ]),
  ],
  providers: [AddinClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }