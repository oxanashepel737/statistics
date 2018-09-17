import {Injectable} from '@angular/core';
import {ajax} from 'rxjs/internal/observable/dom/ajax';
import {ModerService} from './moder.service';
import {MessageService} from './message.service';



@Injectable({
    providedIn: 'root'
})
export class ItemService {
    protected static per_page = 10;
    protected static items = [];
    protected static pagination = {total: 1, current: 1};
    protected static filter = {contact: '', description: '', rate: '', date: ''};
    /** @var loading
     * if 1..+ - do not load items again
     * if false - start loading
     * */
    private static loadingPage: number = null;

    constructor(public moderService: ModerService, private errorService: MessageService) {
    }

    public load() {
        ajax({
            headers: {'X-Auth-Token': this.moderService.token},
            url: 'http://lowcost-env.cbgaq2vptb.us-west-2.elasticbeanstalk.com'
                + `/api/rates/page?page=${ItemService.loadingPage}&per_page=${ItemService.per_page}`
                + `&contact=${ItemService.filter.contact}&description=${ItemService.filter.description}`
                + `&rate=${ItemService.filter.rate}&date=${ItemService.filter.date}`,
            responseType: 'json',
            crossDomain: true
        })
            .subscribe(
                (data) => {
                    ItemService.items = data.response.items;
                    ItemService.pagination = data.response.pagination;
                },
                (error) => {
                    this.errorService.pushError(error.response.error.message);
                    console.log(this.errorService.error);
                    console.error(error);
                }
            );
    }

    setLoadingPage(page: number) {
        ItemService.pagination.current = page;
    }
    setFilter(contact: string, description: string, rate: string, date: string, ) {
        ItemService.filter.contact = contact;
        ItemService.filter.description = description;
        ItemService.filter.rate = rate;
        ItemService.filter.date = date;
    }
    getItems() {
        if (ItemService.loadingPage !== ItemService.pagination.current && this.moderService.token) {
            ItemService.loadingPage = ItemService.pagination.current;
            this.load();
        }
        return ItemService.items;
    }

    get current() {
        return ItemService.pagination.current;
    }
    get colleactionSize() {
        return ItemService.pagination.total * ItemService.per_page;
    }
}
