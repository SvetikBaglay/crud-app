import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICarOwnersService } from '../icarowners.service';
import { OwnerEntity } from '../owner';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})

export class OwnerComponent implements OnInit {
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
    this.router.navigate(['/owners'])
  }

  ngOnInit() {
    console.log('on init');

    this.getItems()
  }

}
