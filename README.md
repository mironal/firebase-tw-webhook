# Firebase Twitter webhook

A example project for Twitter Activity API Webhook.

https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/guides/getting-started-with-webhooks

## How to use

1. Create your Twitter App.
  - http://apps.twitter.com
2. And set up your Twitter App.
  - https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/guides/getting-started-with-webhooks
3. Create your firebase project.
  - https://console.firebase.google.com
4. Clone to your local develop directory this project.
5. run `firebase use --add` command in this project directory and choose a project your created.
6. Rewrite your consumer secret to `set_functions_config.sh`. And execute one.
7. run `npm install` in the `functions` directory.
8. run `firebase deploy --only functions` in this directory (Don't `functions` directory).
9. Now you can use Twitter Activity API.

## How control the webhook

[This is the official document](https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/guides/managing-webhooks-and-subscriptions)

[This is the usefull CLI and nodejs library named `tw-activity`](https://github.com/mironal/tw-activity)

Using `tw-activity` you can operate like the following.

`tw-activity create-wh https://your.domain/webhook`

Please try and check (◍•ᴗ•◍)
