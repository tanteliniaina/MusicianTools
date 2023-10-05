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

  /*Pour les données*/
  songlist: Songs[] = [];
  song: Songs = {};

  /*Pour la pagination*/
  currentPage = 1;
  librariesPerPage = 10;

  /*Pour la recherche*/
  searchResults: Songs[] = [];
  searchTerm: string = '';

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

  showSongDetails(song_id: any) {
    this.db_song.getSong(song_id)
      .subscribe((data) => {
        this.song = data;
      })
  }

  resetSearch() {
    this.searchTerm = '';
    this.searchResults = [];
    this.songlist = [...this.songlist]; // Restore the original list
  }

  search() {
    this.songlist = this.songlist.filter(song =>
      song.Title?.toString().toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      song.Artist?.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }



  /*Début de la gestion de la pagination en mode liste*/
  get startIndex(): number {
    return (this.currentPage - 1) * this.librariesPerPage;
  }

  get endIndex(): number {
    return this.currentPage * this.librariesPerPage;
  }

  get displayedItems(): any[] {
    return this.songlist.slice(this.startIndex, this.endIndex);
  }

  /*Gestion des boutons next et previous en mode liste*/
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.endIndex < this.songlist.length) {
      this.currentPage++;
    }
  }

}
