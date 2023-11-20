import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  Github,
  Linkedin,
  LucideAngularModule,
  Moon,
  Sun,
} from 'lucide-angular';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LucideAngularModule.pick({ Github, Linkedin, Moon, Sun }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
