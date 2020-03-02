import { Component, OnInit } from '@angular/core';
import { OptionService } from 'src/app/core/services/option.service';

@Component({
  selector: 'app-choose-option',
  templateUrl: './choose-option.component.html',
  styleUrls: ['./choose-option.component.scss']
})
export class ChooseOptionComponent implements OnInit {

  constructor(private optionService: OptionService) { }

  ngOnInit(): void {
  }

  handleOptionChoose(opt: string) {
    this.optionService.handleOptionChoose(opt);
  }
}
