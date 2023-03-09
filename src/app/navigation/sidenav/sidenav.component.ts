import {Component, OnInit} from '@angular/core';
import {TranslationService} from "../../core/services/transalation.service";

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    isShowMenu: string;
}

export const ROUTES: RouteInfo[] = [
    {path: '/dashboard', title: 'Dashboard', icon: 'assets/img/dashboard-icon.svg', class: '', isShowMenu: 'Y'},
    {path: '/schedule', title: 'Schedule', icon: 'assets/img/calender.svg', class: '', isShowMenu: 'Y'},
    {path: '/client', title: 'Clients', icon: 'assets/img/clients-icon.svg', class: '', isShowMenu: 'Y'},
    {path: '/artist', title: 'Artists', icon: 'assets/img/artists-icon.svg', class: '', isShowMenu: 'Y'},
    {path: '/template', title: 'Templates', icon: 'assets/img/schedule-icon.svg', class: '', isShowMenu: 'Y'},
    {
        path: '/template/consent-form',
        title: 'Templates',
        icon: 'assets/img/schedule-icon.svg',
        class: '',
        isShowMenu: 'N'
    },
];

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
    menuItems: any[];
    selectedLanguage: any = 'en';
    translation: any = [];

    constructor(private translationService: TranslationService) {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter((menuItem) => {
            return menuItem.isShowMenu === 'Y';
        });
        this.translationService.language.subscribe((res: any) => {
            this.selectedLanguage = res;
            //if(this.selectedLanguage == 'en'){
            this.translationService.get().subscribe((data: any) => {
                this.translation = data.main_nav;
                this.menuItems.forEach((obj, index) => {
                    // console.log(obj);
                    if (obj.isShowMenu === 'Y') {
                        obj.title = this.translation[index];
                    }
                });
                console.log(this.translation)
                // console.log(this.translation);
            });
            //}

        });
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
