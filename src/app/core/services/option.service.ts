import { Injectable, EventEmitter } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  public optionEvents = new EventEmitter<boolean>();
  private userChosenOption = false;
  private chosenOption: string;

  constructor(
    private router: Router
  ) {
    const aux = localStorage.getItem('option');
    this.userChosenOption = !!aux;
    if (this.hasChosenOption) {
      this.chosenOption = JSON.parse(aux);
    }
  }

  handleOptionChoose(option: string) {
    localStorage.setItem('option', JSON.stringify(option));
    this.chosenOption = option;
    this.userChosenOption = true;
    this.optionEvents.emit(true);
    this.router.navigate(['/' + option]);
  }

  handleExit() {
    localStorage.clear();
    this.chosenOption = null;
    this.userChosenOption = false;
    this.optionEvents.emit(false);
    this.router.navigate(['/choose']);
  }

  get hasChosenOption() {
    return this.userChosenOption;
  }

  get getChosenOption() {
    return this.chosenOption;
  }
}

@Injectable()
export class OptionGuardService implements CanActivate {
  constructor(private router: Router, private optionService: OptionService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const hasChosenOption = this.optionService.hasChosenOption;
    const isOnlyNotLoggedIn = route.routeConfig.path === 'choose';

    if (hasChosenOption) {
      this.router.navigate(['/']);
    }

    if (!hasChosenOption || isOnlyNotLoggedIn) {
      this.router.navigate(['/choose']);
    }

    return hasChosenOption || !isOnlyNotLoggedIn;
  }
}
