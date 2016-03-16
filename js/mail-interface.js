var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

var CLIENT_ID = '<2982512272-hu4dbbadmvekgu3ceonrbfm24akimvt4.apps.googleusercontent.com>';


     /**
      * Check if current user has authorized this application.
      */
     function checkAuth() {
       gapi.auth.authorize(
         {
           'client_id': CLIENT_ID,
           'scope': SCOPES.join(' '),
           'immediate': true
         }, handleAuthResult);
     }

     function handleAuthResult(authResult) {
          var authorizeDiv = document.getElementById('authorize-div');
          if (authResult && !authResult.error) {
            // Hide auth UI, then load client library.
            authorizeDiv.style.display = 'none';
            loadGmailApi();
          } else {
            // Show auth UI, allowing the user to initiate authorization by
            // clicking authorize button.
            authorizeDiv.style.display = 'inline';
          }
        }

     function loadGmailApi() {
       gapi.client.load('gmail', 'v1', listLabels);
     }

     function listLabels() {
     var request = gapi.client.gmail.users.labels.list({
       'userId': 'alex.m.larson'
     });

     request.execute(function(resp) {
          var labels = resp.labels;
          appendPre('Labels:');

          if (labels && labels.length > 0) {
            for (i = 0; i < labels.length; i++) {
              var label = labels[i];
              appendPre(label.name);
            }
          } else {
            appendPre('No Labels found.');
          }
        });
      }

      function appendPre(message) {
        var pre = document.getElementById('output');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }
