var user = {
  name: ["Jonathan Junca"],
  location: ["Detroit"],
  occupations: ["Business Analyst", "CEO"],
  hobbies: [
    {
      name: "chess",
      type: "current"
    },
    {
      name: "football",
      type: "current"
    }
  ]
};

var skillz = [
  {
    id: 1,
    name: "Javascript",
    experience: "Intermediate"
  },
  {
    id: 2,
    name: "Football",
    experience: "expert"
  }
];

var secrets = ["I'm the man"];


module.exports = {

  getName: function(req, res, next) {
    res.json(user.name);
  },
  getLocation: function(req, res, next) {
    res.json(user.location);
  },
  getOccupations: function(req, res, next) {
    if (req.query.order === "desc") {
      res.json(user.occupations.sort());
    }
    else if (req.query.order === "asc") {
      res.json(user.occupations.reverse());
    }
    else {
      res.json(user.occupations);
    }
  },
  getLatestOccupation: function(req, res, next) {
    res.json(user.occupations[user.occupations.length - 1]);
  },
  getHobbies: function(req, res, next) {
    res.json(user.hobbies);
  },
  getHobbiesByType: function(req, res, next) {
    var userType = req.params.type;
    var hobbies = [];
    for (var i = 0; i < user.hobbies.length; i++) {
      if (user.hobbies[i].type === userType) {
        hobbies.push(user.hobbies[i]);
      }
    }
    res.json(hobbies);
  },
  getSkillz: function(req, res, next) {
    res.json(skillz);
  },
  getSecrets: function(req, res, next) {
    res.json(secrets);
  },
  postName: function(req, res, next) {
    user.name.push(req.body);
    res.json(user.name);
  },
  postLocation: function(req, res, next) {
    user.location.push(req.body);
    res.json(user.location);
  },
  postOccupations: function(req, res, next) {
    user.occupations.push(req.body);
    res.json(user.occupations);
  },
  postHobbies: function(req, res, next) {
    user.hobbies.push(req.body);
    res.json(user.hobbies);
  },
  postSkillz: function(req, res, next) {
    skillz.push(req.body);
    res.json(skillz);
  }

};
