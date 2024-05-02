# React Native LaunchDarkly Micro Frontend Demo
This project demonstrates how to build a micro frontend application using React Native, LaunchDarkly, and Re.Pack for module federation.

![](./rn-demo.gif)

## Features

* Utilizes LaunchDarkly for feature flag management
* Implements module federation with Re.Pack
* Returns flag variations based on evaluated context.

## Prerequisites
* LaunchDarkly account
* React v18.2.0
* React Native v0.71.12
* LaunchDarkly React Native SDK v7.1.6
* Re.pack v3.4.0
* [IOS Simulator](https://developer.apple.com/documentation/xcode/installing-additional-simulator-runtimes)

## Setup
1. Clone the repository:
```
git clone https://github.com/tanben/sample-reactnative-mfe
cd sample-reactnative-mfe
```
2. Install dependencies:

```
npm run install
```
3. Create two LaunchDarkly projects with the following feature flags:

* color (STRING): Assign a color for the on and off states (e.g., red for ON and grey for OFF).
* enable-dark-mode (BOOLEAN, optional): Enable or disable dark mode.


4. Update the host/Config.js and app1/Config.js files with your LaunchDarkly project's mobileKey. Other properties are optional.

```
const ldProjects = {
  MFE1: {
    key: '',
    url: '',
    mobileKey: 'your mobile key',
  },
  MFE2: {
    key: '',
    url: '',
    mobileKey: 'your mobile key',
  },
};
```
5. In host/Config.js, set the mobileKey from app1 in the secondaryMobileKeys object:
```
const ldConfig = {
  mobileKey: ldProjects.MFE2.mobileKey,
  secondaryMobileKeys: {
    'app1': '<mobile key from app1 container>'
  },
  ...
}
```


## Running the app
1. Run host and remote app.
```
npm run start:app1
npm run start:host
```
2. Run Host IOS app
```
npm run ios:host
```
3. Run App1 IOS app
```
npm run ios:app1
```
