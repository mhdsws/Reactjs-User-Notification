# Reactjs-User-Notification
Simple "Message Notification Counter" application using Reactjs + PHP7.1.2.

The amount of unread messages is presented by a message icon combined with a badge, As soon as the user clicks on the message counter icon the counter is reset to 0 and the color is reset.
If one or more new messages arrive, the counter is refreshed/updated (fade in) to the current message amount, In case the user has opened the web portal in more than one browsertabs, all of them are kept up-to-date.

The react application uses timer to request messages from server every 3 seconds, and saves the counter value in browser localStorage, the REST API, and the timer interval can be configured in notifyfrontend/src/App.js file.

# 1. Backend Project (using PHP7.1.2 running on XAMPP)

- To install XAMPP please follow this link https://www.apachefriends.org/download.html

- copy the "notifybackend" folder to e.g: C:/xampp/htdocs/

- Be sure that Apache server is running.

# 2. Frontend Project (using React v15.6.1)

- Install node.js and Visual Studio code (optional) from these links:
    https://nodejs.org/en/download/
    https://code.visualstudio.com/download
    
- In the "notifyfrontend" folder (which contains package.json file) hold "shift" key and right click, then choose "Open command window here".

- run:
     - npm install
     - npm install -g create-react-app
     - npm install --save react-bootstrap bootstrap@3
     - npm install --save react-notification-badge
     - npm start
     
 The last command will open the browser and start the application, have fun :).
 
 
  
