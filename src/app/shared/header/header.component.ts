import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Przepiśnik 2.0';
  isEditEnabled: boolean = false;

  constructor(private service: RecipeService) {}

  ngOnInit(): void {
    this.service.isEditEnabledOnBackend().subscribe((data) => {
      this.isEditEnabled = data;
    });
  }
}
