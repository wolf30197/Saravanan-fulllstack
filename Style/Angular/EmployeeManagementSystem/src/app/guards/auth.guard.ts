import { CanActivateFn } from '@angular/router';
import { CanrouteService } from '../service/canroute.service';
import { Inject,inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  return inject(CanrouteService).canRoute;
};
