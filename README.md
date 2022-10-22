# :scissors: dedentjs

A simple module for striping the indentation of your text.

## Table of contents
- [dedentjs](#scissors-dedentjs)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

Install `dedentjs` using npm.

```shell
npm install dedentjs
```

Or install using yarn.

```shell
yarn add dedentjs
```

## Usage

```JavaScript
import dedent from 'dedentjs';

const bigText = dedent`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Praesent dictum, mi et facilisis pharetra,
    libero est lacinia risus,
    sit amet tempus dolor ante eget tortor.
`;

const bigList = dedent`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Praesent dictum, mi et facilisis pharetra,
        - 1
        - 2
            - 3
                - 4
    libero est lacinia risus,
        sit amet tempus dolor ante eget tortor.
`;

// You can also specify a join character
const spaceSeparated = dedent(' ', `
    foo
    bar
`);

console.log(bigText + '\n\n' + bigList + '\n\n' + spaceSeparated);
```

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Praesent dictum, mi et facilisis pharetra,
libero est lacinia risus,
sit amet tempus dolor ante eget tortor.

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Praesent dictum, mi et facilisis pharetra,
    - 1
    - 2
        - 3
            - 4
libero est lacinia risus,
    sit amet tempus dolor ante eget tortor.

foo bar
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
MIT
