import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionEnum } from 'src/app/core/enums/option';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedOption: OptionEnum;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('cats')) {
      this.selectedOption = OptionEnum.CATS;
    } else if (this.router.url.includes('dogs')) {
      this.selectedOption = OptionEnum.DOGS;
    }
  }
}
