# MFront-StartupsAndUsers Frontend Repository

Welcome to the `MFront-StartupsAndUsers` frontend repository. This repository hosts a microfrontend architecture that integrates several microfrontends deployed separately. Each of these microfrontends corresponds to a specific feature or functionality, all of which are part of the bigger `MFront-StartupsAndUsers` system.

## Microfrontends Deployment Information

Each microfrontend is deployed on RENDER on its unique URL as shown below:

- [Add Team Member](https://sddl-add-team-member.onrender.com/startup-digi-dojo-lab-add-team-member.js)
- [Change Password](https://sddl-change-password.onrender.com/startup-digi-dojo-lab-change-password.js)
- [Create Startup](https://sddl-create-startup.onrender.com/startup-digi-dojo-lab-create-startup.js)
- [List Users From Startups](https://sddl-list-users-from-startups.onrender.com/startup-digi-dojo-lab-list-users-from-startup.js)
- [Login](https://sddl-login.onrender.com/startup-digi-dojo-lab-login.js)
- [Logout](https://sddl-logout.onrender.com/startup-digi-dojo-lab-logout.js)
- [Register User](https://sddl-register-user.onrender.com/startup-digi-dojo-lab-register-user.js)
- [User](https://sddl-user.onrender.com/startup-digi-dojo-lab-user.js)

These microfrontends are designed to work together to provide a complete user experience. You can use these links to test individual microfrontends.

## Combined Frontend Root PR

The combined PR of all these microfrontends can be found deployed at this URL: [Frontend Root PR](https://startup-digi-dojo-lab-pr-3.onrender.com/)

## Backend Response Issue

In the case that the backend is not responding, you can manually trigger a redeploy using the following deploy hook: 
[Deploy Hook](https://api.render.com/deploy/srv-ch96vc3hp8u0vhacfd9g?key=kXndqBDjn04)

## Branch Information

- **vanillaReact**: This branch hosts the vanilla React version of the project. The deployed version can be found [here](https://mfront-startupsandusers.onrender.com/).

- **authenticationGoogle**: This branch contains a work-in-progress implementation of Google sign-in. Stay tuned for updates.

