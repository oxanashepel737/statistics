import {Component, OnInit} from '@angular/core';
import {ItemService} from '../item.service';
import {ModerService} from '../moder.service';



@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    public page: number = this.itemService.current;
    public data = [];
    public star = 'https://nomoreagent.com/img/star.png';

    constructor(private itemService: ItemService, public moderService: ModerService) {
    }

    ngOnInit() {
    }

    public get items() {
        this.data = this.itemService.getItems();
        return this.data;
    }

    public get token() {
        return this.moderService.token;
    }
    public get collactionSize() {
        return this.itemService.colleactionSize;
    }

    public onPageChange() {
        return this.itemService.setLoadingPage(this.page);
    }
}
