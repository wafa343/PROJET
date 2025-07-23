import { Routes } from '@angular/router';
import { Login } from '../pages/Login/login';
import { Dashboard } from '../pages/Dashboard/dashboard';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'dashboard', component: Dashboard }
];
