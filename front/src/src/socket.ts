
export const production = true;
// "undefined" means the URL will be computed from the `window.location` object
export const URL = production ? "wss://mine-game-ad7203d2c5fd.herokuapp.com/chat" : 'ws://localhost:8000/chat';
