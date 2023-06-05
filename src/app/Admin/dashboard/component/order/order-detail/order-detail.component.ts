import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(
    private admin: ApiService,
    // private data_service: ComponentService,
    private toastr: ToastrService,
    private router: Router,
    private _router: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  // order_detail: any;
  // order_product: any;
  // get_order_id(id: number) {
  //   this.id = id;
  //   this.admin.get_order_id(this.id).subscribe((data) => {
  //     this.order_detail = data.data;
  //     this.order_product = data.data.order_details;
  //     console.log('ddd', this.order_product);
  //   });
  // }
}
