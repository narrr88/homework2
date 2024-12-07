const UserActionTracker = require("./userActionTracker.js");

const tracker = new UserActionTracker();

tracker.on("actionLogged", (action) => {
    console.log(`Action Logged: ${action}`)
})

tracker.on("maxActions", (actionCount) => {
    console.log(`Maximum Actions ${actionCount} reached`)
})

tracker.logAction('sign up');
tracker.logAction('login');
tracker.logAction('viewProfile');
tracker.logAction('logout');
tracker.logAction('login');
tracker.logAction('logout');

console.log(`Total Actions: ${tracker.getActionCount()}`)