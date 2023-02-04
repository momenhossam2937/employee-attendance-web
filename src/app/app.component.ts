import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Logger } from './core/services/common/logger.service';
import { PrimeNGConfig } from 'primeng/api';
const log = new Logger('App Component');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig){}
  ngOnInit() {
    this.primengConfig.ripple = true;
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init app component');
  }
  title = 'employee-attendance-web';
}
