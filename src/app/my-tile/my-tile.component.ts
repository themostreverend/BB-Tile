import { Component, OnInit } from '@angular/core';
import { SkyAlertModule } from '@skyux/indicators';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';
import { AddinClientInitArgs } from '@blackbaud/sky-addin-client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'test',
  standalone: true,
  imports: [CommonModule, SkyAlertModule],
  templateUrl: './my-tile.component.html',
  styleUrls: ['./my-tile.component.css']
})
export class MyTileComponent implements OnInit {
  public environmentId: string | undefined;
  public context: string | undefined;
  public userIdentityToken: string | undefined;

  constructor(
    private addinClientService: AddinClientService
  ) {}

  public ngOnInit() {
    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      this.environmentId = args.envId;
      this.context = JSON.stringify(args.context, undefined, 2);

      args.ready({
        showUI: true,
        title: 'My tile'
      });
    });
  }

  public getUserIdentityToken() {
    this.userIdentityToken = undefined;

    this.addinClientService.getUserIdentityToken().subscribe((token: string) => {
      this.userIdentityToken = token;
    });
  }
}