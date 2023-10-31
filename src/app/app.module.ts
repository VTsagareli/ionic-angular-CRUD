import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
     provideFirebaseApp(() => initializeApp({"projectId":"ionic-angular-crud-d4ccb","appId":"1:192074076058:web:8c308f46ed542d4099b423",
     "databaseURL":"https://ionic-angular-crud-d4ccb-default-rtdb.europe-west1.firebasedatabase.app",
     "storageBucket":"ionic-angular-crud-d4ccb.appspot.com","apiKey":"AIzaSyAFWuNI0r31d9mJ1QWp0ApQf_rQfm3a5cQ",
     "authDomain":"ionic-angular-crud-d4ccb.firebaseapp.com","messagingSenderId":"192074076058",
     "measurementId":"G-S3GP0ECGVG"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
