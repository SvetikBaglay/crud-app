import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICarOwnersService } from '../icarowners.service';
import { OwnerEntity } from '../owner';


@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  owners: OwnerEntity[] = [];

  constructor(
    private route: ActivatedRoute,
    private icarOwnersService: ICarOwnersService,
    private router: Router) { }

  disabled: boolean = false;

  navigateEditOwner = () => {
    this.router.navigate(['/owners'])
  }

  changeEvent(e: MouseEvent) {
    this.disabled = true;
  }

   ngOnInit(): void  {
     this.icarOwnersService.getOwners().subscribe(owners => this.owners = owners);
    console.log("owners: ", this.owners)
  }


}


