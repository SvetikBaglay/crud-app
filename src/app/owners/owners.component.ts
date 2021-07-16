import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { ICarOwnersService } from '../icarowners.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})

export class OwnersComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private icarOwnersService: ICarOwnersService
    ) { }

  ngOnInit() {

  }

}
