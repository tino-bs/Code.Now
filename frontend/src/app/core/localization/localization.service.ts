import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Translation} from './translation.models';
import {Language} from '../settings/settings.models';

export const languages = ['en', 'de'];

// set current language
// TODO dynamic language detection - either browser language or domain language
export const currentLanguage = 'en';

@Injectable()
export class LocalizationService {
	constructor(
		private translateService: TranslateService
	) {
	}

	setCurrentLanguage(lang: Language) {
		lang = lang || currentLanguage;

		this.translateService.use(lang);
	}

	setTranslations(translations: Translation) {
		for (const lang of languages) {
			this.translateService.setTranslation(lang, translations[lang], true);
		}
	}
}
