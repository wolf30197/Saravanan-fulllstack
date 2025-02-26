import { CanDeactivateFn } from '@angular/router';

export const sanityGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
