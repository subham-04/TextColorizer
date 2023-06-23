# TextColorizer


[![npm version](https://img.shields.io/npm/v/textcolorizer.svg)](https://www.npmjs.com/package/textcolorizer)
[![License](https://img.shields.io/npm/l/textcolorizer.svg)](https://github.com/subham-04/textcolorizer/blob/main/LICENSE)

A simple package for adding colored text to the console log. `Currently working only on React Projects.`

## Installation

Install the package using npm:

```shell
npm install textcolorizer
```


## Usage

Import the `Log` class from the `textcolorizer` package and use its methods to add colored text to the console log.

```javascript
import { Log } from 'textcolorizer'


function App() {

  useEffect(()=>{

// Success message in green color
Log.success('Operation successful.');

// Error message in red color
Log.danger('An error occurred.');

// Information message with black text on yellow background
Log.info('Please note the following information.');

// Customised color message 1st parameter is the mesg 2nd parameter is the font color and 3rd is the background color
Log.customColor("Custom message","blue","grey");

// Make the font weight bold
Log.bold("The font is now bold");

// Italic font 
Log.italic("The font is now Italic");

  },[])

  return (
    <div className="App">

      <h1>Welcome to  TextColorizer</h1>
      
    </div>
  );
}
```

<!-- ##Example Output

Here's an example output of the usage:

<span style="color: Green;">Operation successful.</span>

<span style="color: red;">An error occurred.</span>

<span style="color: yellow;">Please note the following information.</span> -->

## The Log class provides the following methods:

- `success(msg: string)`: Displays the msg parameter in green color.
- `danger(msg: string)`: Displays the msg parameter in red color.
- `info(msg: string)`: Displays the msg parameter with black text on a yellow background.

Feel free to customize the colors and styles in the Log class according to your preferences.

## Contributing

Contributions are welcome! If you encounter any issues or would like to suggest improvements, please submit a pull request or create an issue on the [GitHub repository](https://github.com/subham-04/TextColorizer).


