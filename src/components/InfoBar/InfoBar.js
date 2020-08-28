import React from 'react';
import './InfoBar.scss';

const selectText = () => {
    const elem = document.getElementById('email');
    // console.log(input);
    var range = document.createRange();

    // Select the entire contents of the element
    range.selectNodeContents(elem);

    // Don't select, just positioning caret:
    // In front 
    // range.collapse();
    // Behind:
    // range.collapse(false);

    // Get the selection object
    var selection = window.getSelection();

    // Remove any current selections
    selection.removeAllRanges();

    // Make the range you have just created the visible selection
    selection.addRange(range);

}

const ColoredLine = () => (

  <div className="infoBarLine" id="email" type="text" onClick={()=> selectText()}>
        silavsale@gmail.com 
  </div>
);

export default ColoredLine

