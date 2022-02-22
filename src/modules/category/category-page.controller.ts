import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller()
export class CategoryPageController {
  constructor(private readonly categoryService: CategoryService) {}
}
