# MorseMaster Android APK Builder

This project packages the existing MorseMaster HTML/CSS/JavaScript app as an Android app using Capacitor.

## Build from a phone using GitHub

1. Create a new GitHub repository.
2. Upload every file in this folder (keep the folder structure).
3. Open the repository's **Actions** tab.
4. Select **Build MorseMaster APK**.
5. Tap **Run workflow**.
6. Wait for the workflow to finish.
7. Open the completed workflow and download the **MorseMaster-debug-APK** artifact.
8. Extract it and install `app-debug.apk` on Android.

## Notes

- The first build may take several minutes.
- Android may ask permission for the microphone when the app uses recording.
- The APK is a debug build. For Play Store publishing, a signed release build is required.
