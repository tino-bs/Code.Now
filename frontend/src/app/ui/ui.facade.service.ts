import {Injectable} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {mobileBreakpointWidth} from './ui.constants';

@Injectable()
export class UiFacadeService {

	isMobile$: Observable<boolean>;

	constructor(
		private breakpointObserver: BreakpointObserver,
	) {
		// detect mobile device with the help of devices width and provide it as observable
		this.isMobile$ = this.breakpointObserver.observe(`(max-width: ${mobileBreakpointWidth}px)`).pipe(
			map(result => {
				return result.matches;
			})
		);
	}
}
