import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CardModule } from './shared/components/card/card.module';
import { SpinnerModule } from './shared/components/spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, BrowserModule, SpinnerModule, CardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
