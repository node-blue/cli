# Node-BLUE CLI

Write your automations for Home Assistant in JavaScript using a modern, intuitive API.

## Installation

Node-BLUE CLI requires Node.js version 12 or above. To install, run the following command from any directory in your terminal:

```sh
$ npm i -g @node-blue/cli
```

## Usage

Installing the CLI globally provides access to the `node-blue` command.

```sh
$ node-blue [command]

# Run `help` for detailed information about the CLI
$ node-blue help

# Run `start` to start the main application
$ node-blue start [nodes]
```

`node-blue start` takes a single (optional) argument of a path to a directory Node-BLUE should watch for [`nodes`](#nodes). By default `./nodes` is used.

`node-blue start` accepts the following options. All options may also be set by environment variables. CLI options take precedence over environment variables.

| CLI option    | .env equivalent | details                                                                   | default          |
| ------------- | --------------- | ------------------------------------------------------------------------- | ---------------- |
| `-h, --host`  | `HASS_HOST`     | Specify your Home Assistant host                                          | `hassio.local`   |
| `-P, --path`  | `HASS_PATH`     | Specify the path to the Websocket API on your Home Assistant instance     | `/api/websocket` |
| `-p, --port`  | `HASS_PORT`     | Specify which port to use when connecting to your Home Assistant Instance | `8123`           |
| `-s, --s`     | `HASS_SECURE`   | Connect to Home Assistant using the `wss` protocol                        | `false`          |
| `-t, --token` | `HASS_TOKEN`    | Specify a long-lived access token for your Home Assistant instance        |                  |
