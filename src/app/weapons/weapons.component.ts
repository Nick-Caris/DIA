import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {

  weapons = [
    // tslint:disable-next-line:max-line-length
    {id: 1, weapon: 'SABRE', grip: 'Links', handedness: 'Links', is_working: true, comment: 'hij werkt wel maar doet raar op woensdagen', is_borrowed: false, electric: true},
    {id: 2, weapon: 'FOIL', grip: 'Rechts', handedness: 'Links', is_working: false, comment: null, is_borrowed: false, electric: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
