import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import {AuthokToItemsGuard} from './authok-to-items.guard';

const routes: Routes = [
    { path: 'title', component: LoginComponent, canActivate: [AuthokToItemsGuard] },
    { path: '', redirectTo: '/title', pathMatch: 'full' },
    {path: 'items', component: ItemsComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [AuthokToItemsGuard],
})
export class AppRoutingModule {}