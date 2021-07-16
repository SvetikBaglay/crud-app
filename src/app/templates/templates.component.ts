import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICarOwnersService } from '../icarowners.service';
import { OwnerEntity } from '../owner';


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  errorMessage = '';

  owners$: Observable<OwnerEntity[]>;

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


  ngOnInit(): void {
     this.owners$ =  this.icarOwnersService.getOwners()
  }


}
