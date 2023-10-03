import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Libraries } from 'src/app/models/libraries';
import { LibrariesService } from 'src/app/services/libraries.service';

@Component({
  selector: 'app-alllibraries',
  templateUrl: './alllibraries.component.html',
  styleUrls: ['./alllibraries.component.css']
})
export class AlllibrariesComponent /*implements OnInit*/ {

  libraries: Libraries[] = [];
  library: Libraries={};

  currentPage = 1;
  librariesPerPage = 10;

  constructor(private router: Router, private db_libraries: LibrariesService, private activatedRoute : ActivatedRoute) {
    /*Pour afficher la totalité des listes de librairies*/
    this.db_libraries.getLibraries().subscribe((data) => {
      console.log(data);
      this.libraries = data;
    });
  }

/*
  ngOnInit(): void {
  }
*/

  /*fonction on submit pour enregistrer*/
  onSubmit(form: NgForm) {
    this.db_libraries.addLibrary(form.value)
      .then((data) => {
        console.log(data);

      })
      .catch((err) => {
        console.log(err);
      });
  }

  removeLibrary(library_id: any) {
    this.db_libraries.deleteLibrary(library_id)
      .then((data) => {
        console.log(data);

      })
      .catch((err) => {
          console.log(err);
      });
  }

  showLibraryDetails(library_id: any){
    this.db_libraries.getLibrary(library_id)
    .subscribe((data)=>{
      this.library = data;
    })
  }

  /*Début de la gestion de la pagination en mode liste*/
  get startIndex(): number {
    return (this.currentPage - 1) * this.librariesPerPage;
  }

  get endIndex(): number {
    return this.currentPage * this.librariesPerPage;
  }

  get displayedItems(): any[] {
    return this.libraries.slice(this.startIndex, this.endIndex);
  }

  /*Gestion des boutons next et previous en mode liste*/
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  
  nextPage(): void {
    if (this.endIndex < this.libraries.length) {
      this.currentPage++;
    }
  }

  /*Pour l'affichage en mode folder*/
  getItemsInColumns(): any[][] {
    const itemsPerColumn = 4;
    const itemsInColumns: any[][] = [];
    for (let i = 0; i < this.libraries.length; i += itemsPerColumn) {
      itemsInColumns.push(this.libraries.slice(i, i + itemsPerColumn));
    }
    return itemsInColumns;
  }

}
