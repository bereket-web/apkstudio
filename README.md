# MorseMaster Android

A native Android wrapper around the supplied MorseMaster HTML app.

## Included
- WebView-hosted MorseMaster UI
- JavaScript and DOM storage enabled
- Secure WebViewAssetLoader origin (`https://appassets.androidplatform.net`)
- Runtime microphone permission handling for `getUserMedia()`
- Android `RECORD_AUDIO` permission
- Ready for APK/AAB building as a Gradle Android project

## Import
Import the entire project folder/repository into an Android-capable builder or Android Studio.

Main entry point:
`app/src/main/java/com/morsemaster/app/MainActivity.kt`

Web app:
`app/src/main/assets/index.html`

Note: The Premium screen remains a demo; no real billing is implemented.
