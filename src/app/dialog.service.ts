import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogRef: MatDialogRef<DialogComponent>;

  constructor(public dialog: MatDialog) { }

  launchDialog(component: any,
               payload?: any,
               width?: number,
               height?: number) : MatDialogRef<DialogComponent> {
    return this.dialog.open(DialogComponent, {
      width: `${width}px`,
      height: `${height}px`,
      minHeight: 'min-content',
      disableClose: false,
      panelClass: 'popup-dialog',
      data:{component:component, payload:payload}
    });
  }

}
