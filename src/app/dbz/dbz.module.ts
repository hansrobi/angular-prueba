import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddDbzCharacterComponent } from './components/add-dbz-character/add-dbz-character.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, AddDbzCharacterComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
