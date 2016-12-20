// This is the Javascript for Electron_App section 2 (#MCB2)

  // Whole tag button. Changes color on hover

  // <h1> Current Feed
    // On-Ready or when feed is changed, displays name of the current feed

  // <div> #feed_hover_message
    // On ready and by default hides message text. On hover over #MCB2, shows message text.
    $(document).ready(function(){
      $("#feed_hover_message").hide();
    })

    $("#MCB2").hover(function(){
      $("#MCB2").css("background-color", "white");
      $("#feed_hover_message").fadeIn(100);
    },
    function(){
      $("#MCB2").css("background-color", "rgb(189, 189, 189)");
      $("#feed_hover_message").fadeOut(200);
      console.log("unhover")
    });
