import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from '../brand.service';
import { CartService } from '../cart.service';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
})
export class GallaryComponent {
  categories = [];
  brands = [];
  products = [];
  categoryId = 0;
  brandId = 0;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private brandservice: BrandService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllCategories();
    this.getAllBrands();
    this.filterProducts();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((response: any) => {
      if (response.status == 'success') this.categories = response.data;
      else this.toastr.error(response.error);
    });
  }

  getAllBrands() {
    this.brandservice.getAllBrands().subscribe((response: any) => {
      if (response.status == 'success') this.brands = response.data;
      else this.toastr.error(response.error);
    });
  }

  filterProducts() {
    this.productService
      .filterProducts(this.categoryId, this.brandId)
      .subscribe((response: any) => {
        if (response.status == 'success') this.products = response.data;
        else this.toastr.error(response.error);
      });
  }

  addToCart(product: any) {
    this.cartService
      .addToCart(product.id, product.price, 1)
      .subscribe((response: any) => {
        if (response.status == 'success')
          this.toastr.success('Product Added To Cart');
        else this.toastr.error(response.error);
      });
  }
}
