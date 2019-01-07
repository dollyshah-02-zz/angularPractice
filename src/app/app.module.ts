import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VehicleModule } from './vehicle/vehicle.module';
import{FormsModule} from '@angular/forms';
import { PracticeModule } from './practice/practice.module';

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    VehicleModule,
    FormsModule,
    PracticeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {




 }
