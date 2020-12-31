import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocalizationService} from './localization.service';

@NgModule({
	imports: [
		CommonModule
	],
	providers: [
		LocalizationService
	],
	declarations: [],
	exports: []
})
export class LocalizationModule {
}
