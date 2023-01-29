import { Routes } from '@angular/router';
import {AuthGuard} from "../../core/guards/auth.guard";

export const AdminLayoutRoutes: Routes = [
    {
        path: 'dashboard',
        canActivate:([AuthGuard]),
        loadChildren: () => import('../../home/home.module').then(x => x.HomeModule)
    },
    {
        path: 'schedule',
        canActivate:([AuthGuard]),
        loadChildren: () => import('../../schedule/schedule.module').then(x => x.ScheduleModule)
    },
    {
        path: 'artist',
        canActivate:([AuthGuard]),
        loadChildren: () => import('../../artist/artist.module').then(x => x.ArtistModule)
    },
    {
        path: 'template',
        canActivate:([AuthGuard]),
        loadChildren: () => import('../../template/template.module').then(x => x.TemplateModule)
    },
    {
        path: 'Billing',
        canActivate:([AuthGuard]),
        loadChildren: () => import('../../billing/billing.module').then(x => x.BillingModule)
    },
    {
        path: '',
        canActivate:([AuthGuard]),
        loadChildren: () => import('../../profile/profile.module').then(x => x.ProfileModule)
    },
    {
        path: '',
        canActivate:([AuthGuard]),
        loadChildren: () => import('../../appointments/appointments.module').then(x => x.AppointmentsModule)
    },
    {
          path: '',
          canActivate:([AuthGuard]),
          loadChildren: () => import('../../client/client.module').then(x => x.ClientModule)
    }
];
