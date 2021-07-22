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
  owner: OwnerEntity;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private icarOwnersService: ICarOwnersService
    ) { }


  back = () => {
    this.router.navigate(['/owners'])
  }

  getOwnerByaIdItem(): void {
    const aId = +this.route.snapshot.params.aId;
    this.icarOwnersService.getOwnerById(aId).subscribe((owner) => {
      this.owner = owner;
      console.log('owner: ', owner);

    });
  }

  ngOnInit() {
    this.getOwnerByaIdItem();
  }
}
