import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OptionService } from './core/services/option.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;

  title = 'app';
  hasChosenOption = false;

  constructor(private optionService: OptionService) { }

  ngOnInit() {
    this.hasChosenOption = this.optionService.hasChosenOption;

    this.authSubscription = this.optionService.optionEvents
      .asObservable()
      .subscribe(aBoolean => {
        this.hasChosenOption = aBoolean;
      });
  }

  ngOnDestroy() {
    console.log('On Destroy');
    this.authSubscription.unsubscribe();
  }
}
