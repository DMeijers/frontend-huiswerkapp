import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AgendaComponent} from './agenda/agenda.component';
import {HuiswerkComponent} from './huiswerk/huiswerk.component';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from './user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'huiswerk', component: HuiswerkComponent},
    {path: 'agenda', component: AgendaComponent},
    {path: '**', component: PagenotfoundComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AgendaComponent,
        HuiswerkComponent,
        RegisterComponent,
        UserComponent,
        PagenotfoundComponent,
        AdminComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
