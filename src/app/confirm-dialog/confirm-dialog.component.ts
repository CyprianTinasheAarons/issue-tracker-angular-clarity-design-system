import { Component, OnInit , EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() issueNo: number | null = null;
  @Output() confirm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

  }

  agree(): void {
    this.confirm.emit(true);
    this.issueNo = null;
  }

  disagree(): void {
    this.confirm.emit(false);
    this.issueNo = null;
  }


}
