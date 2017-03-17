
// Generate the custom html to populate #MCB5

console.log("(5) populate 5")

function populate_5(data, current_proj) {
    console.log("populating 5")
    html_block = '';

    for (i = 0; i < data[current_proj].length; i++) {

        current_study_obj = data[current_proj][i];
        study_html = '<div class="stored_study_blocks">'+
        '<div class="stored_study_blocks_overlay"></div>'+
        '<div class="stored_study_blocks_link"></div>'+
        '<div class="stored_study_blocks_title">'+current_study_obj.title+'</div>'+
        '<div class="stored_study_blocks_abstract">'+current_study_obj.abstract+'</div>'+
        "</div>";
        html_block += study_html;
        
    }
    
    console.log(study_data[1][2].title = study_data[1][2].title + "5")

    $("#MCB5 #main-contents5").html(html_block);

}

// refresh button behavior
    // On hover
    $("#MCB5 #refresh-button-5").hover(function(){  
        $("#MCB5 #refresh-button-5").css("background-color", "rgb(73, 98, 187)");
    },
    function(){
        $("#MCB5 #refresh-button-5").css("background-color", "rgb(6, 6, 42)");
        console.log("unhover")                                                    // End of block
    });
    // On click
    $("#MCB5 #refresh-button-5").click(function(){                                          // On click of toggle_bar, makes the check box visible. On re-click removes it.
      populate_5(study_data,current_proj_num)
    });  

// On ready initializations

$(document).ready(populate_5(study_data, current_proj_num))