import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { BodyComponent } from './components/layouts/body/body.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { MyformsComponent } from './components/myforms/myforms.component';
import { MyapiComponent } from './components/myapi/myapi.component';
import { MycontactComponent } from './components/mycontact/mycontact.component';

const appRoutes: Routes = [

    {
        path:'',
        component: BodyComponent
    },
       
    {
        path:'myforms',
        component: MyformsComponent
    },
    {
        path:'myapi',
        component: MyapiComponent
    },
    {
        path:'mycontact',
        component: MycontactComponent
    }


];

export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);