import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Songs } from 'src/app/models/songs';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-allsongs',
  templateUrl: './allsongs.component.html',
  styleUrls: ['./allsongs.component.css']
})

export class AllsongsComponent /*implements OnInit*/ {

  songlist: Songs[] = [];

  constructor(private router: Router, private db_song: SongsService) {
    this.db_song.getSongs().subscribe((data) => {
      console.log(data);
      this.songlist = data;
    });
  }
/*
  ngOnInit(): void {
  }
  */

  /*fonction on submit pour enregistrer*/
  onSubmit(form: NgForm) {
    this.db_song.addSong(form.value)
      .then((data) => {
        console.log(data);

      })
      .catch((err) => {
        console.log(err);
      });
  }

  /*on cancel pour la redirection*/
  onCancel() {
    this.router.navigate(['/allsongs']);
  }

  removeSong(song_id: any) {
    this.db_song.deleteSong(song_id)
      .then((data) => {
        console.log(data);

      })
      .catch((err) => {
          console.log(err);
      });
  }

}
