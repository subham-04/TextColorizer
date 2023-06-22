# TextColorizer


[![npm version](https://img.shields.io/npm/v/textcolorizer.svg)](https://www.npmjs.com/package/textcolorizer)
[![License](https://img.shields.io/npm/l/textcolorizer.svg)](https://github.com/subham-04/textcolorizer/blob/main/LICENSE)

A simple package for adding colored text to the console log.

## Installation

Install the package using npm:

```shell
npm install textcolorizer
```


## Usage

Import the `Log` class from the `textcolorizer` package and use its methods to add colored text to the console log.

```javascript
const { Log } = require('textcolorizer');

// Success message in green color
Log.success('Operation successful.');

// Error message in red color
Log.danger('An error occurred.');

// Information message with black text on yellow background
Log.info('Please note the following information.');
```

<!-- ##Example Output

Here's an example output of the usage:

<span style="color: Green;">Operation successful.</span>

<span style="color: red;">An error occurred.</span>

<span style="color: yellow;">Please note the following information.</span> -->

## The Log class provides the following methods:

- success(msg: string): Displays the msg parameter in green color.
- danger(msg: string): Displays the msg parameter in red color.
- info(msg: string): Displays the msg parameter with black text on a yellow background.

Feel free to customize the colors and styles in the Log class according to your preferences.

## Contributing

Contributions are welcome! If you encounter any issues or would like to suggest improvements, please submit a pull request or create an issue on the [GitHub repository](https://github.com/subham-04/TextColorizer).


