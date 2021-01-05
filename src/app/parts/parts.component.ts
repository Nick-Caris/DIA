import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

  private getUrl = 'http://localhost:8080/parts';

  // tslint:disable-next-line:ban-types
  parts: Object = [
    {
      id: null,
      amount: null,
      amount_working: null,
      comment: null,
      name: null,
      weapons: null,
    }
  ];
  trash;


  constructor(private http: HttpClient) {
    this.trash = faTrash;
  }

  ngOnInit(): void {
    this.getParts().subscribe(parts => {
      this.parts = parts;
    });
  }

  refreshParts() {
    this.getParts().subscribe(parts => {
      this.parts = parts;
    });
  }

  getParts() {
    return this.http.get(this.getUrl);
  }

  removePart(id) {
    this.http.delete('http://localhost:8080/part/' + id).subscribe();
    this.refreshParts();
  }

}
