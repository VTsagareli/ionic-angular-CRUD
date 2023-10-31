import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';



// const querySnapshot = await getDocs(collection(db, "Users"));


// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private firestore: Firestore) { }

  getUsers(){
    const usersRef = collection(this.firestore, 'Users')
    return collectionData(usersRef)
  }




}
