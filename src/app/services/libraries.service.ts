import { Injectable } from '@angular/core';
import { Libraries } from '../models/libraries';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { addDoc, collection, deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class LibrariesService {

  constructor(private firestore:Firestore) { }
  
  addLibrary(libraries: Libraries){
    let $libraryRef = collection(this.firestore, "Libraries");
    return addDoc($libraryRef, libraries);
  }

  getLibraries(){
    let $libraryRef = collection(this.firestore, "Libraries");
    return collectionData($libraryRef,{idField:"id"}) as Observable<Libraries[]>;
  }

  deleteLibrary(id: string){
    let $libraryRef = doc(this.firestore, "Libraries/"+id);
    return deleteDoc($libraryRef);
  }

  getLibrary(id: string){
    let $libraryRef = doc(this.firestore, "Libraries/"+id);
    return docData($libraryRef,{idField:"id"}) as Observable<Libraries>;
  }


  editLibrary(id: string, libraries: Libraries){
    let $libraryRef = doc(this.firestore, "Libraries/"+id);
    return setDoc($libraryRef,libraries);
  }
}
