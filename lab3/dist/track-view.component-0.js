webpackJsonp([0],{

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(3);
const styled_components_1 = __webpack_require__(12);
const grid_1 = __webpack_require__(121);
const car_config_component_1 = __webpack_require__(808);
const enzo_service_1 = __webpack_require__(74);
const weather_component_1 = __webpack_require__(809);
const weather_service_1 = __webpack_require__(811);
const index_1 = __webpack_require__(810);
__webpack_require__(124);
const react_router_dom_1 = __webpack_require__(39);
const TrackHeader = styled_components_1.default.header `
    display:flex;
    align-items:center;
    flex-flow:row;
    width:100%;
    justify-content: space-between;
    padding: 35px 0px;
`;
const TrackFlag = styled_components_1.default.i `
    font-size:150px!important;
    display:block;
`;
class TrackViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentTrack: null, currentConfig: null, currentForecast: null };
        this.getConfig = this.getConfig.bind(this);
    }
    componentDidMount() {
        const track = enzo_service_1.default.getTrack(this.props.currentTrackId);
        const forecast = weather_service_1.default.getForecast();
        this.setState({ currentForecast: forecast, currentTrack: track[0] });
    }
    getConfig(weather) {
        const config = enzo_service_1.default.getConfig(weather);
        this.setState({ currentConfig: config });
    }
    render() {
        const countryClass = "flag-icon flag-icon-";
        return (React.createElement(grid_1.Wrapper, null,
            React.createElement(grid_1.Row, null, this.state.currentTrack &&
                React.createElement(TrackHeader, { style: { backgroundColor: '#' + this.state.currentTrack.color, color: index_1.getContrastYIQ(this.state.currentTrack.color) }, role: "banner" },
                    React.createElement(grid_1.Container, null,
                        React.createElement(grid_1.Row, null,
                            React.createElement(TrackFlag, { className: countryClass + this.state.currentTrack.countryCode, alt: this.state.currentTrack.country }),
                            React.createElement("h1", null, this.state.currentTrack.name),
                            React.createElement(react_router_dom_1.Link, { to: "/", tabIndex: 0, style: { color: index_1.getContrastYIQ(this.state.currentTrack.color) } }, "Tillbaka"))))),
            React.createElement(grid_1.Container, null,
                React.createElement(grid_1.Row, null, this.state.currentForecast &&
                    React.createElement(weather_component_1.default, { forecastList: this.state.currentForecast, selectForecast: this.getConfig }))),
            this.state.currentConfig &&
                React.createElement(car_config_component_1.default, { track: this.state.currentTrack, config: this.state.currentConfig })));
    }
}
exports.default = TrackViewComponent;


/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*!\n  Ionicons, v3.0.0-alpha.3\n  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/\n  https://twitter.com/benjsperry  https://twitter.com/ionicframework\n  MIT License: https://github.com/driftyco/ionicons\n\n  Android-style icons originally built by Google’s\n  Material Design Icons: https://github.com/google/material-design-icons\n  used under CC BY http://creativecommons.org/licenses/by/4.0/\n  Modified icons to fit ionicon’s grid from original.\n*/.ion-ios-add:before{content:\"\\F102\"}.ion-ios-add-circle:before{content:\"\\F101\"}.ion-ios-add-circle-outline:before{content:\"\\F100\"}.ion-ios-add-outline:before{content:\"\\F102\"}.ion-ios-alarm:before{content:\"\\F3C8\"}.ion-ios-alarm-outline:before{content:\"\\F3C7\"}.ion-ios-albums:before{content:\"\\F3CA\"}.ion-ios-albums-outline:before{content:\"\\F3C9\"}.ion-ios-alert:before{content:\"\\F104\"}.ion-ios-alert-outline:before{content:\"\\F103\"}.ion-ios-american-football:before{content:\"\\F106\"}.ion-ios-american-football-outline:before{content:\"\\F105\"}.ion-ios-analytics:before{content:\"\\F3CE\"}.ion-ios-analytics-outline:before{content:\"\\F3CD\"}.ion-ios-aperture:before{content:\"\\F108\"}.ion-ios-aperture-outline:before{content:\"\\F107\"}.ion-ios-apps:before{content:\"\\F10A\"}.ion-ios-apps-outline:before{content:\"\\F109\"}.ion-ios-appstore:before{content:\"\\F10C\"}.ion-ios-appstore-outline:before{content:\"\\F10B\"}.ion-ios-archive:before{content:\"\\F10E\"}.ion-ios-archive-outline:before{content:\"\\F10D\"}.ion-ios-arrow-back-outline:before,.ion-ios-arrow-back:before{content:\"\\F3CF\"}.ion-ios-arrow-down-outline:before,.ion-ios-arrow-down:before{content:\"\\F3D0\"}.ion-ios-arrow-dropdown:before{content:\"\\F110\"}.ion-ios-arrow-dropdown-circle-outline:before,.ion-ios-arrow-dropdown-circle:before{content:\"\\F10F\"}.ion-ios-arrow-dropdown-outline:before{content:\"\\F110\"}.ion-ios-arrow-dropleft:before{content:\"\\F112\"}.ion-ios-arrow-dropleft-circle-outline:before,.ion-ios-arrow-dropleft-circle:before{content:\"\\F111\"}.ion-ios-arrow-dropleft-outline:before{content:\"\\F112\"}.ion-ios-arrow-dropright:before{content:\"\\F114\"}.ion-ios-arrow-dropright-circle-outline:before,.ion-ios-arrow-dropright-circle:before{content:\"\\F113\"}.ion-ios-arrow-dropright-outline:before{content:\"\\F114\"}.ion-ios-arrow-dropup:before{content:\"\\F116\"}.ion-ios-arrow-dropup-circle-outline:before,.ion-ios-arrow-dropup-circle:before{content:\"\\F115\"}.ion-ios-arrow-dropup-outline:before{content:\"\\F116\"}.ion-ios-arrow-forward-outline:before,.ion-ios-arrow-forward:before{content:\"\\F3D1\"}.ion-ios-arrow-round-back-outline:before,.ion-ios-arrow-round-back:before{content:\"\\F117\"}.ion-ios-arrow-round-down-outline:before,.ion-ios-arrow-round-down:before{content:\"\\F118\"}.ion-ios-arrow-round-forward-outline:before,.ion-ios-arrow-round-forward:before{content:\"\\F119\"}.ion-ios-arrow-round-up-outline:before,.ion-ios-arrow-round-up:before{content:\"\\F11A\"}.ion-ios-arrow-up-outline:before,.ion-ios-arrow-up:before{content:\"\\F3D8\"}.ion-ios-at:before{content:\"\\F3DA\"}.ion-ios-at-outline:before{content:\"\\F3D9\"}.ion-ios-attach-outline:before,.ion-ios-attach:before{content:\"\\F11B\"}.ion-ios-backspace:before{content:\"\\F11D\"}.ion-ios-backspace-outline:before{content:\"\\F11C\"}.ion-ios-barcode:before{content:\"\\F3DC\"}.ion-ios-barcode-outline:before{content:\"\\F3DB\"}.ion-ios-baseball:before{content:\"\\F3DE\"}.ion-ios-baseball-outline:before{content:\"\\F3DD\"}.ion-ios-basket:before{content:\"\\F11F\"}.ion-ios-basket-outline:before{content:\"\\F11E\"}.ion-ios-basketball:before{content:\"\\F3E0\"}.ion-ios-basketball-outline:before{content:\"\\F3DF\"}.ion-ios-battery-charging-outline:before,.ion-ios-battery-charging:before{content:\"\\F120\"}.ion-ios-battery-dead-outline:before,.ion-ios-battery-dead:before{content:\"\\F121\"}.ion-ios-battery-full-outline:before,.ion-ios-battery-full:before{content:\"\\F122\"}.ion-ios-beaker:before{content:\"\\F124\"}.ion-ios-beaker-outline:before{content:\"\\F123\"}.ion-ios-beer:before{content:\"\\F126\"}.ion-ios-beer-outline:before{content:\"\\F125\"}.ion-ios-bicycle-outline:before,.ion-ios-bicycle:before{content:\"\\F127\"}.ion-ios-bluetooth-outline:before,.ion-ios-bluetooth:before{content:\"\\F128\"}.ion-ios-boat:before{content:\"\\F12A\"}.ion-ios-boat-outline:before{content:\"\\F129\"}.ion-ios-body:before{content:\"\\F3E4\"}.ion-ios-body-outline:before{content:\"\\F3E3\"}.ion-ios-bonfire:before{content:\"\\F12C\"}.ion-ios-bonfire-outline:before{content:\"\\F12B\"}.ion-ios-book:before{content:\"\\F3E8\"}.ion-ios-book-outline:before{content:\"\\F3E7\"}.ion-ios-bookmark:before{content:\"\\F12E\"}.ion-ios-bookmark-outline:before{content:\"\\F12D\"}.ion-ios-bookmarks:before{content:\"\\F3EA\"}.ion-ios-bookmarks-outline:before{content:\"\\F3E9\"}.ion-ios-bowtie:before{content:\"\\F130\"}.ion-ios-bowtie-outline:before{content:\"\\F12F\"}.ion-ios-briefcase:before{content:\"\\F3EE\"}.ion-ios-briefcase-outline:before{content:\"\\F3ED\"}.ion-ios-browsers:before{content:\"\\F3F0\"}.ion-ios-browsers-outline:before{content:\"\\F3EF\"}.ion-ios-brush:before{content:\"\\F132\"}.ion-ios-brush-outline:before{content:\"\\F131\"}.ion-ios-bug:before{content:\"\\F134\"}.ion-ios-bug-outline:before{content:\"\\F133\"}.ion-ios-build:before{content:\"\\F136\"}.ion-ios-build-outline:before{content:\"\\F135\"}.ion-ios-bulb:before{content:\"\\F138\"}.ion-ios-bulb-outline:before{content:\"\\F137\"}.ion-ios-bus:before{content:\"\\F13A\"}.ion-ios-bus-outline:before{content:\"\\F139\"}.ion-ios-cafe:before{content:\"\\F13C\"}.ion-ios-cafe-outline:before{content:\"\\F13B\"}.ion-ios-calculator:before{content:\"\\F3F2\"}.ion-ios-calculator-outline:before{content:\"\\F3F1\"}.ion-ios-calendar:before{content:\"\\F3F4\"}.ion-ios-calendar-outline:before{content:\"\\F3F3\"}.ion-ios-call:before{content:\"\\F13E\"}.ion-ios-call-outline:before{content:\"\\F13D\"}.ion-ios-camera:before{content:\"\\F3F6\"}.ion-ios-camera-outline:before{content:\"\\F3F5\"}.ion-ios-car:before{content:\"\\F140\"}.ion-ios-car-outline:before{content:\"\\F13F\"}.ion-ios-card:before{content:\"\\F142\"}.ion-ios-card-outline:before{content:\"\\F141\"}.ion-ios-cart:before{content:\"\\F3F8\"}.ion-ios-cart-outline:before{content:\"\\F3F7\"}.ion-ios-cash:before{content:\"\\F144\"}.ion-ios-cash-outline:before{content:\"\\F143\"}.ion-ios-chatboxes:before{content:\"\\F3FA\"}.ion-ios-chatboxes-outline:before{content:\"\\F3F9\"}.ion-ios-chatbubbles:before{content:\"\\F146\"}.ion-ios-chatbubbles-outline:before{content:\"\\F145\"}.ion-ios-checkbox:before{content:\"\\F148\"}.ion-ios-checkbox-outline:before{content:\"\\F147\"}.ion-ios-checkmark:before{content:\"\\F3FF\"}.ion-ios-checkmark-circle:before{content:\"\\F14A\"}.ion-ios-checkmark-circle-outline:before{content:\"\\F149\"}.ion-ios-checkmark-outline:before{content:\"\\F3FF\"}.ion-ios-clipboard:before{content:\"\\F14C\"}.ion-ios-clipboard-outline:before{content:\"\\F14B\"}.ion-ios-clock:before{content:\"\\F403\"}.ion-ios-clock-outline:before{content:\"\\F402\"}.ion-ios-close:before{content:\"\\F406\"}.ion-ios-close-circle:before{content:\"\\F14E\"}.ion-ios-close-circle-outline:before{content:\"\\F14D\"}.ion-ios-close-outline:before{content:\"\\F406\"}.ion-ios-closed-captioning:before{content:\"\\F150\"}.ion-ios-closed-captioning-outline:before{content:\"\\F14F\"}.ion-ios-cloud:before{content:\"\\F40C\"}.ion-ios-cloud-circle:before{content:\"\\F152\"}.ion-ios-cloud-circle-outline:before{content:\"\\F151\"}.ion-ios-cloud-done:before{content:\"\\F154\"}.ion-ios-cloud-done-outline:before{content:\"\\F153\"}.ion-ios-cloud-download:before{content:\"\\F408\"}.ion-ios-cloud-download-outline:before{content:\"\\F407\"}.ion-ios-cloud-outline:before{content:\"\\F409\"}.ion-ios-cloud-upload:before{content:\"\\F40B\"}.ion-ios-cloud-upload-outline:before{content:\"\\F40A\"}.ion-ios-cloudy:before{content:\"\\F410\"}.ion-ios-cloudy-night:before{content:\"\\F40E\"}.ion-ios-cloudy-night-outline:before{content:\"\\F40D\"}.ion-ios-cloudy-outline:before{content:\"\\F40F\"}.ion-ios-code:before{content:\"\\F157\"}.ion-ios-code-download-outline:before,.ion-ios-code-download:before{content:\"\\F155\"}.ion-ios-code-outline:before{content:\"\\F157\"}.ion-ios-code-working-outline:before,.ion-ios-code-working:before{content:\"\\F156\"}.ion-ios-cog:before{content:\"\\F412\"}.ion-ios-cog-outline:before{content:\"\\F411\"}.ion-ios-color-fill:before{content:\"\\F159\"}.ion-ios-color-fill-outline:before{content:\"\\F158\"}.ion-ios-color-filter:before{content:\"\\F414\"}.ion-ios-color-filter-outline:before{content:\"\\F413\"}.ion-ios-color-palette:before{content:\"\\F15B\"}.ion-ios-color-palette-outline:before{content:\"\\F15A\"}.ion-ios-color-wand:before{content:\"\\F416\"}.ion-ios-color-wand-outline:before{content:\"\\F415\"}.ion-ios-compass:before{content:\"\\F15D\"}.ion-ios-compass-outline:before{content:\"\\F15C\"}.ion-ios-construct:before{content:\"\\F15F\"}.ion-ios-construct-outline:before{content:\"\\F15E\"}.ion-ios-contact:before{content:\"\\F41A\"}.ion-ios-contact-outline:before{content:\"\\F419\"}.ion-ios-contacts:before{content:\"\\F161\"}.ion-ios-contacts-outline:before{content:\"\\F160\"}.ion-ios-contract-outline:before,.ion-ios-contract:before{content:\"\\F162\"}.ion-ios-contrast-outline:before,.ion-ios-contrast:before{content:\"\\F163\"}.ion-ios-copy:before{content:\"\\F41C\"}.ion-ios-copy-outline:before{content:\"\\F41B\"}.ion-ios-create:before{content:\"\\F165\"}.ion-ios-create-outline:before{content:\"\\F164\"}.ion-ios-crop:before{content:\"\\F41E\"}.ion-ios-crop-outline:before{content:\"\\F166\"}.ion-ios-cube:before{content:\"\\F168\"}.ion-ios-cube-outline:before{content:\"\\F167\"}.ion-ios-cut:before{content:\"\\F16A\"}.ion-ios-cut-outline:before{content:\"\\F169\"}.ion-ios-desktop:before{content:\"\\F16C\"}.ion-ios-desktop-outline:before{content:\"\\F16B\"}.ion-ios-disc:before{content:\"\\F16E\"}.ion-ios-disc-outline:before{content:\"\\F16D\"}.ion-ios-document:before{content:\"\\F170\"}.ion-ios-document-outline:before{content:\"\\F16F\"}.ion-ios-done-all-outline:before,.ion-ios-done-all:before{content:\"\\F171\"}.ion-ios-download:before{content:\"\\F420\"}.ion-ios-download-outline:before{content:\"\\F41F\"}.ion-ios-easel:before{content:\"\\F173\"}.ion-ios-easel-outline:before{content:\"\\F172\"}.ion-ios-egg:before{content:\"\\F175\"}.ion-ios-egg-outline:before{content:\"\\F174\"}.ion-ios-exit:before{content:\"\\F177\"}.ion-ios-exit-outline:before{content:\"\\F176\"}.ion-ios-expand-outline:before,.ion-ios-expand:before{content:\"\\F178\"}.ion-ios-eye:before{content:\"\\F425\"}.ion-ios-eye-off:before{content:\"\\F17A\"}.ion-ios-eye-off-outline:before{content:\"\\F179\"}.ion-ios-eye-outline:before{content:\"\\F424\"}.ion-ios-fastforward:before{content:\"\\F427\"}.ion-ios-fastforward-outline:before{content:\"\\F426\"}.ion-ios-female-outline:before,.ion-ios-female:before{content:\"\\F17B\"}.ion-ios-filing:before{content:\"\\F429\"}.ion-ios-filing-outline:before{content:\"\\F428\"}.ion-ios-film:before{content:\"\\F42B\"}.ion-ios-film-outline:before{content:\"\\F42A\"}.ion-ios-finger-print-outline:before,.ion-ios-finger-print:before{content:\"\\F17C\"}.ion-ios-flag:before{content:\"\\F42D\"}.ion-ios-flag-outline:before{content:\"\\F42C\"}.ion-ios-flame:before{content:\"\\F42F\"}.ion-ios-flame-outline:before{content:\"\\F42E\"}.ion-ios-flash:before{content:\"\\F17E\"}.ion-ios-flash-outline:before{content:\"\\F17D\"}.ion-ios-flask:before{content:\"\\F431\"}.ion-ios-flask-outline:before{content:\"\\F430\"}.ion-ios-flower:before{content:\"\\F433\"}.ion-ios-flower-outline:before{content:\"\\F432\"}.ion-ios-folder:before{content:\"\\F435\"}.ion-ios-folder-open:before{content:\"\\F180\"}.ion-ios-folder-open-outline:before{content:\"\\F17F\"}.ion-ios-folder-outline:before{content:\"\\F434\"}.ion-ios-football:before{content:\"\\F437\"}.ion-ios-football-outline:before{content:\"\\F436\"}.ion-ios-funnel:before{content:\"\\F182\"}.ion-ios-funnel-outline:before{content:\"\\F181\"}.ion-ios-game-controller-a:before{content:\"\\F439\"}.ion-ios-game-controller-a-outline:before{content:\"\\F438\"}.ion-ios-game-controller-b:before{content:\"\\F43B\"}.ion-ios-game-controller-b-outline:before{content:\"\\F43A\"}.ion-ios-git-branch-outline:before,.ion-ios-git-branch:before{content:\"\\F183\"}.ion-ios-git-commit-outline:before,.ion-ios-git-commit:before{content:\"\\F184\"}.ion-ios-git-compare-outline:before,.ion-ios-git-compare:before{content:\"\\F185\"}.ion-ios-git-merge-outline:before,.ion-ios-git-merge:before{content:\"\\F186\"}.ion-ios-git-network-outline:before,.ion-ios-git-network:before{content:\"\\F187\"}.ion-ios-git-pull-request-outline:before,.ion-ios-git-pull-request:before{content:\"\\F188\"}.ion-ios-glasses:before{content:\"\\F43F\"}.ion-ios-glasses-outline:before{content:\"\\F43E\"}.ion-ios-globe:before{content:\"\\F18A\"}.ion-ios-globe-outline:before{content:\"\\F189\"}.ion-ios-grid:before{content:\"\\F18C\"}.ion-ios-grid-outline:before{content:\"\\F18B\"}.ion-ios-hammer:before{content:\"\\F18E\"}.ion-ios-hammer-outline:before{content:\"\\F18D\"}.ion-ios-hand:before{content:\"\\F190\"}.ion-ios-hand-outline:before{content:\"\\F18F\"}.ion-ios-happy:before{content:\"\\F192\"}.ion-ios-happy-outline:before{content:\"\\F191\"}.ion-ios-headset:before{content:\"\\F194\"}.ion-ios-headset-outline:before{content:\"\\F193\"}.ion-ios-heart:before{content:\"\\F443\"}.ion-ios-heart-outline:before{content:\"\\F442\"}.ion-ios-help:before{content:\"\\F446\"}.ion-ios-help-buoy:before{content:\"\\F196\"}.ion-ios-help-buoy-outline:before{content:\"\\F195\"}.ion-ios-help-circle:before{content:\"\\F198\"}.ion-ios-help-circle-outline:before{content:\"\\F197\"}.ion-ios-help-outline:before{content:\"\\F446\"}.ion-ios-home:before{content:\"\\F448\"}.ion-ios-home-outline:before{content:\"\\F447\"}.ion-ios-ice-cream:before{content:\"\\F19A\"}.ion-ios-ice-cream-outline:before{content:\"\\F199\"}.ion-ios-image:before{content:\"\\F19C\"}.ion-ios-image-outline:before{content:\"\\F19B\"}.ion-ios-images:before{content:\"\\F19E\"}.ion-ios-images-outline:before{content:\"\\F19D\"}.ion-ios-infinite:before{content:\"\\F44A\"}.ion-ios-infinite-outline:before{content:\"\\F449\"}.ion-ios-information:before{content:\"\\F44D\"}.ion-ios-information-circle:before{content:\"\\F1A0\"}.ion-ios-information-circle-outline:before{content:\"\\F19F\"}.ion-ios-information-outline:before{content:\"\\F44D\"}.ion-ios-ionic:before{content:\"\\F1A1\"}.ion-ios-ionic-outline:before{content:\"\\F44E\"}.ion-ios-ionitron:before{content:\"\\F1A3\"}.ion-ios-ionitron-outline:before{content:\"\\F1A2\"}.ion-ios-jet:before{content:\"\\F1A5\"}.ion-ios-jet-outline:before{content:\"\\F1A4\"}.ion-ios-key:before{content:\"\\F1A7\"}.ion-ios-key-outline:before{content:\"\\F1A6\"}.ion-ios-keypad:before{content:\"\\F450\"}.ion-ios-keypad-outline:before{content:\"\\F44F\"}.ion-ios-laptop-outline:before,.ion-ios-laptop:before{content:\"\\F1A8\"}.ion-ios-leaf:before{content:\"\\F1AA\"}.ion-ios-leaf-outline:before{content:\"\\F1A9\"}.ion-ios-link:before{content:\"\\F22A\"}.ion-ios-link-outline:before{content:\"\\F1CA\"}.ion-ios-list:before{content:\"\\F454\"}.ion-ios-list-box:before{content:\"\\F1AC\"}.ion-ios-list-box-outline:before{content:\"\\F1AB\"}.ion-ios-list-outline:before{content:\"\\F454\"}.ion-ios-locate:before{content:\"\\F1AE\"}.ion-ios-locate-outline:before{content:\"\\F1AD\"}.ion-ios-lock:before{content:\"\\F1B0\"}.ion-ios-lock-outline:before{content:\"\\F1AF\"}.ion-ios-log-in-outline:before,.ion-ios-log-in:before{content:\"\\F1B1\"}.ion-ios-log-out-outline:before,.ion-ios-log-out:before{content:\"\\F1B2\"}.ion-ios-magnet:before{content:\"\\F1B4\"}.ion-ios-magnet-outline:before{content:\"\\F1B3\"}.ion-ios-mail:before{content:\"\\F1B8\"}.ion-ios-mail-open:before{content:\"\\F1B6\"}.ion-ios-mail-open-outline:before{content:\"\\F1B5\"}.ion-ios-mail-outline:before{content:\"\\F1B7\"}.ion-ios-male-outline:before,.ion-ios-male:before{content:\"\\F1B9\"}.ion-ios-man:before{content:\"\\F1BB\"}.ion-ios-man-outline:before{content:\"\\F1BA\"}.ion-ios-map:before{content:\"\\F1BD\"}.ion-ios-map-outline:before{content:\"\\F1BC\"}.ion-ios-medal:before{content:\"\\F1BF\"}.ion-ios-medal-outline:before{content:\"\\F1BE\"}.ion-ios-medical:before{content:\"\\F45C\"}.ion-ios-medical-outline:before{content:\"\\F45B\"}.ion-ios-medkit:before{content:\"\\F45E\"}.ion-ios-medkit-outline:before{content:\"\\F45D\"}.ion-ios-megaphone:before{content:\"\\F1C1\"}.ion-ios-megaphone-outline:before{content:\"\\F1C0\"}.ion-ios-menu:before{content:\"\\F1C3\"}.ion-ios-menu-outline:before{content:\"\\F1C2\"}.ion-ios-mic:before{content:\"\\F461\"}.ion-ios-mic-off:before{content:\"\\F45F\"}.ion-ios-mic-off-outline:before{content:\"\\F1C4\"}.ion-ios-mic-outline:before{content:\"\\F460\"}.ion-ios-microphone:before{content:\"\\F1C6\"}.ion-ios-microphone-outline:before{content:\"\\F1C5\"}.ion-ios-moon:before{content:\"\\F468\"}.ion-ios-moon-outline:before{content:\"\\F467\"}.ion-ios-more:before{content:\"\\F1C8\"}.ion-ios-more-outline:before{content:\"\\F1C7\"}.ion-ios-move-outline:before,.ion-ios-move:before{content:\"\\F1CB\"}.ion-ios-musical-note:before{content:\"\\F46B\"}.ion-ios-musical-note-outline:before{content:\"\\F1CC\"}.ion-ios-musical-notes:before{content:\"\\F46C\"}.ion-ios-musical-notes-outline:before{content:\"\\F1CD\"}.ion-ios-navigate:before{content:\"\\F46E\"}.ion-ios-navigate-outline:before{content:\"\\F46D\"}.ion-ios-no-smoking:before{content:\"\\F1CF\"}.ion-ios-no-smoking-outline:before{content:\"\\F1CE\"}.ion-ios-notifications:before{content:\"\\F1D3\"}.ion-ios-notifications-off:before{content:\"\\F1D1\"}.ion-ios-notifications-off-outline:before{content:\"\\F1D0\"}.ion-ios-notifications-outline:before{content:\"\\F1D2\"}.ion-ios-nuclear:before{content:\"\\F1D5\"}.ion-ios-nuclear-outline:before{content:\"\\F1D4\"}.ion-ios-nutrition:before{content:\"\\F470\"}.ion-ios-nutrition-outline:before{content:\"\\F46F\"}.ion-ios-open:before{content:\"\\F1D7\"}.ion-ios-open-outline:before{content:\"\\F1D6\"}.ion-ios-options:before{content:\"\\F1D9\"}.ion-ios-options-outline:before{content:\"\\F1D8\"}.ion-ios-outlet:before{content:\"\\F1DB\"}.ion-ios-outlet-outline:before{content:\"\\F1DA\"}.ion-ios-paper:before{content:\"\\F472\"}.ion-ios-paper-outline:before{content:\"\\F471\"}.ion-ios-paper-plane:before{content:\"\\F1DD\"}.ion-ios-paper-plane-outline:before{content:\"\\F1DC\"}.ion-ios-partly-sunny:before{content:\"\\F1DF\"}.ion-ios-partly-sunny-outline:before{content:\"\\F1DE\"}.ion-ios-pause:before{content:\"\\F478\"}.ion-ios-pause-outline:before{content:\"\\F477\"}.ion-ios-paw:before{content:\"\\F47A\"}.ion-ios-paw-outline:before{content:\"\\F479\"}.ion-ios-people:before{content:\"\\F47C\"}.ion-ios-people-outline:before{content:\"\\F47B\"}.ion-ios-person:before{content:\"\\F47E\"}.ion-ios-person-add:before{content:\"\\F1E1\"}.ion-ios-person-add-outline:before{content:\"\\F1E0\"}.ion-ios-person-outline:before{content:\"\\F47D\"}.ion-ios-phone-landscape-outline:before,.ion-ios-phone-landscape:before{content:\"\\F1E2\"}.ion-ios-phone-portrait-outline:before,.ion-ios-phone-portrait:before{content:\"\\F1E3\"}.ion-ios-photos:before{content:\"\\F482\"}.ion-ios-photos-outline:before{content:\"\\F481\"}.ion-ios-pie:before{content:\"\\F484\"}.ion-ios-pie-outline:before{content:\"\\F483\"}.ion-ios-pin:before{content:\"\\F1E5\"}.ion-ios-pin-outline:before{content:\"\\F1E4\"}.ion-ios-pint:before{content:\"\\F486\"}.ion-ios-pint-outline:before{content:\"\\F485\"}.ion-ios-pizza:before{content:\"\\F1E7\"}.ion-ios-pizza-outline:before{content:\"\\F1E6\"}.ion-ios-plane:before{content:\"\\F1E9\"}.ion-ios-plane-outline:before{content:\"\\F1E8\"}.ion-ios-planet:before{content:\"\\F1EB\"}.ion-ios-planet-outline:before{content:\"\\F1EA\"}.ion-ios-play:before{content:\"\\F488\"}.ion-ios-play-outline:before{content:\"\\F487\"}.ion-ios-podium:before{content:\"\\F1ED\"}.ion-ios-podium-outline:before{content:\"\\F1EC\"}.ion-ios-power:before{content:\"\\F1EF\"}.ion-ios-power-outline:before{content:\"\\F1EE\"}.ion-ios-pricetag:before{content:\"\\F48D\"}.ion-ios-pricetag-outline:before{content:\"\\F48C\"}.ion-ios-pricetags:before{content:\"\\F48F\"}.ion-ios-pricetags-outline:before{content:\"\\F48E\"}.ion-ios-print:before{content:\"\\F1F1\"}.ion-ios-print-outline:before{content:\"\\F1F0\"}.ion-ios-pulse:before{content:\"\\F493\"}.ion-ios-pulse-outline:before{content:\"\\F1F2\"}.ion-ios-qr-scanner-outline:before,.ion-ios-qr-scanner:before{content:\"\\F1F3\"}.ion-ios-quote:before{content:\"\\F1F5\"}.ion-ios-quote-outline:before{content:\"\\F1F4\"}.ion-ios-radio:before{content:\"\\F1F9\"}.ion-ios-radio-button-off-outline:before,.ion-ios-radio-button-off:before{content:\"\\F1F6\"}.ion-ios-radio-button-on-outline:before,.ion-ios-radio-button-on:before{content:\"\\F1F7\"}.ion-ios-radio-outline:before{content:\"\\F1F8\"}.ion-ios-rainy:before{content:\"\\F495\"}.ion-ios-rainy-outline:before{content:\"\\F494\"}.ion-ios-recording:before{content:\"\\F497\"}.ion-ios-recording-outline:before{content:\"\\F496\"}.ion-ios-redo:before{content:\"\\F499\"}.ion-ios-redo-outline:before{content:\"\\F498\"}.ion-ios-refresh:before{content:\"\\F49C\"}.ion-ios-refresh-circle:before{content:\"\\F226\"}.ion-ios-refresh-circle-outline:before{content:\"\\F224\"}.ion-ios-refresh-outline:before{content:\"\\F49C\"}.ion-ios-remove:before{content:\"\\F1FC\"}.ion-ios-remove-circle:before{content:\"\\F1FB\"}.ion-ios-remove-circle-outline:before{content:\"\\F1FA\"}.ion-ios-remove-outline:before{content:\"\\F1FC\"}.ion-ios-reorder-outline:before,.ion-ios-reorder:before{content:\"\\F1FD\"}.ion-ios-repeat-outline:before,.ion-ios-repeat:before{content:\"\\F1FE\"}.ion-ios-resize-outline:before,.ion-ios-resize:before{content:\"\\F1FF\"}.ion-ios-restaurant:before{content:\"\\F201\"}.ion-ios-restaurant-outline:before{content:\"\\F200\"}.ion-ios-return-left-outline:before,.ion-ios-return-left:before{content:\"\\F202\"}.ion-ios-return-right-outline:before,.ion-ios-return-right:before{content:\"\\F203\"}.ion-ios-reverse-camera:before{content:\"\\F49F\"}.ion-ios-reverse-camera-outline:before{content:\"\\F49E\"}.ion-ios-rewind:before{content:\"\\F4A1\"}.ion-ios-rewind-outline:before{content:\"\\F4A0\"}.ion-ios-ribbon:before{content:\"\\F205\"}.ion-ios-ribbon-outline:before{content:\"\\F204\"}.ion-ios-rose:before{content:\"\\F4A3\"}.ion-ios-rose-outline:before{content:\"\\F4A2\"}.ion-ios-sad:before{content:\"\\F207\"}.ion-ios-sad-outline:before{content:\"\\F206\"}.ion-ios-school:before{content:\"\\F209\"}.ion-ios-school-outline:before{content:\"\\F208\"}.ion-ios-search:before{content:\"\\F4A5\"}.ion-ios-search-outline:before{content:\"\\F20A\"}.ion-ios-send:before{content:\"\\F20C\"}.ion-ios-send-outline:before{content:\"\\F20B\"}.ion-ios-settings:before{content:\"\\F4A7\"}.ion-ios-settings-outline:before{content:\"\\F20D\"}.ion-ios-share:before{content:\"\\F211\"}.ion-ios-share-alt:before{content:\"\\F20F\"}.ion-ios-share-alt-outline:before{content:\"\\F20E\"}.ion-ios-share-outline:before{content:\"\\F210\"}.ion-ios-shirt:before{content:\"\\F213\"}.ion-ios-shirt-outline:before{content:\"\\F212\"}.ion-ios-shuffle-outline:before,.ion-ios-shuffle:before{content:\"\\F4A9\"}.ion-ios-skip-backward:before{content:\"\\F215\"}.ion-ios-skip-backward-outline:before{content:\"\\F214\"}.ion-ios-skip-forward:before{content:\"\\F217\"}.ion-ios-skip-forward-outline:before{content:\"\\F216\"}.ion-ios-snow:before{content:\"\\F218\"}.ion-ios-snow-outline:before{content:\"\\F22C\"}.ion-ios-speedometer:before{content:\"\\F4B0\"}.ion-ios-speedometer-outline:before{content:\"\\F4AF\"}.ion-ios-square:before{content:\"\\F21A\"}.ion-ios-square-outline:before{content:\"\\F219\"}.ion-ios-star:before{content:\"\\F4B3\"}.ion-ios-star-half-outline:before,.ion-ios-star-half:before{content:\"\\F4B1\"}.ion-ios-star-outline:before{content:\"\\F4B2\"}.ion-ios-stats:before{content:\"\\F21C\"}.ion-ios-stats-outline:before{content:\"\\F21B\"}.ion-ios-stopwatch:before{content:\"\\F4B5\"}.ion-ios-stopwatch-outline:before{content:\"\\F4B4\"}.ion-ios-subway:before{content:\"\\F21E\"}.ion-ios-subway-outline:before{content:\"\\F21D\"}.ion-ios-sunny:before{content:\"\\F4B7\"}.ion-ios-sunny-outline:before{content:\"\\F4B6\"}.ion-ios-swap-outline:before,.ion-ios-swap:before{content:\"\\F21F\"}.ion-ios-switch:before{content:\"\\F221\"}.ion-ios-switch-outline:before{content:\"\\F220\"}.ion-ios-sync-outline:before,.ion-ios-sync:before{content:\"\\F222\"}.ion-ios-tablet-landscape-outline:before,.ion-ios-tablet-landscape:before{content:\"\\F223\"}.ion-ios-tablet-portrait-outline:before,.ion-ios-tablet-portrait:before{content:\"\\F24E\"}.ion-ios-tennisball:before{content:\"\\F4BB\"}.ion-ios-tennisball-outline:before{content:\"\\F4BA\"}.ion-ios-text:before{content:\"\\F250\"}.ion-ios-text-outline:before{content:\"\\F24F\"}.ion-ios-thermometer:before{content:\"\\F252\"}.ion-ios-thermometer-outline:before{content:\"\\F251\"}.ion-ios-thumbs-down:before{content:\"\\F254\"}.ion-ios-thumbs-down-outline:before{content:\"\\F253\"}.ion-ios-thumbs-up:before{content:\"\\F256\"}.ion-ios-thumbs-up-outline:before{content:\"\\F255\"}.ion-ios-thunderstorm:before{content:\"\\F4BD\"}.ion-ios-thunderstorm-outline:before{content:\"\\F4BC\"}.ion-ios-time:before{content:\"\\F4BF\"}.ion-ios-time-outline:before{content:\"\\F4BE\"}.ion-ios-timer:before{content:\"\\F4C1\"}.ion-ios-timer-outline:before{content:\"\\F4C0\"}.ion-ios-train:before{content:\"\\F258\"}.ion-ios-train-outline:before{content:\"\\F257\"}.ion-ios-transgender-outline:before,.ion-ios-transgender:before{content:\"\\F259\"}.ion-ios-trash:before{content:\"\\F4C5\"}.ion-ios-trash-outline:before{content:\"\\F4C4\"}.ion-ios-trending-down-outline:before,.ion-ios-trending-down:before{content:\"\\F25A\"}.ion-ios-trending-up-outline:before,.ion-ios-trending-up:before{content:\"\\F25B\"}.ion-ios-trophy:before{content:\"\\F25D\"}.ion-ios-trophy-outline:before{content:\"\\F25C\"}.ion-ios-umbrella:before{content:\"\\F25F\"}.ion-ios-umbrella-outline:before{content:\"\\F25E\"}.ion-ios-undo:before{content:\"\\F4C7\"}.ion-ios-undo-outline:before{content:\"\\F4C6\"}.ion-ios-unlock:before{content:\"\\F261\"}.ion-ios-unlock-outline:before{content:\"\\F260\"}.ion-ios-videocam:before{content:\"\\F4CD\"}.ion-ios-videocam-outline:before{content:\"\\F4CC\"}.ion-ios-volume-down-outline:before,.ion-ios-volume-down:before{content:\"\\F262\"}.ion-ios-volume-mute-outline:before,.ion-ios-volume-mute:before{content:\"\\F263\"}.ion-ios-volume-off-outline:before,.ion-ios-volume-off:before{content:\"\\F264\"}.ion-ios-volume-up-outline:before,.ion-ios-volume-up:before{content:\"\\F265\"}.ion-ios-walk-outline:before,.ion-ios-walk:before{content:\"\\F266\"}.ion-ios-warning:before{content:\"\\F268\"}.ion-ios-warning-outline:before{content:\"\\F267\"}.ion-ios-watch-outline:before,.ion-ios-watch:before{content:\"\\F269\"}.ion-ios-water:before{content:\"\\F26B\"}.ion-ios-water-outline:before{content:\"\\F26A\"}.ion-ios-wifi:before{content:\"\\F26D\"}.ion-ios-wifi-outline:before{content:\"\\F26C\"}.ion-ios-wine:before{content:\"\\F26F\"}.ion-ios-wine-outline:before{content:\"\\F26E\"}.ion-ios-woman:before{content:\"\\F271\"}.ion-ios-woman-outline:before{content:\"\\F270\"}.ion-logo-android:before{content:\"\\F225\"}.ion-logo-angular:before{content:\"\\F227\"}.ion-logo-apple:before{content:\"\\F229\"}.ion-logo-bitcoin:before{content:\"\\F22B\"}.ion-logo-buffer:before{content:\"\\F22D\"}.ion-logo-chrome:before{content:\"\\F22F\"}.ion-logo-codepen:before{content:\"\\F230\"}.ion-logo-css3:before{content:\"\\F231\"}.ion-logo-designernews:before{content:\"\\F232\"}.ion-logo-dribbble:before{content:\"\\F233\"}.ion-logo-dropbox:before{content:\"\\F234\"}.ion-logo-euro:before{content:\"\\F235\"}.ion-logo-facebook:before{content:\"\\F236\"}.ion-logo-foursquare:before{content:\"\\F237\"}.ion-logo-freebsd-devil:before{content:\"\\F238\"}.ion-logo-github:before{content:\"\\F239\"}.ion-logo-google:before{content:\"\\F23A\"}.ion-logo-googleplus:before{content:\"\\F23B\"}.ion-logo-hackernews:before{content:\"\\F23C\"}.ion-logo-html5:before{content:\"\\F23D\"}.ion-logo-instagram:before{content:\"\\F23E\"}.ion-logo-javascript:before{content:\"\\F23F\"}.ion-logo-linkedin:before{content:\"\\F240\"}.ion-logo-markdown:before{content:\"\\F241\"}.ion-logo-nodejs:before{content:\"\\F242\"}.ion-logo-octocat:before{content:\"\\F243\"}.ion-logo-pinterest:before{content:\"\\F244\"}.ion-logo-playstation:before{content:\"\\F245\"}.ion-logo-python:before{content:\"\\F246\"}.ion-logo-reddit:before{content:\"\\F247\"}.ion-logo-rss:before{content:\"\\F248\"}.ion-logo-sass:before{content:\"\\F249\"}.ion-logo-skype:before{content:\"\\F24A\"}.ion-logo-snapchat:before{content:\"\\F24B\"}.ion-logo-steam:before{content:\"\\F24C\"}.ion-logo-tumblr:before{content:\"\\F24D\"}.ion-logo-tux:before{content:\"\\F2AE\"}.ion-logo-twitch:before{content:\"\\F2AF\"}.ion-logo-twitter:before{content:\"\\F2B0\"}.ion-logo-usd:before{content:\"\\F2B1\"}.ion-logo-vimeo:before{content:\"\\F2C4\"}.ion-logo-whatsapp:before{content:\"\\F2C5\"}.ion-logo-windows:before{content:\"\\F32F\"}.ion-logo-wordpress:before{content:\"\\F330\"}.ion-logo-xbox:before{content:\"\\F34C\"}.ion-logo-yahoo:before{content:\"\\F34D\"}.ion-logo-yen:before{content:\"\\F34E\"}.ion-logo-youtube:before{content:\"\\F34F\"}.ion-md-add:before{content:\"\\F273\"}.ion-md-add-circle:before{content:\"\\F272\"}.ion-md-alarm:before{content:\"\\F274\"}.ion-md-albums:before{content:\"\\F275\"}.ion-md-alert:before{content:\"\\F276\"}.ion-md-american-football:before{content:\"\\F277\"}.ion-md-analytics:before{content:\"\\F278\"}.ion-md-aperture:before{content:\"\\F279\"}.ion-md-apps:before{content:\"\\F27A\"}.ion-md-appstore:before{content:\"\\F27B\"}.ion-md-archive:before{content:\"\\F27C\"}.ion-md-arrow-back:before{content:\"\\F27D\"}.ion-md-arrow-down:before{content:\"\\F27E\"}.ion-md-arrow-dropdown:before{content:\"\\F280\"}.ion-md-arrow-dropdown-circle:before{content:\"\\F27F\"}.ion-md-arrow-dropleft:before{content:\"\\F282\"}.ion-md-arrow-dropleft-circle:before{content:\"\\F281\"}.ion-md-arrow-dropright:before{content:\"\\F284\"}.ion-md-arrow-dropright-circle:before{content:\"\\F283\"}.ion-md-arrow-dropup:before{content:\"\\F286\"}.ion-md-arrow-dropup-circle:before{content:\"\\F285\"}.ion-md-arrow-forward:before{content:\"\\F287\"}.ion-md-arrow-round-back:before{content:\"\\F288\"}.ion-md-arrow-round-down:before{content:\"\\F289\"}.ion-md-arrow-round-forward:before{content:\"\\F28A\"}.ion-md-arrow-round-up:before{content:\"\\F28B\"}.ion-md-arrow-up:before{content:\"\\F28C\"}.ion-md-at:before{content:\"\\F28D\"}.ion-md-attach:before{content:\"\\F28E\"}.ion-md-backspace:before{content:\"\\F28F\"}.ion-md-barcode:before{content:\"\\F290\"}.ion-md-baseball:before{content:\"\\F291\"}.ion-md-basket:before{content:\"\\F292\"}.ion-md-basketball:before{content:\"\\F293\"}.ion-md-battery-charging:before{content:\"\\F294\"}.ion-md-battery-dead:before{content:\"\\F295\"}.ion-md-battery-full:before{content:\"\\F296\"}.ion-md-beaker:before{content:\"\\F297\"}.ion-md-beer:before{content:\"\\F298\"}.ion-md-bicycle:before{content:\"\\F299\"}.ion-md-bluetooth:before{content:\"\\F29A\"}.ion-md-boat:before{content:\"\\F29B\"}.ion-md-body:before{content:\"\\F29C\"}.ion-md-bonfire:before{content:\"\\F29D\"}.ion-md-book:before{content:\"\\F29E\"}.ion-md-bookmark:before{content:\"\\F29F\"}.ion-md-bookmarks:before{content:\"\\F2A0\"}.ion-md-bowtie:before{content:\"\\F2A1\"}.ion-md-briefcase:before{content:\"\\F2A2\"}.ion-md-browsers:before{content:\"\\F2A3\"}.ion-md-brush:before{content:\"\\F2A4\"}.ion-md-bug:before{content:\"\\F2A5\"}.ion-md-build:before{content:\"\\F2A6\"}.ion-md-bulb:before{content:\"\\F2A7\"}.ion-md-bus:before{content:\"\\F2A8\"}.ion-md-cafe:before{content:\"\\F2A9\"}.ion-md-calculator:before{content:\"\\F2AA\"}.ion-md-calendar:before{content:\"\\F2AB\"}.ion-md-call:before{content:\"\\F2AC\"}.ion-md-camera:before{content:\"\\F2AD\"}.ion-md-car:before{content:\"\\F2B2\"}.ion-md-card:before{content:\"\\F2B3\"}.ion-md-cart:before{content:\"\\F2B4\"}.ion-md-cash:before{content:\"\\F2B5\"}.ion-md-chatboxes:before{content:\"\\F2B6\"}.ion-md-chatbubbles:before{content:\"\\F2B7\"}.ion-md-checkbox:before{content:\"\\F2B9\"}.ion-md-checkbox-outline:before{content:\"\\F2B8\"}.ion-md-checkmark:before{content:\"\\F2BC\"}.ion-md-checkmark-circle:before{content:\"\\F2BB\"}.ion-md-checkmark-circle-outline:before{content:\"\\F2BA\"}.ion-md-clipboard:before{content:\"\\F2BD\"}.ion-md-clock:before{content:\"\\F2BE\"}.ion-md-close:before{content:\"\\F2C0\"}.ion-md-close-circle:before{content:\"\\F2BF\"}.ion-md-closed-captioning:before{content:\"\\F2C1\"}.ion-md-cloud:before{content:\"\\F2C9\"}.ion-md-cloud-circle:before{content:\"\\F2C2\"}.ion-md-cloud-done:before{content:\"\\F2C3\"}.ion-md-cloud-download:before{content:\"\\F2C6\"}.ion-md-cloud-outline:before{content:\"\\F2C7\"}.ion-md-cloud-upload:before{content:\"\\F2C8\"}.ion-md-cloudy:before{content:\"\\F2CB\"}.ion-md-cloudy-night:before{content:\"\\F2CA\"}.ion-md-code:before{content:\"\\F2CE\"}.ion-md-code-download:before{content:\"\\F2CC\"}.ion-md-code-working:before{content:\"\\F2CD\"}.ion-md-cog:before{content:\"\\F2CF\"}.ion-md-color-fill:before{content:\"\\F2D0\"}.ion-md-color-filter:before{content:\"\\F2D1\"}.ion-md-color-palette:before{content:\"\\F2D2\"}.ion-md-color-wand:before{content:\"\\F2D3\"}.ion-md-compass:before{content:\"\\F2D4\"}.ion-md-construct:before{content:\"\\F2D5\"}.ion-md-contact:before{content:\"\\F2D6\"}.ion-md-contacts:before{content:\"\\F2D7\"}.ion-md-contract:before{content:\"\\F2D8\"}.ion-md-contrast:before{content:\"\\F2D9\"}.ion-md-copy:before{content:\"\\F2DA\"}.ion-md-create:before{content:\"\\F2DB\"}.ion-md-crop:before{content:\"\\F2DC\"}.ion-md-cube:before{content:\"\\F2DD\"}.ion-md-cut:before{content:\"\\F2DE\"}.ion-md-desktop:before{content:\"\\F2DF\"}.ion-md-disc:before{content:\"\\F2E0\"}.ion-md-document:before{content:\"\\F2E1\"}.ion-md-done-all:before{content:\"\\F2E2\"}.ion-md-download:before{content:\"\\F2E3\"}.ion-md-easel:before{content:\"\\F2E4\"}.ion-md-egg:before{content:\"\\F2E5\"}.ion-md-exit:before{content:\"\\F2E6\"}.ion-md-expand:before{content:\"\\F2E7\"}.ion-md-eye:before{content:\"\\F2E9\"}.ion-md-eye-off:before{content:\"\\F2E8\"}.ion-md-fastforward:before{content:\"\\F2EA\"}.ion-md-female:before{content:\"\\F2EB\"}.ion-md-filing:before{content:\"\\F2EC\"}.ion-md-film:before{content:\"\\F2ED\"}.ion-md-finger-print:before{content:\"\\F2EE\"}.ion-md-flag:before{content:\"\\F2EF\"}.ion-md-flame:before{content:\"\\F2F0\"}.ion-md-flash:before{content:\"\\F2F1\"}.ion-md-flask:before{content:\"\\F2F2\"}.ion-md-flower:before{content:\"\\F2F3\"}.ion-md-folder:before{content:\"\\F2F5\"}.ion-md-folder-open:before{content:\"\\F2F4\"}.ion-md-football:before{content:\"\\F2F6\"}.ion-md-funnel:before{content:\"\\F2F7\"}.ion-md-game-controller-a:before{content:\"\\F2F8\"}.ion-md-game-controller-b:before{content:\"\\F2F9\"}.ion-md-git-branch:before{content:\"\\F2FA\"}.ion-md-git-commit:before{content:\"\\F2FB\"}.ion-md-git-compare:before{content:\"\\F2FC\"}.ion-md-git-merge:before{content:\"\\F2FD\"}.ion-md-git-network:before{content:\"\\F2FE\"}.ion-md-git-pull-request:before{content:\"\\F2FF\"}.ion-md-glasses:before{content:\"\\F300\"}.ion-md-globe:before{content:\"\\F301\"}.ion-md-grid:before{content:\"\\F302\"}.ion-md-hammer:before{content:\"\\F303\"}.ion-md-hand:before{content:\"\\F304\"}.ion-md-happy:before{content:\"\\F305\"}.ion-md-headset:before{content:\"\\F306\"}.ion-md-heart:before{content:\"\\F308\"}.ion-md-heart-outline:before{content:\"\\F307\"}.ion-md-help:before{content:\"\\F30B\"}.ion-md-help-buoy:before{content:\"\\F309\"}.ion-md-help-circle:before{content:\"\\F30A\"}.ion-md-home:before{content:\"\\F30C\"}.ion-md-ice-cream:before{content:\"\\F30D\"}.ion-md-image:before{content:\"\\F30E\"}.ion-md-images:before{content:\"\\F30F\"}.ion-md-infinite:before{content:\"\\F310\"}.ion-md-information:before{content:\"\\F312\"}.ion-md-information-circle:before{content:\"\\F311\"}.ion-md-ionic:before{content:\"\\F313\"}.ion-md-ionitron:before{content:\"\\F314\"}.ion-md-jet:before{content:\"\\F315\"}.ion-md-key:before{content:\"\\F316\"}.ion-md-keypad:before{content:\"\\F317\"}.ion-md-laptop:before{content:\"\\F318\"}.ion-md-leaf:before{content:\"\\F319\"}.ion-md-link:before{content:\"\\F22E\"}.ion-md-list:before{content:\"\\F31B\"}.ion-md-list-box:before{content:\"\\F31A\"}.ion-md-locate:before{content:\"\\F31C\"}.ion-md-lock:before{content:\"\\F31D\"}.ion-md-log-in:before{content:\"\\F31E\"}.ion-md-log-out:before{content:\"\\F31F\"}.ion-md-magnet:before{content:\"\\F320\"}.ion-md-mail:before{content:\"\\F322\"}.ion-md-mail-open:before{content:\"\\F321\"}.ion-md-male:before{content:\"\\F323\"}.ion-md-man:before{content:\"\\F324\"}.ion-md-map:before{content:\"\\F325\"}.ion-md-medal:before{content:\"\\F326\"}.ion-md-medical:before{content:\"\\F327\"}.ion-md-medkit:before{content:\"\\F328\"}.ion-md-megaphone:before{content:\"\\F329\"}.ion-md-menu:before{content:\"\\F32A\"}.ion-md-mic:before{content:\"\\F32C\"}.ion-md-mic-off:before{content:\"\\F32B\"}.ion-md-microphone:before{content:\"\\F32D\"}.ion-md-moon:before{content:\"\\F32E\"}.ion-md-more:before{content:\"\\F1C9\"}.ion-md-move:before{content:\"\\F331\"}.ion-md-musical-note:before{content:\"\\F332\"}.ion-md-musical-notes:before{content:\"\\F333\"}.ion-md-navigate:before{content:\"\\F334\"}.ion-md-no-smoking:before{content:\"\\F335\"}.ion-md-notifications:before{content:\"\\F338\"}.ion-md-notifications-off:before{content:\"\\F336\"}.ion-md-notifications-outline:before{content:\"\\F337\"}.ion-md-nuclear:before{content:\"\\F339\"}.ion-md-nutrition:before{content:\"\\F33A\"}.ion-md-open:before{content:\"\\F33B\"}.ion-md-options:before{content:\"\\F33C\"}.ion-md-outlet:before{content:\"\\F33D\"}.ion-md-paper:before{content:\"\\F33F\"}.ion-md-paper-plane:before{content:\"\\F33E\"}.ion-md-partly-sunny:before{content:\"\\F340\"}.ion-md-pause:before{content:\"\\F341\"}.ion-md-paw:before{content:\"\\F342\"}.ion-md-people:before{content:\"\\F343\"}.ion-md-person:before{content:\"\\F345\"}.ion-md-person-add:before{content:\"\\F344\"}.ion-md-phone-landscape:before{content:\"\\F346\"}.ion-md-phone-portrait:before{content:\"\\F347\"}.ion-md-photos:before{content:\"\\F348\"}.ion-md-pie:before{content:\"\\F349\"}.ion-md-pin:before{content:\"\\F34A\"}.ion-md-pint:before{content:\"\\F34B\"}.ion-md-pizza:before{content:\"\\F354\"}.ion-md-plane:before{content:\"\\F355\"}.ion-md-planet:before{content:\"\\F356\"}.ion-md-play:before{content:\"\\F357\"}.ion-md-podium:before{content:\"\\F358\"}.ion-md-power:before{content:\"\\F359\"}.ion-md-pricetag:before{content:\"\\F35A\"}.ion-md-pricetags:before{content:\"\\F35B\"}.ion-md-print:before{content:\"\\F35C\"}.ion-md-pulse:before{content:\"\\F35D\"}.ion-md-qr-scanner:before{content:\"\\F35E\"}.ion-md-quote:before{content:\"\\F35F\"}.ion-md-radio:before{content:\"\\F362\"}.ion-md-radio-button-off:before{content:\"\\F360\"}.ion-md-radio-button-on:before{content:\"\\F361\"}.ion-md-rainy:before{content:\"\\F363\"}.ion-md-recording:before{content:\"\\F364\"}.ion-md-redo:before{content:\"\\F365\"}.ion-md-refresh:before{content:\"\\F366\"}.ion-md-refresh-circle:before{content:\"\\F228\"}.ion-md-remove:before{content:\"\\F368\"}.ion-md-remove-circle:before{content:\"\\F367\"}.ion-md-reorder:before{content:\"\\F369\"}.ion-md-repeat:before{content:\"\\F36A\"}.ion-md-resize:before{content:\"\\F36B\"}.ion-md-restaurant:before{content:\"\\F36C\"}.ion-md-return-left:before{content:\"\\F36D\"}.ion-md-return-right:before{content:\"\\F36E\"}.ion-md-reverse-camera:before{content:\"\\F36F\"}.ion-md-rewind:before{content:\"\\F370\"}.ion-md-ribbon:before{content:\"\\F371\"}.ion-md-rose:before{content:\"\\F372\"}.ion-md-sad:before{content:\"\\F373\"}.ion-md-school:before{content:\"\\F374\"}.ion-md-search:before{content:\"\\F375\"}.ion-md-send:before{content:\"\\F376\"}.ion-md-settings:before{content:\"\\F377\"}.ion-md-share:before{content:\"\\F379\"}.ion-md-share-alt:before{content:\"\\F378\"}.ion-md-shirt:before{content:\"\\F37A\"}.ion-md-shuffle:before{content:\"\\F37B\"}.ion-md-skip-backward:before{content:\"\\F37C\"}.ion-md-skip-forward:before{content:\"\\F37D\"}.ion-md-snow:before{content:\"\\F37E\"}.ion-md-speedometer:before{content:\"\\F37F\"}.ion-md-square:before{content:\"\\F381\"}.ion-md-square-outline:before{content:\"\\F380\"}.ion-md-star:before{content:\"\\F384\"}.ion-md-star-half:before{content:\"\\F382\"}.ion-md-star-outline:before{content:\"\\F383\"}.ion-md-stats:before{content:\"\\F385\"}.ion-md-stopwatch:before{content:\"\\F386\"}.ion-md-subway:before{content:\"\\F387\"}.ion-md-sunny:before{content:\"\\F388\"}.ion-md-swap:before{content:\"\\F389\"}.ion-md-switch:before{content:\"\\F38A\"}.ion-md-sync:before{content:\"\\F38B\"}.ion-md-tablet-landscape:before{content:\"\\F38C\"}.ion-md-tablet-portrait:before{content:\"\\F38D\"}.ion-md-tennisball:before{content:\"\\F38E\"}.ion-md-text:before{content:\"\\F38F\"}.ion-md-thermometer:before{content:\"\\F390\"}.ion-md-thumbs-down:before{content:\"\\F391\"}.ion-md-thumbs-up:before{content:\"\\F392\"}.ion-md-thunderstorm:before{content:\"\\F393\"}.ion-md-time:before{content:\"\\F394\"}.ion-md-timer:before{content:\"\\F395\"}.ion-md-train:before{content:\"\\F396\"}.ion-md-transgender:before{content:\"\\F397\"}.ion-md-trash:before{content:\"\\F398\"}.ion-md-trending-down:before{content:\"\\F399\"}.ion-md-trending-up:before{content:\"\\F39A\"}.ion-md-trophy:before{content:\"\\F39B\"}.ion-md-umbrella:before{content:\"\\F39C\"}.ion-md-undo:before{content:\"\\F39D\"}.ion-md-unlock:before{content:\"\\F39E\"}.ion-md-videocam:before{content:\"\\F39F\"}.ion-md-volume-down:before{content:\"\\F3A0\"}.ion-md-volume-mute:before{content:\"\\F3A1\"}.ion-md-volume-off:before{content:\"\\F3A2\"}.ion-md-volume-up:before{content:\"\\F3A3\"}.ion-md-walk:before{content:\"\\F3A4\"}.ion-md-warning:before{content:\"\\F3A5\"}.ion-md-watch:before{content:\"\\F3A6\"}.ion-md-water:before{content:\"\\F3A7\"}.ion-md-wifi:before{content:\"\\F3A8\"}.ion-md-wine:before{content:\"\\F3A9\"}.ion-md-woman:before{content:\"\\F3AA\"}", ""]);

// exports


/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(3);
const react_1 = __webpack_require__(3);
class CarConfig extends react_1.Component {
    render() {
        return (React.createElement("div", null,
            "Car Config for: ",
            this.props.track.name && React.createElement("span", null, this.props.track.name)));
    }
}
exports.default = CarConfig;


/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(3);
const lists_1 = __webpack_require__(122);
const index_1 = __webpack_require__(24);
const styled_components_1 = __webpack_require__(12);
__webpack_require__(812);
const TempWrap = styled_components_1.default.li `
    display:flex;
    flex-flow: row;
    justify-content: space-around;
    align-items:center;

`;
const ConditionInfo = styled_components_1.default.h3 `
    font-size: 16px;
`;
const TempInfo = styled_components_1.default.h2 `
    font-size: 18px;
`;
const Link = styled_components_1.default.span `
    font-size: 12px;
    color: ${index_1.Colors.linkBlue};
    cursor:pointer;
`;
class WeatherList extends React.Component {
    constructor(props) {
        super(props);
        this.showWeather = () => {
            this.setState(prevState => ({
                isVisible: !prevState.isVisible
            }));
        };
        this.selectForecast = (element) => {
            console.log('selected weather', element);
            this.props.selectForecast(element);
        };
        this.state = { isVisible: true };
    }
    ;
    componentDidMount() {
        /*
        const weatherGraph = d3.json(this.props.forecastList, function(data){
    let extent = d3.extent(data, function(d: weather) {
        return d.temperature;
    });

    let scale = d3.scaleLinear()
        .domain(extent)
        .range([0, 600]);
})
*/
    }
    render() {
        const forecastList = this.props.forecastList;
        return (React.createElement("div", null, this.state.isVisible &&
            React.createElement(lists_1.Ul, null,
                "Dagens V\u00E4derprognos:",
                this.props.forecastList &&
                    forecastList.map((element, index) => React.createElement(TempWrap, { key: index },
                        React.createElement(ConditionInfo, null, element.conditions),
                        React.createElement(TempInfo, null,
                            element.temperature,
                            "\u00B0"),
                        React.createElement(Link, { onClick: (e) => this.selectForecast(element) }, "V\u00E4lj prognos"))))));
    }
    ;
}
exports.default = WeatherList;


/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getContrastYIQ(hexcolor) {
    let r = parseInt(hexcolor.substr(0, 2), 16);
    let g = parseInt(hexcolor.substr(2, 2), 16);
    let b = parseInt(hexcolor.substr(4, 2), 16);
    let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    console.log(yiq);
    console.log(hexcolor);
    return (yiq >= 128) ? "black" : "white";
}
exports.getContrastYIQ = getContrastYIQ;


/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(123);
const foreCast = [
    {
        "conditions": index_1.ConditionType.SUNNY,
        "temperature": 28
    },
    {
        "conditions": index_1.ConditionType.RAIN,
        "temperature": 19
    }
];
class WeatherService {
    constructor() {
    }
    static getForecast() {
        return foreCast;
    }
}
exports.default = WeatherService;


/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(807);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(41)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(807, function() {
			var newContent = __webpack_require__(807);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=track-view.component-0.js.map