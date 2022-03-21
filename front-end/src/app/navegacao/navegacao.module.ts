import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { AppRoutingModule } from "../app-routing.module";

import { NotFoundComponent } from "./not-found/not-found.component";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MenuLoginComponent } from "./menu-login/menu-login.component";
@NgModule({
    declarations: [
        HomeComponent,
        FooterComponent,
        MenuComponent,
        MenuLoginComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
    ],
    exports: [
        HomeComponent,
        FooterComponent,
        MenuComponent,
        NotFoundComponent
    ]
})

export class NavegacaoModule { }