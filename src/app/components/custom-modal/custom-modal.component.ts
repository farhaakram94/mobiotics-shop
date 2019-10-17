import { Component, OnInit, Input } from '@angular/core';
import { BroadcasterService } from 'src/app/services/broadcaster.service';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {
  @Input() show = false;
  @Input() customClass = '';
  @Input() checkoutMessage = '';
  @Input() cartTotal = 0;
  constructor(private broadcasterService: BroadcasterService) { }

  ngOnInit() {
  }

  closeCallback(){
    this.show = !this.show;
    this.broadcasterService.cartUpdated({qty: 0, total: 0});
  }

}
