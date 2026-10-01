# Learning Kits app

One Android app. Every `.html` file in `www/kits/` becomes a card on the home screen.

## Add a new kit
1. Put the self-contained `.html` file in `www/kits/`.
2. Optional, inside `<head>`: `<meta name="kit-desc" content="Short line">` and `<meta name="kit-color" content="#3F6FFF">`. The card title is the page `<title>`.
3. Push to GitHub. The APK rebuilds.

Kits must work offline: no CDN scripts, no fetch to other sites. Google Fonts will not load without internet, so give every font a fallback.

## Get the APK
1. Create a GitHub repo and upload everything in this folder (keep the `.github` folder).
2. Open the repo, go to Actions, run "Build APK" (it also runs on every push).
3. When it finishes, download the `learning-kits-apk` file from that run, unzip, install `app-debug.apk`.

Back button: closes a kit and returns to the kit list. Back on the list asks "Exit the app?" with Yes and No.
