import { Component, OnInit } from '@angular/core';
import { OptionService } from 'src/app/core/services/option.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private optionService: OptionService) { }
  option: string;

  ngOnInit(): void {
    this.option = this.optionService.getChosenOption.toUpperCase();
  }

  handleHomeClick() {
    this.optionService.handleExit();
  }
}
