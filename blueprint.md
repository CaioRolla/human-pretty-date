# Human Pretty Date

**human-pretty-date** is a Javascript library that helps you collect common and not-so-common informations about your application user.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install **human-pretty-date**.

```bash
npm i human-pretty-date --save
```

## Usage

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

## i18n
To use the i18n provided by the package, you just need to past the desired locale in the config object:

```javascript
console.log(formatDate(new Date(), { locale: 'pt_BR' })); // agora
```
### H3

| Code          | Locale           
| ------------- |:-------------:
| en     | English
| pt_BR      | Portuguese (Brazil)       

{{ template:contributors }}

## Contributing
Pull requests are welcome, specially for new locales. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

This package is based on [node-prettydate](https://github.com/netcode/node-prettydate)