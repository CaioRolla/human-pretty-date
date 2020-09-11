<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#human-pretty-date)

# ➤ Human Pretty Date

**human-pretty-date** is a Javascript library that helps you collect common and not-so-common informations about your application user.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#installation)

## ➤ Installation

Use the package manager [npm](https://www.npmjs.com/) to install **human-pretty-date**.

```bash
npm i human-pretty-date --save
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#usage)

## ➤ Usage

If you are using **human-pretty-date** with Typescript, you can import the package with the import sintax

```typescript
import * as humanPrettyDate from 'human-pretty-date';
```

The usage will be like this:

```javascript
console.log(formatDate(new Date(new Date() - -2 * 365 * 24 * 60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - -365 * 24 * 60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - -2 * 30 * 24 * 60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - -30 * 24 * 60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - -2 * 24 * 60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - -24 * 60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - -2 * 60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - -60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - -2 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - -60 * 1000)));
console.log(formatDate(new Date(new Date() - -2 * 1000)));
console.log(formatDate(new Date(new Date() - -1 * 1000)));
console.log(formatDate(new Date()));
console.log(formatDate(new Date(new Date() - 1 * 1000)));
console.log(formatDate(new Date(new Date() - 2 * 1000)));
console.log(formatDate(new Date(new Date() - 60 * 1000)));
console.log(formatDate(new Date(new Date() - 2 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 2 * 60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 24 * 60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 2 * 24 * 60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 30 * 24 * 60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 2 * 30 * 24 * 60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 365 * 24 * 60 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 2 * 365 * 24 * 60 * 60 * 1000)));
```

This is the complete output:

```
2 years from now
1 year from now
2 month from now
1 months from now
2 day from now
tomorrow
2 hours from now
1 hour from now
2 minutes from now
1 minute from now
2 seconds from now
1 second from now
just now
1 second ago
2 seconds ago
1 minute ago
2 minutes ago
1 hour ago
2 hours ago
yesterday
2 day ago
1 months ago
2 month ago
1 year ago
2 years ago
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#i18n)

## ➤ i18n
To use the i18n provided by the package, you just need to past the desired locale in the config object:

```javascript
console.log(formatDate(new Date(), { locale: 'pt_BR' })); // agora
```
### Supported locales

| Code          | Locale           
| ------------- |:-------------:
| en     | English
| pt_BR      | Portuguese (Brazil)       


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

## ➤ Contributors
	
| [<img alt="Caio Rolla" src="https://avatars0.githubusercontent.com/u/25801532?s=460&u=7c8427b4390269cad8de8cb27b872c5098e41ae2&v=4" width="100">](https://twitter.com/caio_rolla) |
|:--------------------------------------------------:|
| [Caio Rolla](https://twitter.com/caio_rolla)     |
| [![Linkedin Badge](https://img.shields.io/badge/-Caio%20Rolla-0072b1?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/caio-rolla/ "Connect on LinkedIn") [![Twitter Badge](https://img.shields.io/badge/-@caio_rolla-00acee?style=flat&logo=Twitter&logoColor=white)](https://twitter.com/intent/follow?screen_name=caio_rolla "Follow on Twitter") ![Profile Views](https://komarev.com/ghpvc/?username=CaioRolla&color=blue) |
| You don't need state management if you use global variables. :bug: |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributing)

## ➤ Contributing
Pull requests are welcome, specially for new locales. For major changes, please open an issue first to discuss what you would like to change.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License
[MIT](https://choosealicense.com/licenses/mit/)

This package is based on [node-prettydate](https://github.com/netcode/node-prettydate)