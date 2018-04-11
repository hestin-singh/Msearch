import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MservService } from './mserv.service';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [MservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
