import { TutorialService } from 'src/app/services/tutorial.service';
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/tutorial.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  Videos?: Game[];
  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
    this.retrieveTutorials()
  }
  retrieveTutorials(): void {
    console.log("hello top");
    this.tutorialService.getAll()
      .subscribe(
        data => {
          console.log("hello bottom");
          this.Videos = data;
          console.log(this.Videos);
        },
        error => {
          console.log(error);
        });
  }

}
