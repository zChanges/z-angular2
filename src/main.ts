import { platformBrowserDynamic }      from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';
import './../node_modules/ag-grid/dist/styles/ag-grid.css';
import './../node_modules/ag-grid/dist/styles/theme-fresh.css';
import './favicon.ico'
platformBrowserDynamic().bootstrapModule(AppModule);
