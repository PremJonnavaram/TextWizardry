/*
You might have noticed after dismissing the alert through the close button you aren’t able to see the alert again with reloading the page.

To fix this issue we would use the ‘setTimeout function’ of javascript
*/
import React from 'react';

export default function Alert(props) {
  // Capitalize first letter of the word
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{height: '50px'}}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
    </div>
  );
}