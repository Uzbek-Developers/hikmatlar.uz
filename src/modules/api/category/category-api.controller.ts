import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { CreateCategoryDTO } from '../../category/dto/CreateCategory';
import { CategoryService } from '../../category/category.service';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('/categories')
@ApiTags('Categories')
export class CategoryDashboardController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/')
  @ApiOkResponse({ description: 'OK' })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    schema: {
      type: 'String',
      example: {
        statusCode: 400,
        message: ['name must be a string'],
        error: 'Bad Request'
      }
    }
  })
  async createCategory(@Body() body: CreateCategoryDTO) {
    const existsCategory = await this.categoryService.findByName(body.name);

    if (existsCategory) {
      throw new HttpException('Category is already exists', 409);
    }

    return this.categoryService.create(body);
  }
}
