import { Subject } from "rxjs";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-confirm-modal",
  templateUrl: "./confirm-modal.component.html",
  styleUrls: ["./confirm-modal.component.scss"]
})
export class ConfirmModalComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() cancel: string = "Cancelar";
  @Input() confirm: string = "Confirmar";

  confirmResult: Subject<boolean>;

  constructor(public BsModalRef: BsModalRef) {}

  ngOnInit() {
    this.confirmResult = new Subject();
  }

  onConfirm() {
    this.confirmAndClose(true);
  }

  onClose() {
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean) {
    this.confirmResult.next(value);
    this.BsModalRef.hide();
  }
}
