
export const production = false;
// "undefined" means the URL will be computed from the `window.location` object
export let URL = !production ? "wss://mine-game-ad7203d2c5fd.herokuapp.com/chat" : 'ws://localhost:8000/chat';
URL = "wss://minet-dfaa7a868218.herokuapp.com/chat"