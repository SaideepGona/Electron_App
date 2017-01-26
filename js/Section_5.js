// The study_data list contains a list of stored metadata. This data is used to populate the contents of Section_5

study_data = [ 
    {
        "title": "Study number one",
        "abstract": "abstract for the first study",
        "timestamp": "timestamp1",
        "ncbi-url": "afadsfdf.com"
    },
    {
        "title": "Study number two",
        "abstract": "abstract for the second study",
        "timestamp": "timestamp2",
        "ncbi-url": "afadsfdf.com"
    },
    {
        "title": "Study number three",
        "abstract": "abstract for the second study",
        "timestamp": "timestamp2",
        "ncbi-url": "afadsfdf.com"
    }
]

// Generate the custom html to populate #MCB5

console.log("(5) populate 5")

function populate_5(data) {

    html_block = '';

    for (i = 0; i < data.length; i++) {

        current_study_obj = data[i];
        study_html = '<div class="stored_study_blocks">'+
        '<div class="stored_study_blocks_overlay"></div>'+
        '<div class="stored_study_blocks_link"></div>'+
        '<div class="stored_study_blocks_title">'+current_study_obj.title+'</div>'+
        '<div class="stored_study_blocks_abstract">'+current_study_obj.abstract+'</div>'+
        "</div>";
        html_block += study_html;
        
    }
    
    $("#MCB5").append(html_block);

}

$(document).ready(populate_5(study_data))
