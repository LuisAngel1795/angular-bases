import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServiceTsService } from '../services/dbz.service.ts.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(public dbzService: DbzServiceTsService){

  }

}
