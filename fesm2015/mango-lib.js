import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class MangoLibService {
    constructor() { }
}
MangoLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MangoLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MangoLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MangoLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MangoLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MangoLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
MangoLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MangoLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MangoLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: MangoLibComponent, selector: "dev-mango-lib", ngImport: i0, template: `
    <p>
      mango-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MangoLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dev-mango-lib',
                    template: `
    <p>
      mango-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class CustomCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CustomCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CustomCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CustomCardComponent, selector: "dev-custom-card", ngImport: i0, template: "<p>custom-card works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CustomCardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dev-custom-card',
                    templateUrl: './custom-card.component.html',
                    styleUrls: ['./custom-card.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class CustomButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CustomButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CustomButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CustomButtonComponent, selector: "dev-custom-button", ngImport: i0, template: "<p>custom-button works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CustomButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dev-custom-button',
                    templateUrl: './custom-button.component.html',
                    styleUrls: ['./custom-button.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class MangoLibModule {
}
MangoLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MangoLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MangoLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MangoLibModule, declarations: [MangoLibComponent,
        CustomCardComponent,
        CustomButtonComponent], exports: [MangoLibComponent] });
MangoLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MangoLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MangoLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MangoLibComponent,
                        CustomCardComponent,
                        CustomButtonComponent
                    ],
                    imports: [],
                    exports: [
                        MangoLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of mango-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MangoLibComponent, MangoLibModule, MangoLibService };
//# sourceMappingURL=mango-lib.js.map
