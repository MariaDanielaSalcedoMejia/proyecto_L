import { Routes } from '@angular/router';
import { DeliciasNavidenasComponent } from './page/delicias-navidenas/delicias-navidenas.component';
import { FritosComponent } from './page/fritos/fritos.component';
import { PostresComponent } from './page/postres/postres.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { MatrimonioAnchetasComponent } from './page/matrimonio-anchetas/matrimonio-anchetas.component';
import { PATH } from './core/enum/path.enum';
import { SobreNosotrosComponent } from './page/sobre-nosotros/sobre-nosotros.component';

export const routes: Routes = [
  {
    path: PATH.HOME,
    title: 'inicio',
    children: [
      {
        path: PATH.HOME,
        title: 'inicio',
        component: InicioComponent,
      },
      {
        path: PATH.DELICIAS_NAVIDENAS,
        title: 'Delicias Navideñas',
        component: DeliciasNavidenasComponent,
      },
      {
        path: PATH.FRITOS,
        title: 'Fritos',
        component: FritosComponent,
      },
      {
        path: PATH.POSTRES,
        title: 'Postres',
        component: PostresComponent,
      },
      {
        path: PATH.MATRIMONIOS_ANCHETAS,
        title: 'Matrimonios y anchetas',
        component: MatrimonioAnchetasComponent,
      },
      {
        path: PATH.SOBRE_NOSOTROS,
        title: 'Sobre nosotros',
        component: SobreNosotrosComponent,
      },
    ],
  },
];

