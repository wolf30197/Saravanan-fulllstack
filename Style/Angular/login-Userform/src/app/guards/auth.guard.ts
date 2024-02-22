import { CanActivateFn } from '@angular/router';
import { CanRouteService } from '../service/can-route.service';
import { Inject, inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(CanRouteService).canRoute;
};
