import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DialogService} from "../../auth/dialog.service";

@Component({
  selector: 'app-manage-crises',
  templateUrl: './manage-crises.component.html',
  styleUrls: ['./manage-crises.component.css']
})
export class ManageCrisesComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }


  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }
}
