module.exports = (router) => {
  router
    .setRoute('httpGet', 'myController.httpGet').method('GET');
    router.setRoute('users/signup', 'myController.signup').method('POST');
  router.setGroup(function(){
        router.setRoute('signup', 'myController.signup').method('POST');
        router.setRoute('login', 'myController.login').method('POST');
        router.setRoute(':id/profile', 'myController.editUser').method('PATCH')
        router.setRoute(':id/profile', 'myController.viewUser').method('GET')
      }).prefix("users/");


  
};



