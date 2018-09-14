import { Injectable } from '@angular/core';
import {ajax} from 'rxjs/internal/observable/dom/ajax';
import {Moder} from './moder';
import { CookieService } from 'ngx-cookie-service';
import { ErrorService } from './error.service';



@Injectable({
  providedIn: 'root'
})
export class ModerService {
    protected static admin = null;
    constructor(private cookieService: CookieService, private errorService: ErrorService) {

  }
    public login(moder: Moder) {
        ajax.post('http://lowcost-env.cbgaq2vptb.us-west-2.elasticbeanstalk.com/api/auth/admin/login',
            JSON.stringify ({ password: moder.password, email: moder.email  }))
            .subscribe(
                (data) => {
                        moder.token =  data.response.token;
                        ModerService.admin = moder;
                        this.cookieService.set( 'token',  data.response.token);
                        this.errorService.pushError('Login ok', '/items');
                    },
                (error) => {
                    this.errorService.pushError(error.response.error.message);
                    console.log(this.errorService.error);
                    moder.password = '';
                }
            );
    }
    public get token() {
        ModerService.admin = new Moder();
        ModerService.admin.token = this.cookieService.get('token');
        if (ModerService.admin) {
            return ModerService.admin.token;
        } else {
            return null;
        }
    }

}
