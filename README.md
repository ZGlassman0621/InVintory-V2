# INVINTORY README

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**InVintory** is an adaptable inventory system specifically meant to keep track of wines in restaurant settings. Most often, restaurants will use the inventory system built into their POS for everything, but rarely are these built to handle wines. To address this hole in the system, I’ve created InVintory to make it easier for beverage directors to keep track of their inventory, keep track of their vendors, calculate the proper price of the wines by the glass and by the bottle, and more.

<br>

## MVP

_The **InVintory** MVP allows_

- the creation, removal, modification, and viewing of wines in inventory;
- organizes these inventory items within specific categories;
- uses id system to sort bottles and ensure easy access for finding the bottles;
- viewing provides an image of the bottle for clarification;
  \_

<br>

### Goals

- _Produce an easy-to-use inventory tracking system._
- _Allow search to be performed using a number of categories._
- _Produce a bottle creation system that will allow deletion and modification._

<br>

### Libraries and Dependencies

|    Library    | Description                                  |
| :-----------: | :------------------------------------------- |
|     React     | _Front End_                                  |
| React Router  | _Front End_                                  |
|     Axios     | _API._                                       |
|      API      | _TBD, will pull wine bottle/label pictures._ |
| Ruby on Rails | _Back End_                                   |

<br>

### Client (Front End)

#### Wireframes

https://whimsical.com/9TEYWWYPZLBFvTHTfBw7qQ

#### Component Tree

https://whimsical.com/JT4NbLToexVcfHrUFkmw9a

#### Component Hierarchy

```structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ App.jsx
      |__ Footer.jsx
      |__ Login.jsx
      |__ CreateEntry.jsx
      |__ DeleteEntry.jsx
      |__ UpdateEntry.jsx
      |__ CreateNewUser.jsx
      |__ ViewEntry.jsx
      |__ Inventory.jsx
|__ services/
      |__ auth.js
      |__ apiHelper.js
      |__ apiConfig.js

```

#### Component Breakdown

|   Component   |    Type    | state | props | Description                                                      |
| :-----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|      App      |   class    |   y   |   n   | _State exists here._                                             |
|    Header     | functional |   n   |   n   | _Header houses the logo._                                        |
|  CreateEntry  | functional |   n   |   n   | _Allows creation of entries to inventory._                       |
|  DeleteEntry  | functional |   n   |   n   | _Allows deletion of entries to inventory._                       |
|  UpdateEntry  | functional |   n   |   n   | _Allows update of entries to inventory._                         |
|   ViewEntry   |   class    |   n   |   y   | _Allows user to view specific inventory entry._                  |
|     Login     | functional |   n   |   y   | _Allows admin login to system._                                  |  |
| CreateNewUser | functional |   n   |   y   | _Allows creation of new admin users._                            |
|   Inventory   |   class    |   n   |   y   | _Allows user to view entire inventory._                          |
|    Footer     | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

| Task                                                  | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Users/Auth                                     |    M     |     3 hrs      |      TBD      |     TBD     |
| Create ID system linking # to Vendor                  |    M     |     4 hrs      |      TBD      |     TBD     |
| Create Inventory                                      |    H     |     10 hrs     |      TBD      |     TBD     |
| Create Vendor Rep List                                |    M     |     8 hrs      |      TBD      |     TBD     |
| Create API to pull wine bottle picture for each entry |    M     |     7 hrs      |      TBD      |     TBD     |
| Create CRUD Actions                                   |    H     |     5 hrs      |      TBD      |     TBD     |
| TOTAL                                                 |          |    37+ hrs     |      TBD      |     TBD     |

<br>

### Server (Back End)

#### ERD Model

https://app.lucidchart.com/invitations/accept/d7779d06-d5cf-46fa-bdab-cdeeb681d31e

<br>

---

## Post-MVP

\_A few of the ideas I’ve had for moving forward stem from the existing functionality:

- Creation has a price calculator to calculate the price of a wine per bottle and per glass using price of purchase and percentage increase as a basis. This calculation is shown here:
  <br>
  By the Glass
  (Price of Purchase divided by 4) multiplied by X%
  <br>
  By the Bottle
  Price of Purchase multiplied by X%
- Categories to sort wines by are included in the program, but users should be able to create custom categories as well.
- Users should be able to create a digital representation of their wine room (or have it done for them by submitting pictures or video walkthroughs of their cellars). These digital representations will, in turn, allow Sommeliers to show off their wine vaults to whales, while also allowing anyone entering the cellar to easily find the wine they’re going there for.
- A very advanced feature would be linking the POS to this system. Whenever a wine is ordered by the bottle in the POS, it will signal a terminal outside the wine room which will pull up the requested wine (or wines, depending on order frequency). The person retrieving the wine will have only to look at the screen here for the id and the location of the wine within the cellar to make sure they have the correct bottle. An image of the bottle will also be displayed on the terminal to prevent (or limit) mistakes.
- Users should be able to re-order wines that enter the 86 list with the push of a button. The button signals a function to send a pre-written email to the vendor rep on file for the wine, alerting them that the restaurant has run out and they would like to re-order the wine in the same quantity as before. This function will need to be admin password protected though, and may include a modifier allowing the admin to specify the number of cases ordered this time around. Additionally, wines on the 86 list which are not to be re-ordered are not only removed from the list, but recorded in a log for review. The basics of this feature are implemented, but remain static.
- Users should be able to send a video walkthrough of their current cellars and be able to request a personal cellar redesign from InVintory.
- Users should be able to see where wine overstock inventory is kept in the building if not in the cellars themselves.\_
- Can I put a timer on the inventory page so it goes back to the login screen after X seconds

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

<!-- Wow, what a week and a half. In the end, I was tripped up by the proper use of my tables, despite going over them more than once with help. My front end got partially set up, but in the end, I just didn't have the time to finish. -->