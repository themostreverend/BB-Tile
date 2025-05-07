import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { SkyAlertModule } from '@skyux/indicators';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(SkyAlertModule),
    AddinClientService
  ]
};