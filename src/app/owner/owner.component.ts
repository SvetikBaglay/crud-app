import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICarOwnersService } from '../icarowners.service';
import { OwnerEntity } from '../owner';
import { faArrowCircleLeft,faSave, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})

export class OwnerComponent implements OnInit {
  owner: OwnerEntity;
  faArrowCircleLeft = faArrowCircleLeft;
  faSave = faSave;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;

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
