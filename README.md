# discord-blog-newsletter
post daily new post within seleced blog on discord, on 7 a.m. (UTC-8) daily.

## Prerequisite

You have to first setup [this project](https://github.com/ryankert01/rss-friend), to use the api we setup in it.

## How to use that:

1. fork this repository
2. setup a basic discord bot
3. get the bot's BOT_TOKEN and store it in this repository's secret. (use BOT_TOKEN as secret name)
4. acess ./main.js, and seach for `edit-channel-id`, and change the following id to your channel id.

```js
// edit-channel-id
let channel = client.channels.cache.get('<your_channel_id>');
```

> ### find your channel id:
> To get channel id, open Discord and go to your settings. On the "Advanced" page, turn on "Developer Mode". This will enable a "Copy ID" button in the context menu when you right-click on a channel, a server icon, or a user's profile, etc.

5. access ./main.js, and search for `edit-api`, and change the following url to your [this project's](https://github.com/ryankert01/rss-friend) api url.

```js
// edit-api
fetch('https://www.ryankert.cc/rss-friend/sorted.json') // substitude that to your url.
    .then( (res) => res.json())
    .then((json) => {
        data = json;
    })
```

6. and you're all set.


> **Warning**
> You have to manually enable github action, which forked repositories is disabled by default.

## dev

install dependencies

```sh
npm i
```

Run Server

```sh
npm run start
```
