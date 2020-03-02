import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/core/services/cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  constructor(private catService: CatService) { }

  ngOnInit(): void {
  }

}
