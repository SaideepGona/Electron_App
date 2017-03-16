// This is the Javascript for Electron_App section 2 (#MCB2)

  // Whole tag button. Changes color on hover

  // <h1> Current Feed
    // On-Ready or when feed is changed, displays name of the current feed

  // <div> #feed_hover_message
    // On ready and by default hides message text. On hover over #MCB2, shows message text.
    
  $(document).ready(function(){                                               // Defines the section 2 (feed bar) behavior. Lights up and shows message on hover.
    $("#feed_hover_message").hide();                                          // Later on click will open up feed options
  })

  $("#MCB2").hover(function(){
    $("#MCB2").css("background-color", "rgb(73, 98, 187)");
    $("#feed_hover_message").fadeIn(100);
  },
  function(){
    $("#MCB2").css("background-color", "rgb(6, 6, 42)");
    $("#feed_hover_message").fadeOut(200);
    console.log("unhover")                                                    // End of block
  });
