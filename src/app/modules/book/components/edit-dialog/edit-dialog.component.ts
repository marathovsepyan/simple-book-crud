import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../../../../shared/models/book.interface';
import { DialogActionEnum } from '../../../../shared/models/dialog-action.enum';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.sass']
})
export class EditDialogComponent {
  public DialogActionEnum = DialogActionEnum;
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public book: Book) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
