import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { HistorialTecnologicoComponent } from './historial-tecnologico/historial-tecnologico.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'Usuarios', component: UsuarioListComponent },
    { path: 'Historial', component: HistorialTecnologicoComponent },
    { path: 'Inventario', component: InventarioComponent },
    { path: 'Productos', component: ProductosComponent },
    { path: 'Categorias', component: CategoriasComponent },
    { path: 'Proveedores', component: ProveedoresComponent },
    { path: 'Devoluciones', component: DevolucionesComponent },
    { path: 'empty', component: Empty },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
