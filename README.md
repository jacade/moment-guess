<h1 align="center">Welcome to moment-guess 👋<br> <img src="./logo.png" /></h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.2.4-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/jacade/moment-guess#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/jacade/moment-guess/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/jacade/moment-guess/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/jacade/moment-guess" />
  </a>
</p>

> :tada: A utility package for guessing date's format :alarm_clock: :raised_hands:

<img alt="Demo" src="./demo.gif" />

## 👨‍💻 Usage

### 💻 CLI

```sh
# output default format
npx moment-guess --date "Fri, January 30th 2020, 10:00 AM"

# output strftime format
npx moment-guess --date "31st Dec, 2020" --format strftime
```

For details, try `npx moment-guess --help`

#### 📝 Note: The above commands DO NOT INSTALL the package system-wide, _npx_ is just a [package runner](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner).

### 📦 Package

```sh
npm install @jacade/moment-guess
```

```javascript
const guessFormat = require("@jacade/moment-guess");

// default format
console.log(guessFormat("31/12/2020")); // DD/MM/YYYY

// default format
console.log(guessFormat("01/01/2020 10:00 AM PST", "default")); // [ 'DD/MM/YYYY hh:mm A z', 'MM/DD/YYYY hh:mm A z' ]

// strftime format
console.log(guessFormat("Fri, January 30th 2020, 10:00 AM", "strftime")); // %a, %B %o %Y, %I:%M %p

// Errors!
try {
  console.log(guessFormat("Invalid date!"));
} catch (err) {
  console.log(err.message); // Couldn't parse date
}

try {
  console.log(guessFormat("Mo, 23rd Nov, 2020", "strftime"));
} catch (err) {
  console.log(err.message); // Couldn't find strftime modifier for "Mo"
}
```

## 🙌 Supported Date Formats

- _2020-07-24T17:09:03+00:00_([IS0 8601](https://en.wikipedia.org/wiki/ISO_8601))

- _Mon, 06 Mar 2017 21:22:23 +0000_([RFC 2822](https://tools.ietf.org/html/rfc2822#section-3.3))

- _31/12/2020, 1.1.2020, 31-12-20_(slash, dot or dash delimited dates, both US and UK styles)

- _31-Dec-2020, 1-Jan-20_(dash delimited with month name)

- _Fri, January 30th 2020, 10:00 AM_(dow, dd Mon yyyy[, hh:mm:ss am|pm|AM|PM] with both short and long names)

## 🤷‍♀️ What happens in case of ambiguous input?

If the input is ambiguous like 01/01/2020(could mean DD/MM/YYYY or MM/DD/YYYY), **it would display all possible matched formats**. Try `npx -q moment-guess -d "01/01/2020"`

## :thinking: Motivation

**PM**: _Hey, could you please display date on the rightmost part of the row in a format similar to Fri, 6th March 2020, 10:00 AM?_

**Me**: _Sure. (types on screen ... moment(timestampFromDB).format(// Uh Oh!, what should I put here?))_

**Methinks**: _Hmm...such requirements pop up once in a while, not everyday(at least for me). And everytime it happens, I end up sifting through momentjs docs [here](https://momentjs.com/docs/#/displaying/) to choose the right format tokens in order to display date in the desired format("ddd, Do MMMM YYYY, hh:mm A" in this case). Can this be avoided? Is it possible to guess a date's format from the desired date value itself?_

## :hammer: Run tests

```sh
npm run test
```

## :mag: How does it work?

<img src="./design.png"/>

Entire module is split up into three main components, _parsers_, _refiners_ and _assigners_.

- _Parsers_ break the input into individual tokens, giving meaning to each token(whether it's year, month, day...).

- _Refiners_ refine the parsed results based on certain chosen heuristics in case the input matched multiple parsers.

- _Assigners_ assign the appropriate format tokens(don't confuse these with generated tokens from input) enlisted [here](https://momentjs.com/docs/#/displaying/) to each corresponding token based on the meaning given to the token by the parser(example, _YYYY_ for a four digit year token).

## :man: Original Author

**Apoorv Mishra**

- Github: [@apoorv-mishra](https://github.com/apoorv-mishra)
- LinkedIn: [Apoorv Mishra](https://www.linkedin.com/in/apoorv-mishra-76a06249/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jacade/moment-guess/issues).

## 📝 License

Copyright © 2020 [Apoorv Mishra](https://github.com/apoorv-mishra).<br />
This project is [MIT](https://github.com/apoorv-mishra/moment-guess/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
