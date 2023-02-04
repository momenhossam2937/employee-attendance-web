import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpService } from './interceptors/http.service';
import { RouteReusableStrategy } from './services/common/route-reusable-strategy';
import { SharedModule } from '../shared/shared.module';
import { WINDOW_PROVIDERS } from './services/common/window.service';
// import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
      provide: HttpClient,
      useClass: HttpService
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    },
    WINDOW_PROVIDERS
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`
      );
    }
  }
}
