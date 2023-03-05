
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AdminService } from "./admin.service";
import { Injectable , Injector} from '@angular/core';



@Injectable()

export class AuthInterceptor implements HttpInterceptor {


    constructor(private injector : Injector) { }

    intercept(req, next) {
      let authService = this.injector.get(AdminService)
      let tokenizedReq = req.clone({
        setHeaders : {
          Authorization : `Bearer ${authService.getToken1()}`
        }
      })
      return next.handle(tokenizedReq)
    }
}
