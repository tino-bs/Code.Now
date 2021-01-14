import { AdminModuleOptions } from '@admin-bro/nestjs/types/interfaces/admin-module-options.interface';

import { measurementResource } from './resources/measurement.resource';

export const adminModuleOptions: AdminModuleOptions = {
  adminBroOptions: {
    rootPath: '/admin',
    branding: {
      companyName: 'Admin | AirPoll',
      logo: 'https://nestjs.com/img/logo_text.svg',
      softwareBrothers: false,
    },
    resources: [measurementResource],
  },
};
