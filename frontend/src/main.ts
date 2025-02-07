import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/feature/home/home.component';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter([
    { path: '', component: HomeComponent }
  ])]
})
.catch((err) => console.error(err));
