import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    return true;
  }
}
