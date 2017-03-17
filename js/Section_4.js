
// This is the Javascript for Electron_App section 4 (#MCB4)

    // The goal is to make a projects bar which displays graphically the contents of a local projects folders

function populate_4(projects) {
    console.log("populating 4")
    html_block = '<h1> (4) Projects Bar</h1>Organization of projects and saved feed settings';
    for (i = 0; i < projects.length; i++) {

        project_title = projects[i];
        project_number = i + 1;
        project_html = '<div class="project-div" id="proj-title' + project_number + '">' + project_title + '</div>';
        html_block += project_html;
        
    }

    $("#MCB4").html(html_block);

    }

// On ready initializations

$(document).ready(populate_4(projects))

