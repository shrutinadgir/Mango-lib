(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('mango-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['mango-lib'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var MangoLibService = /** @class */ (function () {
        function MangoLibService() {
        }
        return MangoLibService;
    }());
    MangoLibService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MangoLibService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MangoLibService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MangoLibService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MangoLibService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var MangoLibComponent = /** @class */ (function () {
        function MangoLibComponent() {
        }
        MangoLibComponent.prototype.ngOnInit = function () {
        };
        return MangoLibComponent;
    }());
    MangoLibComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MangoLibComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MangoLibComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: MangoLibComponent, selector: "dev-mango-lib", ngImport: i0__namespace, template: "\n    <p>\n      mango-lib works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MangoLibComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'dev-mango-lib',
                        template: "\n    <p>\n      mango-lib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var CustomCardComponent = /** @class */ (function () {
        function CustomCardComponent() {
        }
        CustomCardComponent.prototype.ngOnInit = function () {
        };
        return CustomCardComponent;
    }());
    CustomCardComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CustomCardComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CustomCardComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CustomCardComponent, selector: "dev-custom-card", ngImport: i0__namespace, template: "<p>custom-card works!</p>\n", styles: [""] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CustomCardComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'dev-custom-card',
                        templateUrl: './custom-card.component.html',
                        styleUrls: ['./custom-card.component.css']
                    }]
            }], ctorParameters: function () { return []; } });

    var CustomButtonComponent = /** @class */ (function () {
        function CustomButtonComponent() {
        }
        CustomButtonComponent.prototype.ngOnInit = function () {
        };
        return CustomButtonComponent;
    }());
    CustomButtonComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CustomButtonComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CustomButtonComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CustomButtonComponent, selector: "dev-custom-button", ngImport: i0__namespace, template: "<p>custom-button works!</p>\n", styles: [""] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CustomButtonComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'dev-custom-button',
                        templateUrl: './custom-button.component.html',
                        styleUrls: ['./custom-button.component.css']
                    }]
            }], ctorParameters: function () { return []; } });

    var MangoLibModule = /** @class */ (function () {
        function MangoLibModule() {
        }
        return MangoLibModule;
    }());
    MangoLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MangoLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MangoLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MangoLibModule, declarations: [MangoLibComponent,
            CustomCardComponent,
            CustomButtonComponent], exports: [MangoLibComponent] });
    MangoLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MangoLibModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MangoLibModule, decorators: [{
                type: i0.NgModule,
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

    exports.MangoLibComponent = MangoLibComponent;
    exports.MangoLibModule = MangoLibModule;
    exports.MangoLibService = MangoLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mango-lib.umd.js.map
