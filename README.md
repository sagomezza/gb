# Core Novacomp App

Core Novacomp mobile app

App center Android: https://build.appcenter.ms/v0.1/apps/ab44e50c-cac4-4a50-b806-d4e6c343837f/branches/QA-App-center/badge
App center iOS: https://build.appcenter.ms/v0.1/apps/215ba403-74f0-4d67-ba8d-09f746b77130/branches/QA-App-center/badge

## Prerequisites to build

- Android Studio ([Download](https://developer.android.com/studio))
  - This is optional, but can be very useful in debugging applications and managing configurations.
- Cocoapods
  - macOS: `brew install cocoapods`
- Flipper ([Installation](https://fbflipper.com/docs/getting-started/index#installation) instructions)
  - macOS: `brew install --cask flipper`
- Node v14.15.0
- Xcode ([Download](https://developer.apple.com/xcode/) or use the [macOS App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12))

## Dependency Installation

```bash
yarn
```

This will install all dependencies then run the `postinstall` script(s) as well which will cover linking assets and installing mobile-specific dependencies (ie - cocoapods, etc).

## Running the App

See [Running On Device](https://reactnative.dev/docs/running-on-device)

### Environment file

Duplicate [.env.example](.env.example) and rename it to `.env`. The `.env` file is used by the `react-native-dotenv` package in the [babel.config.js](babel.config.js).

Changes to this file requires restarting the `yarn start` process.

### Run Project in iOS

Run `yarn ios` to build and open the simulator without opening Xcode. A custom simulator can be provided as a command line argument as well; see [Running on Simulator](https://reactnative.dev/docs/running-on-simulator-ios).

Xcode can be used directly as well:

1. In a terminal, run `yarn start` to run react-native
2. Open [ios/rnboilerplate.xcworkspace](ios/rnboilerplate.xcworkspace) in Xcode
3. Run the application (click the Play icon or use `cmd+r`)
   (optional) change the device or simulator you're targeting using the device selector dropdown

### Run Project in Android

Run `yarn android` to build and open the simulator without opening Android Studio.

## Release Management

TBD

## Troubleshooting

### `xcrun: error: SDK "iphoneos" cannot be located`

Make sure your command line tools are in the right path.

1. Open Xcode preferences
2. Go to the Locations tab
3. Verify `Command Line Tools` has a version selected

From the terminal, a quick fix may be to switch `xcode-select` quickly using:

```bash
sudo xcode-select --switch /Applications/Xcode.app
```

_Note_: this may very based on the system.
