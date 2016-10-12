var UserFactory = function () {
  const user = {};

  return {
    getUser: function () {
      return user;
    },
    isSignedIn : function () {
      return user.isSignedIn;
    }
  };
};

module.exports = UserFactory;
