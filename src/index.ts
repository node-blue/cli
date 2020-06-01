import { program } from "commander";
import figlet from "figlet";
// @ts-ignore ref: https://github.com/patorjk/figlet.js/issues/52
import standard from "figlet/importable-fonts/Standard";

// @ts-ignore
import { init } from "node-blue";

import { description, version } from "../package.json";

const name = "Node-BLUE";

program.version(version);
program.description(description);

// @ts-ignore ref: https://github.com/patorjk/figlet.js/issues/52
figlet.parseFont("Standard", standard);
console.log(figlet.textSync(name));

console.log(`Version: ${version}`);

program
    .command("start [nodes]")
    .description(`start ${name}`)
    .option("-h, --host <host>", "your Home Assistant instance's host")
    .option("-P, --path <path>", "path to the Websocket API", "/api/websocket")
    .option("-p, --port <port>", "your Home Assistant instance's port", "8123")
    .option("-s, --secure", "use a secure connection")
    .option("-t, --token <token>", "a long-lived access token")
    .option("-S, --socket <socket>", "full Websocket API location")
    .action(init);

program.parse(process.argv);
