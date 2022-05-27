import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UnSavedSearchComponent } from './un-saved-search/un-saved-search.component';

// @Injectable({
//   providedIn: 'root'
// })
export class UnsavedGuard implements CanDeactivate<UnSavedSearchComponent> {
  canDeactivate(component: UnSavedSearchComponent) {
       if (component.isDirty) {
         return window.confirm("are you sure");
       }
    return true;
  }
  
}
