import { Component, OnInit } from '@angular/core';
import { SiteLocation } from '../../siteLocation.model'
import { SiteLocationService } from '../../services/site-location.service';

@Component({
    selector: 'app-site-location',
    templateUrl: './site-location.component.html',
    styleUrls: ['./site-location.component.scss']
})
export class SiteLocationComponent implements OnInit {
    siteLocation: SiteLocation = {
        siteName: '',
        address: '',
        city: '',
        state: ''
    };

    isUpdateEnabled = false;

    constructor(private siteLocationService: SiteLocationService) {}

    ngOnInit(): void {}

    saveSiteLocation() {
        this.siteLocationService.createSiteLocation(this.siteLocation).subscribe(response => {
            console.log('SiteLocation saved:', response);
        }, error => {
            console.error('Error:', error);
        });
    }

    updateSiteLocation() {
        this.siteLocationService.updateSiteLocation(this.siteLocation).subscribe(response => {
            console.log('SiteLocation updated:', response);
        }, error => {
            console.error('Error:', error);
        });
    }

    cancel() {
        this.siteLocation = {
            siteName: '',
            address: '',
            city: '',
            state: ''
        };
        this.isUpdateEnabled = false;
    }
}
