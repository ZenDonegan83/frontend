import { Component, ElementRef, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { TranslationService } from "../../core/services/transalation.service";
import { ROUTES } from "../sidenav/sidenav.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  private listTitles: any[];
  location: Location;
  private toggleButton: any;
  private sidebarVisible: boolean;
  selectedLanguage: any = 'en';
  translation :any = [];
  languages = [
    {
      "lang":"en",
      "label":"English"
    },
    {
      "lang":"de",
      "label":"German"
    }
  ];

  constructor(location: Location,  private element: ElementRef , private route:Router, private translationService:TranslationService) {
    this.location = location;
    this.sidebarVisible = false;
  }

  ngOnInit(){
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

    this.translationService.language.subscribe((res: any) => {
      //console.log("selectedLanguage", res);
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.user_dropdown;
        // console.log(this.translation);
      });
    });


  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['login']);
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function(){
      toggleButton.classList.add('toggled');
    }, 500);
    body.classList.add('nav-open');

    this.sidebarVisible = true;
  };
  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  };
  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
      titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
      if(this.listTitles[item].path === titlee){
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }
  changeLanguage(lang:any){
    console.log(lang);
    this.translationService.setLang(lang);
    this.selectedLanguage = lang;
  }

}
