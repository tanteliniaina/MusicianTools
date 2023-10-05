import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Songs } from 'src/app/models/songs';
import { SongsService } from 'src/app/services/songs.service';


@Component({
  selector: 'app-detailssongs',
  templateUrl: './detailssongs.component.html',
  styleUrls: ['./detailssongs.component.css']
})
export class DetailssongsComponent {

  song_id: any;
  song: Songs = {};

  constructor(private db_song: SongsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.song_id = this.activatedRoute.snapshot.params["id"];
    this.db_song.getSong(this.song_id)
      .subscribe((data) => {
        this.song = data;
      })
  }

  onSubmit(form: NgForm) {
    this.db_song.editSong(this.song_id, form.value)
      .then((data) => {
        console.log(data);
        this.router.navigate(['/allsongs']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onCancel() {
    this.router.navigate(['/allsongs']);
  }
}
