"use strict";
/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("application");
var tnsOAuthModule = require("nativescript-oauth");
application.run({ moduleName: 'app-root' });
var facebookInitOptions = {
    clientId: "2032694106789245",
    clientSecret: "a0c2fe58394edd1b2a59f22d6f42cf03",
    scope: ["email"] //whatever other scopes you need
};
tnsOAuthModule.initFacebook(facebookInitOptions);
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUVGLHlDQUEyQztBQUMzQyxtREFBcUQ7QUFDckQsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBRTVDLElBQUksbUJBQW1CLEdBQTRDO0lBQy9ELFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsWUFBWSxFQUFFLGtDQUFrQztJQUNoRCxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQ0FBZ0M7Q0FDcEQsQ0FBQztBQUNGLGNBQWMsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUVqRDs7O0VBR0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLnRzIGZpbGUgaXMgdGhlIGVudHJ5IHBvaW50IHRvIHlvdXIgYXBwbGljYXRpb24uXG5Zb3UgY2FuIHVzZSB0aGlzIGZpbGUgdG8gcGVyZm9ybSBhcHAtbGV2ZWwgaW5pdGlhbGl6YXRpb24sIGJ1dCB0aGUgcHJpbWFyeVxucHVycG9zZSBvZiB0aGUgZmlsZSBpcyB0byBwYXNzIGNvbnRyb2wgdG8gdGhlIGFwcOKAmXMgZmlyc3QgbW9kdWxlLlxuKi9cblxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xuaW1wb3J0ICogYXMgdG5zT0F1dGhNb2R1bGUgZnJvbSAnbmF0aXZlc2NyaXB0LW9hdXRoJztcbmFwcGxpY2F0aW9uLnJ1bih7IG1vZHVsZU5hbWU6ICdhcHAtcm9vdCcgfSk7XG5cbnZhciBmYWNlYm9va0luaXRPcHRpb25zOiB0bnNPQXV0aE1vZHVsZS5JVG5zT0F1dGhPcHRpb25zRmFjZWJvb2sgPSB7XG4gICAgY2xpZW50SWQ6IFwiMjAzMjY5NDEwNjc4OTI0NVwiLFxuICAgIGNsaWVudFNlY3JldDogXCJhMGMyZmU1ODM5NGVkZDFiMmE1OWYyMmQ2ZjQyY2YwM1wiLFxuICAgIHNjb3BlOiBbXCJlbWFpbFwiXSAvL3doYXRldmVyIG90aGVyIHNjb3BlcyB5b3UgbmVlZFxufTtcbnRuc09BdXRoTW9kdWxlLmluaXRGYWNlYm9vayhmYWNlYm9va0luaXRPcHRpb25zKTtcblxuLypcbkRvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxuYmUgZXhlY3V0ZWQgb24gaU9TLlxuKi9cbiJdfQ==