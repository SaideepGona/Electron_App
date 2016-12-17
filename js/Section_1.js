// This is the Javascript for Electron_App section 1 (#MCB1)

  // <h1> Account Name
    // On-Ready sets the  value of the #accountname element equal to the current account name

  // <div> Version No.
    // On-Ready sets the value of #version_num element equal to the current version number

  // <div> Time
    // Updates the #time element based on current time. Runs it at ready and periodically every xxx milliseconds
    $(document).ready(updateClock);

      function updateClock() {

        var date = new Date();

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
        console.log(formatted_time);

        $("#time").text(formatted_time);

      };
      setInterval(updateClock, 10000);
