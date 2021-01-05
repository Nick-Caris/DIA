import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {faTrash} from '@fortawesome/free-solid-svg-icons';


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
  trash;


  constructor(private http: HttpClient) {
    this.trash = faTrash;
  }

  ngOnInit(): void {
    this.getWeapons().subscribe(weapons => {
      this.weapons = weapons;
    });
  }

  refreshWeapons() {
    this.getWeapons().subscribe(weapons => {
      this.weapons = weapons;
    });
  }

  getWeapons() {
    return this.http.get(this.getUrl);
  }

  removeWeapon(id) {
    this.http.delete('http://localhost:8080/weapon/' + id).subscribe();
    this.refreshWeapons();

  }

}
