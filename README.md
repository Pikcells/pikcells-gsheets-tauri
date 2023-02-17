# pikcells-gsheets-tauri
Website and desktop app in one, probs multiple build steps.


## Tech

### Website javascript tech 

https://nuxt.com/docs/getting-started/installation

### Desktop rust tech

https://tauri.app/v1/guides/getting-started/setup/integrate/


## DEV

When using tauri you can only generate for the platform your on. Using github actions to build linux build and pushing out build jobs to microsoft azure to windows windows builds. mac...


### WEB

```bash

$ cd app

$ npm run dev

## OR

$ npm run build

```


### DESKTOP

```bash

$ cd app

$ npm run tauri dev

## OR

$ npm run tauri build

```
