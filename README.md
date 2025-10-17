# js-module2-js-back-end-Project-Movie-Magic
This is Softuni JS Project - Movie Magic

## Dev Steps Workshop 1 - Express and Templating

### Setup   
    - [X] Initialize Project
    - [X] Add Express Server
    - [X] Config Debugging
    - [X] Add Workshop resources
    - [X] Setup Handlebars
    - [X] Setup static files
    - [X] Return Home Page
    - [X] Add Layout
    - [X] Render About Page
---
### Architecture and dynamic rendering
    - [X] Add home controller 
    - [X] Add movie data layer
    - [X] Add movie service
    - [X] Render movies on home page
    - [X] Show no movies screen
---
### Create Movie
    - [X] Add Movie Controller 
    - [X] Show create movie page
    - [X] Add routes
    - [X] Add 404 Page
    - [X] Add Ability to parse user data / Read body data
    - [X] Create movie
        - [X] Add action
        - [X] Add service
        - [X] Add model method for creating movie
    - [X] Redirect after creation
    - [X] Add unique ID for each created movie
### Details Page
    - [X] Add navigation button for details page
    - [X] Add route with param for details page
    - [X] Get one movie from service
    - [X] Find movie by id from model
    - [X] Render details page with dynamic data
### Search Page
    - [X] Show static search page
    - [X] Render all movies on search page
    - [X] Modify search form
    - [X] Filter movies
    - [X] Remember search words

### Bonuses
    - [X] Dynamic page title
    - [X] File Persistance
    - [X] Rating (Temp solution)


## Dev Steps Workshop 2 - MongoDB Database

### Setup Database
    - [X] Install mongoose
    - [X] Conect to DB

### Refactor Movies to use mongoose
    - [X] Add movie model
        - [X] Create movie Schema
        - [X] Create movie Model
    - [X] Import movies to database
    - [X] Fix own property handlebars problem with lean method
    - [X] General fix for own property problem
    - [X] Refactor details
    - [X] General fix for own property problem
    - [X] Refactor details
    - [X] Refactor create
    - [X] Refactor search

### Add cast
    - [X] Add new resources
    - [X] Create cast controller
    - [X] Create cast page
    - [X] Add cast model
    - [X] Create cast service
    - [X] Create cast functionality

### Attach cast to movie
    - [X] Add attach cast button 
    - [X] Add attach cast page
    - [X] Add dynamic data to cast page
    - [X] Show cast list in attach select
    - [X] Add relation between cast and movie
    - [X] Attach cast functionality

### Show Cast Details
    - [X] Get movie casts filtered
    - [X] Show casts on details
    - [X] Get movie casts using population

### Bonuses
    - [X] Filter casts if they are already attached
    - [ ] Env variables
    - [ ] Name in movie
    - [ ] Add movie views to a folder

## Dev Steps Workshop 3 - Session and Authentication

### Setup initial setup
    - [X] Add resources

### Registration
    - [X] Add new controller
    - [X] Add registration page
    - [X] Add User model
    - [X] Add User service
    - [X] Handle registration (create user in database)
    - [X] Add password hashing

### Login
    - [X] Add login page
    - [X] Handle login page
      - [X] Validate user
      - [X] Validate password
      - [X] Create token
      - [X] Return token to client

### Logout
    - [X] Add logout action
    - [X] Clear coookie

### Authorization
    - [X] Install cookie parser
    - [X] Add auth middleware
    - [X] Add isAuth route guard
    - [X] Add isGuest route guard

### Dynamic Navigation
    - [X] Group navigation by user type(all, authenticated and guest)
    - [X] Add auth info to handlebars context


### Show creator controll buttons
    - [X] Add edit and delete buttons on details pagee
    - [X] Add creator sa relation to movies
    - [X] Add user as creator on movie create
    - [X] Show buttons only for creators

### Delete movie
    - [X] Add delete action
    - [X] Add creator validation
### Edit movie
    - [X] Add edit page
    - [X] Add dynamic movie data to edit page

### Bonuses
    - [] Automatic login at register
    - [] Invalidate JWT Token on logout
    - [] Refresh token
    - [] Edit categories