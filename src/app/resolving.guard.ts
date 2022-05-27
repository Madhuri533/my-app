import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ResolvingServerService } from './resolving-server.service';

@Injectable({
  providedIn: 'root'
})
export class ResolvingGuard implements Resolve<any> {

  constructor(private rss:ResolvingServerService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
    return this.rss.userid;

  }
  
}
