import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import {CanActivateGuard} from './can-activate.guard';

const routes: Routes = [
    { path: 'title', component: LoginComponent, canActivate: [CanActivateGuard] },
    { path: '', redirectTo: '/title', pathMatch: 'full' },
    {path: 'items', component: ItemsComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [CanActivateGuard],
})
export class AppRoutingModule {}