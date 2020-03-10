import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


// Ihre Aufgabe ist es ausschließlich, den Bootsrapping-Prozess von Angular mit unserem AppModule anzustoßen.


// Konfiguration für verschiedene Umgebungen. In jeder environment.ts ist ein flag was auf true geprüft wird
// ...in der environment.prod.ts z. B. production: true

if (environment.production) {
  enableProdMode();
}


// Bootstrapping-Prozess mit dem AppModule starten
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
