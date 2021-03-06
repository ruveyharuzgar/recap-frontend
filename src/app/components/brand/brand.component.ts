import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand = { brandId: -1, brandName: '' };
  dataLoaded = false;
  filterText: string;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }
  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }
  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  removeCurrentBrand() {
    this.filterText = '';
    this.currentBrand = { brandId: -1, brandName: '' };
  }
  getAllBrandClass() {
    let allBrand: Brand = { brandId: -1, brandName: '' };
    if (this.currentBrand.brandId == allBrand.brandId) {
      return 'list-group-item active';
    } else {
      return 'list-group-item ';
    }
  }
}
