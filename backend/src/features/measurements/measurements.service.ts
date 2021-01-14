import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Measurement } from './entities/measurements.entity';

@Injectable()
export class MeasurementsService {
  constructor(
    @InjectRepository(Measurement)
    private measurementsRepository: Repository<Measurement>,
  ) {}

  async findAll(): Promise<Measurement[]> {
    return await this.measurementsRepository.find();
  }

  async findOne(id): Promise<Measurement> {
    return await this.measurementsRepository.findOne({
      where: { id },
    });
  }
}
