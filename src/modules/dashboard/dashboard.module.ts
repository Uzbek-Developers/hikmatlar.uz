import { RouterModule } from '@nestjs/core';
import { Module } from '@nestjs/common';

@Module({
  imports: [RouterModule.register([])]
})
export class DashboardModule {}
