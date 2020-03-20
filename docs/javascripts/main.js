console.log('This would be the main JS file.');

function printMarkdown(name) {
    document.getElementById('content').innerHTML = "";
    $.ajax(name + '.md').done(function (data) {
        document.getElementById('content').innerHTML =
        marked(data);
    })
}

function printPreviewVideo() {
    document.getElementById('content').innerHTML = '<video src="images/preview.mp4" width="100%" controls="controls" autoplay="true"></video>';
}

$(document).ready(function() {
    $('#btn-changelog').click(function() {
        printMarkdown('changelog');
    })

    $('#btn-spec').click(function() {
        printMarkdown('spec');
    })

    $('#btn-preview').click(function() {
        printPreviewVideo();
    })

    printPreviewVideo();
    
    // document.getElementById('content').innerHTML =
    // marked(data);
    // printMarkdown('spec');
})