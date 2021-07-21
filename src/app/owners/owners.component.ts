import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICarOwnersService } from '../icarowners.service';
import { OwnerEntity } from '../owner';


@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})

export class OwnersComponent implements OnInit {
  owners: OwnerEntity[];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private icarOwnersService: ICarOwnersService
    ) { }

  getItems() {
    this.icarOwnersService.getOwners()
      .subscribe(owners => this.owners = owners);

  }

  back = () => {
    this.router.navigate(['/templates'])
  }

  ngOnInit() {
    console.log('on init');

    this.getItems()
  }

}
