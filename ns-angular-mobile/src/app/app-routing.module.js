"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_component_1 = require("~/app/auth/auth.component");
var items_component_1 = require("~/app/home/item/items.component");
var statistics_component_1 = require("~/app/home/statistic/statistics.component");
var friends_component_1 = require("~/app/home/friend/friends.component");
var home_component_1 = require("~/app/home/home.component");
var item_detail_component_1 = require("~/app/home/item/item-detail.component");
var statistic_detail_component_1 = require("~/app/home/statistic/statistic-detail.component");
var friend_detail_component_1 = require("~/app/home/friend/friend-detail.component");
var routes = [
    { path: '', redirectTo: '/home/items', pathMatch: 'full' },
    // { path: 'home',   loadChildren: '~/app/home/home.module#HomeModule' },
    // { path: "login", loadChildren: "./auth/auth.module#AuthModule" },
    { path: "login", component: auth_component_1.AuthComponent },
    // { path: "home", component: HomeComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    { path: "home", component: home_component_1.HomeComponent,
        children: [
            // { path: "", redirectTo: "/home/items", pathMatch: 'full' },
            { path: "", redirectTo: "items", pathMatch: 'full' },
            { path: "items", component: items_component_1.ItemsComponent },
            { path: "item/:id", component: item_detail_component_1.ItemDetailComponent },
            { path: "statistics", component: statistics_component_1.StatisticsComponent },
            { path: "statistic/:id", component: statistic_detail_component_1.StatisticDetailComponent },
            { path: "friends", component: friends_component_1.FriendsComponent },
            { path: "friend/:id", component: friend_detail_component_1.FriendDetailComponent }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSw0REFBd0Q7QUFDeEQsbUVBQStEO0FBQy9ELGtGQUE4RTtBQUM5RSx5RUFBcUU7QUFDckUsNERBQXdEO0FBQ3hELCtFQUEwRTtBQUMxRSw4RkFBeUY7QUFDekYscUZBQWdGO0FBR2hGLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBSSxVQUFVLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDNUQseUVBQXlFO0lBQ3pFLG9FQUFvRTtJQUNwRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDM0MscUdBQXFHO0lBQ3JHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWE7UUFDcEMsUUFBUSxFQUFFO1lBQ04sOERBQThEO1lBQzlELEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7WUFDcEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO1lBQzVDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7WUFDcEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRTtZQUN0RCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHFEQUF3QixFQUFFO1lBQzlELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7WUFDaEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBRTtTQUFDLEVBQUM7Q0FDckUsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBdXRoQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtJdGVtc0NvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7U3RhdGlzdGljc0NvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvc3RhdGlzdGljL3N0YXRpc3RpY3MuY29tcG9uZW50XCI7XG5pbXBvcnQge0ZyaWVuZHNDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL2ZyaWVuZC9mcmllbmRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtJdGVtRGV0YWlsQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTdGF0aXN0aWNEZXRhaWxDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL3N0YXRpc3RpYy9zdGF0aXN0aWMtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGcmllbmREZXRhaWxDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL2ZyaWVuZC9mcmllbmQtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoR3VhcmR9IGZyb20gXCJ+L2FwcC9hdXRoL2F1dGguZ3VhcmRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAnJywgICByZWRpcmVjdFRvOiAnL2hvbWUvaXRlbXMnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAgIC8vIHsgcGF0aDogJ2hvbWUnLCAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZScgfSxcbiAgICAvLyB7IHBhdGg6IFwibG9naW5cIiwgbG9hZENoaWxkcmVuOiBcIi4vYXV0aC9hdXRoLm1vZHVsZSNBdXRoTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50IH0sXG4gICAgLy8geyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRdLFxuICAgIHsgcGF0aDogXCJob21lXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIC8vIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZS9pdGVtc1wiLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIml0ZW1zXCIsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcIml0ZW0vOmlkXCIsIGNvbXBvbmVudDogSXRlbURldGFpbENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcInN0YXRpc3RpY3NcIiwgY29tcG9uZW50OiBTdGF0aXN0aWNzQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwic3RhdGlzdGljLzppZFwiLCBjb21wb25lbnQ6IFN0YXRpc3RpY0RldGFpbENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcImZyaWVuZHNcIiwgY29tcG9uZW50OiBGcmllbmRzQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwiZnJpZW5kLzppZFwiLCBjb21wb25lbnQ6IEZyaWVuZERldGFpbENvbXBvbmVudCB9XX1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19