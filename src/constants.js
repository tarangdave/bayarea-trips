import keyMirror from 'key-mirror';


export const ActionTypes = keyMirror({
    LOAD_DATA: null,
    SET_TRIPS: null,
    SET_SINGLE_TRIP: null,
    SET_DATES: null,
    SET_DATE_TRIP: null,
    SET_TIME: null,
    SET_TIME_TRIP: null,
});

export const BINS = [
    { color: [16, 32, 246], name: '0 - 10' },
    { color: [117, 239, 139], name: '10 - 20' },
    { color: [254, 224, 139], name: '20 - 30' },
    { color: [244, 109, 67], name: '30 - 40' },
    { color: [168, 0, 0], name: '40 - 50' },
];


export const DB_INDEXES = ['line_all', 'line_combined', 'trips'];

export const DB_URL = 'http://localhost:9200';

export const MAP_BOX_TOKEN = 'pk.eyJ1IjoiZGlzaGFuazIyIiwiYSI6ImNqc21maTlsNDAwejM0NG8xZnVybzZnMXUifQ.6JAxYFhaB-iZEib-1CkM_Q';

export const STREET_VIEW_TILE = `https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token=${MAP_BOX_TOKEN}`;