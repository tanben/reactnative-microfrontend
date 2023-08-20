# React Native Micro frontend
This is a sample LaunchDarkly React native SDK micro frontend application using Re.Pack for module federation.

![](./rn-demo.gif)
## Requirements
* LaunchDarkly account
* React v18.2.0
* React Native v0.71.12
* LaunchDarkly React Native SDK v7.1.6
* Re.pack v3.4.0


## Installation
>`Note:` For this application create two(2) LaunchDarkly projects with these feature flags:
>- **`color`** STRING type assign a color for the on and off states for example: `red` for **ON** and `grey` for **OFF**.
>- **`enable-dark-mode`** (optional), BOOLEAN type true or false.

1. Update the Host and App1 host/Config.js and app1/Config.js file with your project `mobileKey` (required) other properties are optional.

```
const ldProjects = {
  MFE1: {
    key: '',
    url: '',
    mobileKey: mobileKey: 'your mobile key',
  },

  MFE2: {
    key: '',
    url: '',
    mobileKey: 'your mobile key',
  },
};
```

For the host/Config.js, set the mobileKey from app1 in the `secondaryMobileKeys`
```
const ldConfig = {
  mobileKey: ldProjects.MFE2.mobileKey,
  secondaryMobileKeys: {
    'app1':'<mobile key from app1 container>'
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