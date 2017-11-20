import {Injectable, Inject} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import {FLAG} from './tokens';


@Injectable()
export class LoggerService implements HttpInterceptor{

  constructor(@Inject(FLAG) private flag ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler){
    this.flag ? console.table(req) : false;
    return next.handle(req);
  }


}
