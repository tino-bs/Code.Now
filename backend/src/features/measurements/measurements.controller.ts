import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { MeasurementsService } from './measurements.service';
import { Measurement } from './entities/measurements.entity';

@Controller('measurements')
export class MeasurementsController {
  constructor(private readonly measurementsService: MeasurementsService) {}

  @Get()
  async findAll(): Promise<Measurement[]> {
    return await this.measurementsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Measurement> {
    const measurement = await this.measurementsService.findOne(id);

    if (!measurement) {
      throw new NotFoundException("This Measurement doesn't exist");
    }

    return measurement;
  }
}
