const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // check if they had the shift key down
  // and check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween; // true
        console.log('Starting to check them in between');
      }

      if (inBetween) {
        checkbox.checked = true;
      }

    });
  }


  if (e.shiftKey && !this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween; // true
        console.log('Starting to check them in between');
      }

      if (inBetween) {
        checkbox.checked = false;
      }

    });
  }

  //console.log(e.shiftKey);
  //console.log(this.checked);


  lastChecked = this;
  //console.log(lastChecked);

}

checkboxes.forEach(checkboxes => checkboxes.addEventListener('click', handleCheck));