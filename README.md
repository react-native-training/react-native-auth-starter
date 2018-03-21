# React Native Auth Starter

Easy authentication for your next React Native app.

![](https://i.imgur.com/KXo3Dnn.jpg)

### 🎧 Powered by [Amplify](https://github.com/aws/aws-amplify)

## Features   

✅ Preconfigured, production tested authentication flow  

✅ 2 Factor Authentication Enabled    

✅ React Navigation   

✅ Redux   

✅ Amplify React Native     

✅ Opinionated yet configurable   

✅ Themeable   

✅ Cross-Platform   


## Roadmap    

⬜️ Social Logins / Federated Identities

⬜️ Optional intro / onboarding flow    


## Getting Started   

1. Clone project   

```
git clone https://github.com/dabit3/react-native-auth-starter.git
```

2. Change into react-native-auth-starter directory   

```
cd react-native-auth-starter
```

3. Install dependencies   

```
yarn || npm install
```

4. Configure AWS Amplify config in `index.js` by adding your own `aws-export.js` file in the `src` directory. If you do not already have this file, continue to step 5    

----

5. Install [AWSMobile CLI](https://github.com/aws/awsmobile-cli) if not already installed and configured (for steps on how to configure AWSMobile CLI, see [this](https://www.youtube.com/watch?v=MpugaNKtw3k) two minute video)    

```
npm i -g awsmobile-cli
awsmobile configure
```

6. Create a new AWS Mobile Hub Project using the AWSMobile CLI    

```
awsmobile init
```

7. Enable User Sign In    

```
awsmobile user-signin enable
awsmobile push
```
