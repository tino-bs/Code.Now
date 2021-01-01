import {Component, OnInit} from '@angular/core';

/*
 ghost list item
 can be used as placeholder while loading a list of items
*/
@Component({
	selector: 'oaq-ghost-list-item',
	templateUrl: './ghost.list.item.component.html',
	styleUrls: ['./ghost.list.item.component.scss']
})
export class GhostListItemComponent implements OnInit {
	constructor() {
	}

	ngOnInit(): void {
	}
}
