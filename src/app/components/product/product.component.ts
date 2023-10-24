import { Component, Input } from '@angular/core';
import {Product} from './../../models/product.model';
import { NgOptimizedImage ,CommonModule } from '@angular/common'

@Component({
  standalone : true,
  imports : [NgOptimizedImage, CommonModule],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product = {
    title : "",
    price : 0,
    images : [],
    id: 0
  };

}
