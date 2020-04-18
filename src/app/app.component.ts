import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';
import { FirebaseDataService } from "./services/firebase-data.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
email

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Profile',
      url: 'profile',
      icon: 'person'
    },
    // {
    //   title: 'Login',
    //   url: 'login',
    //   icon: 'log-in'
    // },
    // {
    //   title: 'Favorites',
    //   url: '/folder/Favorites',
    //   icon: 'heart'
    // },
    // {
    //   title: 'Archived',
    //   url: '/folder/Archived',
    //   icon: 'archive'
    // },
    // {
    //   title: 'Log out',
    //   url: '/folder/Trash',
    //   icon: 'power'
    // },
    {
      title: 'Feedback',
      url: 'feedback',
      icon: 'help-circle'
    },
    {
      title: 'About us',
      url: 'aboutus',
      icon: 'people'
    }

  ];
  // public labels = [{"icon":"settings","labels":"Setting"},{"icon":"help-circle","labels":"Feedback"},{"icon":"power","labels":"Log out"}];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private afAuth:AngularFireAuth,
    private storage: Storage,
    private fds: FirebaseDataService,
  ) {
    
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
     
      
      this.router.navigateByUrl('welcome')
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

  ngOnInit() {
// this.email=this.afAuth.auth.currentUser.email
this.email=this.fds.email
console.log(this.email)
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }






  signout(){
    
     this.afAuth.auth.signOut().then(()=>{
      console.log("signout")
      this.storage.remove('currentUser').then((val)=>{
        this.router.navigateByUrl("/login");
      })
      
     }).catch(error=>{
       console.log("An error happened.")
     })

     
    
  }
}
