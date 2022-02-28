import {
  Body,
  Controller,
  Delete,
  HttpException,
  NotFoundException,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { CreateCategoryDTO } from '../../category/dto/CreateCategory';
import { CategoryService } from '../../category/category.service';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';
import { UpdateCategoryDTO } from '../../category/dto/UpdateCategory';

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

  @Put(':id')
  @ApiOkResponse({ description: 'Ok' })
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
  @ApiNotFoundResponse({
    description: 'Not Found',
    schema: {
      type: 'String',
      example: {
        statusCode: 404,
        message: 'Category not found!',
        error: 'Bad Request'
      }
    }
  })
  async updateCategory(
    @Param('id') id: string,
    @Body() body: UpdateCategoryDTO
  ) {
    const category = await this.categoryService.findOne(id);

    if (category === undefined) {
      throw new NotFoundException('Category not found!');
    }

    return this.categoryService.update(id, body);
  }

  @ApiOkResponse({ description: 'OK' })
  @ApiNotFoundResponse({
    description: 'Not Found',
    schema: {
      type: 'String',
      example: {
        statusCode: 404,
        message: 'Category not found!',
        error: 'Bad Request'
      }
    }
  })
  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    const category = await this.categoryService.findOne(id);

    if (category === undefined) {
      throw new NotFoundException('Category not found!');
    }

    return this.categoryService.delete(id);
  }
}
