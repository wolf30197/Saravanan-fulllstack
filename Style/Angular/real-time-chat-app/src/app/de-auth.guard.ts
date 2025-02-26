import { CanDeactivateFn } from '@angular/router';

export const deAuthGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
