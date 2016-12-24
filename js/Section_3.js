// This is the Javascript for Electron_App section 3 (#MCB3)

  // <div> #toggle_bar
    // On hover turns white. On click displays #check_box if not displayed and removes it if displayed
    $("#toggle_bar").hover(function(){                                          // On hover causes toggle bar to light up
      $("#toggle_bar").css("background-color", "white");
      console.log("yes")
    },
    function(){
      $("#toggle_bar").css("background-color", "rgb(54, 54, 54)");
    });                                                                         // End of block

    check_box_status = "hidden"
    console.log(check_box_status)

    $("#toggle_bar").click(function(){                                          // On click of toggle_bar, makes the check box visible. On re-click removes it.
      if (check_box_status == "hidden") {
          $("#check_box").fadeIn(100);
          check_box_status = "visible"
          console.log("hi")
      }
      else if (check_box_status == "visible") {
          $("#check_box").fadeOut(100);
          check_box_status = "hidden"
      }
    });                                                                         // End of block

  // <div> #check_box
    // On ready and by default hides div. On hover over #toggle_bar, shows div. Div has 2 pressable buttons.
    $(document).ready(function(){                                               // On ready, makes the check_box hidden
      $("#check_box").hide();
    });                                                                         // End of block

  // <div> #check
    // On ready and by default hides div. On hover over #toggle_bar, shows div. Div has 2 pressable buttons.
