module.exports = (router) => {
  // router
  //   .setRoute('httpGet', 'sample-controller.httpGet').method('GET');

  router.setGroup(function(){
        router.setRoute('signup', 'myController.signup').method('POST');
        router.setRoute('login', 'myController.login').method('POST');
        router.setRoute(':id/profile', 'myController.editUser').method('PATCH')
        router.setRoute(':id/profile', 'myController.viewUser').method('GET')
      }).prefix("users/");


  
};



