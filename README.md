# wanderlust-server

<br>


## Description

Warderlust is an app to organize your trip, you can select recommended places, to eat, museums, and much more! and add it to your travel itinerary.



<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **index-logo** - As a user I want to be able to access to log in. 
- **sign up** - As a user I want to sign up on the web page.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account.
- **homepage** - As a user I want to see all the list of uncoming trips and those that I have already done.
- **result** - As a user I want to see the list of trips and filter by my preferences.
- **tripDetails** - As a user I want to see more details of my trips.
- **pendingTrips** - As a user I want to see the list of my pending trips, create a new trip, edit or delete them.
- **createTrip** - As a user I want to create a new trip.
- **editTrip** - As a user I want to edit or delete the trip.
- **Profile** - As a user I want to be able to see my profile.
- **edit user** - As a user I want to be able to edit my profile.
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account.

<br>


## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`     | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | { name, email, password }                                    |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             |                                                          |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { name, email, password, address, profileImage, languagesISpeak, languagesISpeak } |
| `GET`      | `/private/meetings`                | Private route. Render the `meetings` view.                   |                                                          |
| `GET`      | `/private/meetings/:meetingId`     | Private route. Render the `meeting` view.                    |                                                          |
| `GET`      | `/private/myPendingMeetings`       | Private route. Render the `myPendingMeetings` view.          |                                                          |
| `POST`     | `/private/myOrganizedMeetings/`    | Private route. Adds a new meeting for the current user.      | { meetingName, meetingImg, meetingDescription, meetingLanguage, meetingDate, meetingPoint, meetingOrganizer, meetingParticipants}                                 |
| `DELETE`   | `/private/myPendingMeetings/:meetingId`| Private route. Deletes the existing meeting from the current user. |                                                |
| `PUT`      | `/private/edit-myPendingMeetings/:meetingId`   | Private route. Sends edit-meeting info to server and updates user in DB. | { meetingName, meetingImg, meetingDescription, meetingLanguage, meetingDate, meetingPoint, meetingOrganizer, meetingParticipants } |


<br>

## Models

User model

```javascript
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    city: { type: String },
    bio: { type: String },
    profileImage: { type: String },
    pendingTrips: [{ type: mongoose.Schema.Types.ObjectId, ref: "Travels" }],
    completedTrips: [{ type: mongoose.Schema.Types.ObjectId, ref: "Travels" }]

```
Travel model

```javascript
    travelCity: { type: String, required: true },
    travelDate: { type: String, required: true },
    idActivities: [{ type: String, required: true }],
    travelOrganizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" } 

    

<br>



## Backlog
- Geolocation - Google Maps API
- Create a trip with another user.
- Inbox Messages - Send/receive messages between users.
- Authentication with Gmail/ Facebook accounts.


<br>

## Links

[See the Trello board.]( https://trello.com/b/aNiG6dZ7/wanderlust )

<br>

### Git

The url to your repository and to your deployed project

<br>

### Slides

The url to your presentation slides
