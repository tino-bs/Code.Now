import { ResourceWithOptions } from 'admin-bro';
import { Measurement } from '../../features/measurements/entities/measurements.entity';

const navigation = {
  name: null,
  icon: 'Product',
};

const measurementResource: ResourceWithOptions = {
  resource: Measurement,
  options: {
    navigation,
  },
};

export { measurementResource };
