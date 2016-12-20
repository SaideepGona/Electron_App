// This is the Javascript for Electron_App section 3 (#MCB3)

  // <div> #toggle_bar
    // On hover turns white. On click displays #check_box if not displayed and removes it if displayed
    $("#toggle_bar").hover(function(){
      $("#toggle_bar").css("background-color", "white");
      console.log("yes")
    },
    function(){
      $("#toggle_bar").css("background-color", "rgb(54, 54, 54)");
    });

    toggle_bar_status = "hidden"
    console.log(toggle_bar_status)

    $("#toggle_bar").click(function(){
      if (toggle_bar_status == "hidden") {
          $("#check_box").fadeIn(100);
          toggle_bar_status = "visible"
          console.log("hi")
      }
      else if (toggle_bar_status == "visible") {
          $("#check_box").fadeOut(100);
          toggle_bar_status = "hidden"
      }
    });

  // <div> #check_box
    // On ready and by default hides div. On hover over #toggle_bar, shows div. Div has 2 pressable buttons.
    $(document).ready(function(){
      $("#check_box").hide();
    });

  // <div> #check
    // On ready and by default hides div. On hover over #toggle_bar, shows div. Div has 2 pressable buttons.
