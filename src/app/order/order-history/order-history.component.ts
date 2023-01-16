import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent {
  orders = [];

  constructor(
    private service: OrderService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.service.getOrders().subscribe((response: any) => {
      if (response.status == 'success') {
        this.orders = response.data;
        this.orders.map((order: any) => {
          order.createdOn = order.createdOn.split('T')[0];
        });
      } else this.toastr.error(response.error);
    });
  }

  onCancel(id: number) {
    this.service.cancelOrder(id).subscribe((response: any) => {
      if (response.status == 'success') {
        this.toastr.success('Order Cancelled !');
        this.getOrders();
      } else this.toastr.error(response.error);
    });
  }
}
