import {TONClient, setWasmOptions} from 'ton-client-web-js';

window.Buffer = Buffer;

window.TONClient = TONClient;

window.TONClient.setWasmOptions = setWasmOptions;