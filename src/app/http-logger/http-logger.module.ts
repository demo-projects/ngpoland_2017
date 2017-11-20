import {NgModule, InjectionToken, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FLAG} from './tokens';


@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class HttpLoggerModule {

  static setup(flag: boolean): ModuleWithProviders {
      return {
        ngModule: HttpLoggerModule,
        providers: [{
          provide: HTTP_INTERCEPTORS,
          useClass: LoggerService,
          multi: true
        },
          {
            provide: FLAG,
            useValue: flag
          }

        ]
      }
  }


}
