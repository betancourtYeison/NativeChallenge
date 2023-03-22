# Native Challenge

Initial development of YaGanaste React Native mobile app

<p align="center" >
  <kbd>
    <img
      src="https://github.com/betancourtYeison/NativeChallenge/blob/master/src/assets/images/iOS.png?raw=true"
      title="iOS"
      float="left"
      width="235"
      height="511"
    >
  </kbd>
  <kbd>
    <img
      src="https://github.com/betancourtYeison/NativeChallenge/blob/master/src/assets/images/Android.png?raw=true"
      title="Android"
      float="right"
      width="235"
      height="511"
    >
  </kbd>
  <br>
  <em>Bank list.</em>
</p>

## Setup

Please see the [React Native docs Getting Started guide](https://facebook.github.io/react-native/docs/getting-started) using the React Native CLI for dependencies. Then clone the repo, open a terminal window in the project root directory, and run the following commands to get the app running:

- Clone repository: `git clone https://github.com/betancourtYeison/NativeChallenge.git`
- `yarn install` - Install project dependencies
- `cd ios && pod install && cd ..` - Install iOS dependencies
- `yarn start` (Optional) - Start the packager. This will happen automatically if not done manually.
- `yarn ios/yarn android` - Run the app locally. By default this will run an iPhone 14 simulator / install to the single Android device connected (if more than one are connected, you must specify the device with `—deviceId` which can be gotten from `add devices`).

**Note:** Yarn installation instructions can be found [here](https://yarnpkg.com/lang/en/docs/install/#mac-stable). `npm` is also a viable alternative but please never commit `package-lock.json`

### Build Issues

React Native runs a local packager to bundle the JS for use by the app as well as having local native builds. Occasionally, and especially when working with branches and/or native dependencies, something in one of these parts will get out of sync and cause the build or bundler to malfunction. In those cases follow these steps:

- `rm -rf node_modules && yarn` - Remove and get dependencies to ensure you have the latest
- `watchman watch-del-all` - Clear watchman watchers forcing watchman to initialize them again.
- `yarn start —reset-cache` - Start the packager with the cache reset.

#### iOS

With significant iOS native changes, it is sometimes necessary to clean the build. This can be done in Xcode or you can simply run `rm -rf ios/build` from the app's root folder.

#### Android

With significant Android native changes, it is sometimes necessary to clean the build. This can be done in Android Studio or you can run the following `cd android && ./gradlew clean` from the app's root folder. This is typically needed far less than the iOS equivalent.

## Testing

The app is tested in a variety of ways with unit and integration testing.

- `yarn test` - Test components

### Jest & Snapshots

Unit tests through Jest will be added for the project such that coverage is maintained at a 90% threshold, checked by the CI. Snapshots are encouraged at a higher level to cover most of the lower components.
