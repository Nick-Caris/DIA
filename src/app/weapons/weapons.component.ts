import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {

  private getUrl = 'http://localhost:8080/weapons';

  // tslint:disable-next-line:ban-types
  weapons: Object = [
    {
      id: null,
      weapon: null,
      grip: null,
      handedness: null,
      is_working: null,
      comment: null,
      is_borrowed: null,
      electric: null
    }
  ];


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getWeapons().subscribe(weapons => {
      this.weapons = weapons;
    });
  }

  getWeapons() {
    return this.http.get(this.getUrl);
  }

  removeWeapon(id) {
    console.log('remove' + id);
  }

}
