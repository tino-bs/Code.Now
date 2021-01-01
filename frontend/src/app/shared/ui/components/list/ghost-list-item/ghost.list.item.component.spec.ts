import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UiModule} from '../../../ui.module';

@Component({
	selector: 'oaq-ghost-list-item-test',
	template: ''
})
class HostComponent {
}

describe('Ghost List Item Component', () => {
	let component: HostComponent;
	let fixture: ComponentFixture<HostComponent>;

	const getItemElement = () => fixture.debugElement.query(By.css('.oaq-ghost-list-item'));

	function createHostComponent(
		template: string
	): ComponentFixture<HostComponent> {
		TestBed.overrideComponent(HostComponent, {set: {template}});
		fixture = TestBed.createComponent(HostComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		return fixture;
	}

	beforeEach(() =>
		TestBed.configureTestingModule({
			declarations: [HostComponent],
			imports: [UiModule, NoopAnimationsModule]
		})
	);

	it('should be created', () => {
		const template = '<oaq-ghost-list-item></oaq-ghost-list-item>';
		fixture = createHostComponent(template);
		expect(component).toBeTruthy();
	});

	it('should have correct classname for theme based appearance', () => {
		const template = `<oaq-ghost-list-item></oaq-ghost-list-item>`;
		fixture = createHostComponent(template);
		expect(getItemElement()).toBeTruthy();
	});
});
