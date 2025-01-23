import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/character.inteface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-dbz-character.component.html',
  styleUrl: './add-dbz-character.component.css',
})
export class AddDbzCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { id: uuid(), name: '', power: 0 };
  }
}
