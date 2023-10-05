import { Component, OnInit } from '@angular/core';
import { Libraries } from 'src/app/models/libraries';
import { LibrariesService } from 'src/app/services/libraries.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailslibraries',
  templateUrl: './detailslibraries.component.html',
  styleUrls: ['./detailslibraries.component.css']
})
export class DetailslibrariesComponent /*implements OnInit */ {

  library_id: any;
  library: Libraries = {};

  constructor(private db_library: LibrariesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.library_id = this.activatedRoute.snapshot.params["id"];
    this.db_library.getLibrary(this.library_id)
      .subscribe((data) => {
        this.library = data;
      })
  }
  /*
    ngOnInit(): void {
    }
  */
}
