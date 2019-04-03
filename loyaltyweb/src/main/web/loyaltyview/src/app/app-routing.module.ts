import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'search',component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//export const routing = RouterModule.forRoot(APP_ROUTES);
export class AppRoutingModule { }
