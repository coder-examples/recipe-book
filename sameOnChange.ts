import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pav Bhaji',
      'The indian street taste.',
      'https://recipes.timesofindia.com/thumb/52416693.cms?width=1200&height=1200',
      [
        new Ingredient('Cauliflower Chopped (1/2)', 1),
        new Ingredient('Capsicum', 1),
        new Ingredient('Buns', 4),
        new Ingredient('Coriander (1/3)', 1),
        new Ingredient('Butter (in tsp)', 1)
      ]),
    new Recipe('Masala Pav',
      'Indian spicy spices.',
      'https://th.bing.com/th/id/OIP.uQCdnQ7gJLPosuIE74JqOAHaEK?w=300&h=168&c=7&o=5&dpr=1.25&pid=1.7',
      [
        new Ingredient('Pavs', 2),
        new Ingredient('Cabbage (1/4)', 1),
        new Ingredient('Cheese grated (slices)', 1),
        new Ingredient('Methi Masala (in tsp)', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
