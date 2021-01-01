export interface ApiV1ResponseMeta {
  limit: number,
  page: number,
}

export interface ApiV1Response<T> {
  results: T,
  meta: ApiV1ResponseMeta,
}

export type Measurement = {
  location: string;
  parameter: string;
  country: string;
  city: string;
  unit: string;
  value: number;
};

export type Measurements = Measurement[];

export const testMeasurement: Measurement = {
  location: 'test_id',
  parameter: 'test_title',
  country: 'test_term',
  city: 'test_id',
  unit: 'test_description',
  value: 100,
}

export const testMeasurements: Measurements = [
  testMeasurement,
]
