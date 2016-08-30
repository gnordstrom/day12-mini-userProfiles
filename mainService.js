angular.module('userProfiles').service('mainService', function() {
  var data = [
      {
          "id": 0,
          "first_name": "George",
          "last_name": "Bluth",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
      },
      {
          "id": 1,
          "first_name": "Lucille",
          "last_name": "Bluth",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
      },
      {
          "id": 2,
          "first_name": "Oscar",
          "last_name": "Bluth",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
      }
    ];

  this.getUsers = function() {
    return data;
  };

  this.toggleFavorite = function(index){
    data[index].isFavorite = !data[index].isFavorite;
  };
});


// ## Step 3 - Our Service
// Our Service will do most of the apps heavy lifting. We want to keep our controllers as slim as possible.
// To do that we will need to create a function that delivers our data to our controller.
// - Write a function called "getUsers" that will return all of our user data to the controller
  // - Remember: functions made in a service can be tied to the service via the "this" keyword
