// This is the Javascript for Electron_App section 1 (#MCB1)

  const fs = require("fs")

  // <h1> Account Name
    // On-Ready sets the  value of the #accountname element equal to the current account name

  // <div> Version No.
    // On-Ready sets the value of #version_num element equal to the current version number

    fs.readFile("package.json", (err, data) => {
      if (err) throw err;

      packagejson = JSON.parse(data)                    // Takes package.json and converts to an object. Pulls the "version" from object
      console.log(packagejson);
      version_current = packagejson["version"]
      version_string = "v" + version_current            // End of block ----------------------------------------------------------------

      $( document ).ready(function() {                  // On ready renders the version number in the corresponding section 1 box-sizing
        $("#version_num").text(version_string);         // End of block ----------------------------------------------------------------

      });
    });

  // <div> Time
    // Updates the #time element based on current time. Runs it at ready and periodically every xxx milliseconds

    $(document).ready(updateClock);

      function updateClock() {

        var date = new Date();                          // Takes the current Date-time info and converts it time format ie.: 9:02 PM.
        var hours = date.getHours();
        var ampm = 'AM'
          if (hours >= 12) {
            ampm = 'PM'
          }
          if ((hours % 12) == 0){
            hours = 12
          } else {
            hours = hours % 12
          }
        var minutes = date.getMinutes()
          if (minutes < 10) {
            minutes = '0' + String(minutes)
          } else {
            minutes = String(minutes)
          }
        var formatted_time = String(hours) + ':' + minutes + ' ' + ampm
        console.log(formatted_time);                     // End of Block --------------------------------------------------------------

        $("#time").text(formatted_time);

      };
      setInterval(updateClock, 10000);                   // Updates clock every xxxx milliseconds
