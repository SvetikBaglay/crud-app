import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICarOwnersService } from '../icarowners.service';
import { OwnerEntity } from '../owner';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit, OnDestroy {
  errorMessage = '';
  owners: OwnerEntity[] = [];

  sub!: Subscription;

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
    this.sub = this.icarOwnersService.getOwners()
      .subscribe(
        owners => this.owners = owners,
        error => this.errorMessage = error
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
