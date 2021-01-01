export enum Features {
  Measurements = 'measurements',
}

export type Feature = {
  name: string,
}

export type FeaturesConfig = {
  [TKey in Features]: Feature
}
