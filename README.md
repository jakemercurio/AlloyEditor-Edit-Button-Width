# AlloyEditor-Edit-Button-Width
This library is an extension for AlloyEditor to allow editing image widths in a responsive way.

![alt tag](https://raw.githubusercontent.com/jakemercurio/AlloyEditor-Edit-Button-Width/master/screenshot.jpg)

## Setup

1. Import `ButtonImageWidth` into your AlloyEditor project
```js
import ButtonImageWidth from '../custom-alloy-buttons/ButtonImageWidth';
```
or
```js
var ButtonImageWidth = require('../custom-alloy-buttons/ButtonImageWidth');
```

2. Add `imageWidth` to your AlloyEditor Config
```js
AlloyEditor.editable('editorId', {
    toolbars: {
      styles: {
        selections: [{
          name: 'image',
          buttons: ['imageWidth'],
        }],
        tabIndex: 1
      }
    }
});
```

And you're done!
