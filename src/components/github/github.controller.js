function GithubController(githubService) {
  this.result = {};
  this.service = githubService;
}

GithubController.prototype.getDetails = function() {
  this.service.getItems(this.githubUsername).then(function(res) {
    this.result = res.data;
  });
};

module.exports = GithubController;
