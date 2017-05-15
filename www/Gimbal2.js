/*
 * Cordova Plugin - Gimbal v2
 * 2015 Denny Tsai <happydenn@happydenn.net>
 * 2017 ARC Business Solutions <arcbus.com>
 */

var Gimbal2 = function () {
    this.hasInitialized = false;
};

Gimbal2.prototype.initialize = function (apiKey) {
    if (this.hasInitialized) return;

    exec(this.eventCallback, this.errorCallback, "Gimbal2", "initialize", [apiKey]);
    this.hasInitialized = true;
};

Gimbal2.prototype.eventCallback = function (data) {
    if (data.event == 'onBeaconSighting') {
        cordova.fireWindowEvent('beaconsighting', data);
    }
};

Gimbal2.prototype.errorCallback = function (data) {
    cordova.fireWindowEvent('gimbalError', data);
};

Gimbal2.prototype.startBeaconManager = function () {
    if (!this.hasInitialized) return;
    exec(null, null, "Gimbal2", "startBeaconManager", []);
};

Gimbal2.prototype.stopBeaconManager = function () {
    if (!this.hasInitialized) return;
    exec(null, null, "Gimbal2", "stopBeaconManager", []);
};


//-------------------------------------------------------------------

if (!window.plugins)
    window.plugins = {};

if (!window.plugins.Gimbal2)
    window.plugins.Gimbal2 = new Gimbal2();

if (typeof module != 'undefined' && module.exports)
    module.exports = Gimbal2;