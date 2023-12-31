import { Injectable } from '@angular/core';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { Songs } from '../models/songs';
import { addDoc, collection, deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private firestore:Firestore) { }
  
  addSong(songs: Songs){
    let $songRef = collection(this.firestore, "Songs");
    return addDoc($songRef, songs);
  }

  getSongs(){
    let $songRef = collection(this.firestore, "Songs");
    return collectionData($songRef,{idField:"id"}) as Observable<Songs[]>;
  }

  deleteSong(id: string){
    let $songRef = doc(this.firestore, "Songs/"+id);
    return deleteDoc($songRef);
  }

  getSong(id: string){
    let $songRef = doc(this.firestore, "Songs/"+id);
    return docData($songRef,{idField:"id"}) as Observable<Songs>;
  }


  editSong(id: string, song: Songs){
    let $songRef = doc(this.firestore, "Songs/"+id);
    return setDoc($songRef,song);
  }

}
