import { Routes } from '@angular/router';
import { AuthGuard } from "../../core/guards/auth.guard";


export const LayoutRoutes: Routes = [

    {
        path: 'dashboard',
        canActivate:([AuthGuard]),
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'schedule',
        canActivate:([AuthGuard]),
        loadChildren: () => import('../schedule/schedule.module').then(m => m.ScheduleModule)
    },
    {
        path: 'client',
        canActivate:([AuthGuard]),
        loadChildren: () => import('../client/client.module').then(m => m.ClientModule)
    },
    {
        path: 'artist',
        canActivate:([AuthGuard]),
        loadChildren: () => import('../artist/artist.module').then(m => m.ArtistModule)
    },
    {
        path: 'template',
        canActivate:([AuthGuard]),
        loadChildren: () => import('../template/template.module').then(m => m.TemplateModule)
    },
    {
        path: 'billing',
        canActivate:([AuthGuard]),
        loadChildren: () => import('../billing/billing.module').then(m => m.BillingModule)
    },
    {
        path: 'profile',
        canActivate:([AuthGuard]),
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
    },
];