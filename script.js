$(document).ready(function() {
    // Define the SharePoint REST API endpoint for the current user
    var siteUrl = _spPageContextInfo.webAbsoluteUrl;
    var endpoint = siteUrl + "/_api/web/currentuser";

    // Make an AJAX request to the SharePoint REST API
    $.ajax({
        url: endpoint,
        type: "GET",
        headers: {
            "Accept": "application/json;odata=verbose"
        },
        success: function(data) {
            // Handle success - display user info
            var userName = data.d.Title; // Gets the display name of the user
            $("#user-info").text('Logged in user: ' + userName);
        },
        error: function(error) {
            // Handle error
            console.error('Error fetching user data:', error);
            $("#user-info").text('Error fetching user data');
        }
    });
});