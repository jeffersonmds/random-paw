import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/core/services/dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  urlRandomPicture: string;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.dogService.getRandom().subscribe(res => {
      if (res.status === 'success') {
        this.urlRandomPicture = res.message;
      }
    });
  }
}
