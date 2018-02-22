"use strict";

function config(a, b) {
  b.hashPrefix(""), a.when("/", {
    templateUrl: "views/home.html",
    controller: "HomeController",
    reloadOnSearch: !1
  }).when("/project/:alias", {
    templateUrl: "views/project.html",
    controller: "ProjectController"
  }).when("/about", {
    templateUrl: "views/about.html",
    controller: "AboutController"
  }).otherwise({
    redirectTo: "/"
  })
}

function run(a, b, c, d) {
  a.$on("$routeChangeSuccess", function() {
    "work" === b.hash() ? (a.routeChange = !0, c(function() {
      angular.element(document.querySelector("#nav-work")).triggerHandler("click")
    })) : c(d)
  })
}

function MainController(a, b, c) {
  a.header = {
    url: "views/header.html"
  }, a.footer = {
    url: "views/footer.html"
  }, a.socialLinks = [{
    label: "mail",
    link: "634148567@qq.com",
    "short": "634148567@qq.com"
  }, {
    label: "linkedin",
    link: "https://www.linkedin.com/in/han-xiao-b2427811b/",
    "short": "linkedin.com/xiaohan"
  }, {
    label: "instagram",
    link: "https://www.instagram.com/xiaohan5517/",
    "short": "instagram.com/xiaohan5517/"
  }, {
    label: "artstation",
    link: "https://www.artstation.com/xiaohan",
    "short": "artstation.com/xiaohan"
  }], a.menu = {
    open: !1
  }, a.contact = {
    open: !1
  }, a.year = (new Date).getFullYear(), a.scrollTo = function(a) {
    b.hash(a), c.scrollTo(a)
  }
}

function AnchorSmoothScroll(a, b) {
  function c(a, b) {
    return a.pageYOffset ? a.pageYOffset : b.documentElement && b.documentElement.scrollTop ? b.documentElement.scrollTop : b.body.scrollTop ? b.body.scrollTop : 0
  }

  function d(a, b) {
    for (var c = b.offsetTop, d = b; d.offsetParent && d.offsetParent !== a.body;) d = d.offsetParent, c += d.offsetTop;
    return c
  }
  var e = a[0],
    f = b;
  this.scrollDown = function(a, b, c, d) {
    for (var e = 0, f = Math.round(d / 25), g = a + f, h = a; b > h; h += f) setTimeout("window.scrollTo(0, " + g + ")", e * c), g += f, g > b && (g = b), e++
  }, this.scrollUp = function(a, b, c, d) {
    for (var e = 0, f = Math.round(d / 25), g = a - f, h = a; h > b; h -= f) setTimeout("window.scrollTo(0, " + g + ")", e * c), g -= f, b > g && (g = b), e++
  }, this.scrollToTop = function(a) {
    scrollTo(0, a)
  }, this.scrollTo = function(a, b) {
    var g = e.getElementById(a);
    if (g) {
      var h = c(f, e),
        i = d(e, g),
        j = i > h ? i - h : h - i;
      if (100 > j) this.scrollToTop(i);
      else {
        var k = Math.round(j / 100);
        b = b || (k > 20 ? 20 : k), i > h ? this.scrollDown(h, i, b, j) : this.scrollUp(h, i, b, j)
      }
    }
  }
}

function loadImg() {
  return {
    restrict: "A",
    scope: {
      imgSrc: "@loadImgSrc"
    },
    link: function(a, b, c) {
      var d = c.loadImg.split(","),
        e = "";
      angular.forEach(d, function(b) {
        e += a.imgSrc + "_" + b + ".jpg " + b + "w, "
      }), b.attr({
        src: a.imgSrc + "_" + d[0] + ".jpg",
        srcset: e
      })
    }
  }
}

function social() {
  return {
    restrict: "E",
    scope: {
      socialLink: "=linkData"
    },
    replace: !0,
    template: '<li><a href="{{::socialLink.link}}" target="_blank"><span class="font-icon icon-{{::socialLink.label | lowercase}}"></span></a></li>'
  }
}

function factoryProjects() {
  var a, b = {
      storyboard: {
        imgPath: "storyboard",
        title: "Storyboard",
        // subtitle: "Hiring Web Application",
        description: "As my daily sketches were appreciated by the art director when I worked for The Great Wall, I got the opportunity of designing storyboards for other directors. Then I designed a part of the storyboard for the fantasy film Once upon a Time which involved many fighting scenes with special effect. Later, I was responsible for the design of the storyboard of all the scenes for The Founding of an Army which involved gunfight scenes, street battle scenes, exploding scenes, etc. And the storyboard I designed was recognized by the director Wai-Keung Lau.",
        screenshots: [{
          title: "The Founding Of An Army",
          images: ["sb01.jpg","sb02.jpg","sb03.jpg","sb04.jpg","sb05.jpg","sb06.jpg","sb07.jpg"]
        }]
      },
      "conceptart": {
        imgPath: "conceptart",
        title: "Concept Art",
        // subtitle: "E-commerce platform",
        description: "Since 2011 when I started my career as a film concept designer, I have already designed scenes for many films. The scenes I designed involved various Chinese ancient dynasties, like the three kingdoms period (The Assassins), the Song dynasty (The Great Wall), the period of the Republic of China (The Founding of an Army), modern times (The Rooftop), etc. In addition, I designed images of the monster for the film When Robbers Meet the Monster. Up to now, I’ve cooperated with lots of excellent art directors and many famous Chinese directors, including Zhang Yimou, Wai-Keung Lau, Jay Zhou, etc. ",
        noMobile: !0,
        screenshots: [{
          title: "The Great Wall",
          images: ["ca01.jpg","ca02.jpg","ca03.jpg","ca04.jpg"]
        }, {
          title: "The Founding Of An Army",
          images: ["ca05.jpg","ca06.jpg","ca07.jpg"]
        }, {
          title: "When robbers meet the Monster",
          images: ["ca11.jpg","ca12.jpg"]
        },{
          title: "Other",
          images: ["ca08.jpg","ca09.jpg","ca10.jpg"]
        }, ]
      },
      "costumedesign": {
        imgPath: "costumedesign",
        title: "Costume Design",
        // subtitle: "E-commerce site",
        description:"I was also responsible for the design of characters’ costumes for many films and ever cooperated with Hark Tsui, Yuan Heping, etc. The costumes I designed covered many historical periods. The films that I participated in enjoyed great popularity in China and made good achievements at the box office. For instance, Monster Hunt directed by Xu Chengyi. The images of characters in Monster Hunt were adored by many audience. ",
        screenshots: [{
          title: "The Village of no Return",
          images: ["jianwangcun_01.jpg"]
        }, {
          title: "Sword Master",
          images: ["sword_master_01.jpg","sword_master_02.jpg","sword_master_03.jpg","sword_master_04.jpg","sword_master_05.jpg","sword_master_06.jpg"]
        }, {
          title: "God of War",
          images: ["god_of_war_01.jpg","god_of_war_02.jpg","god_of_war_03.jpg","god_of_war_04.jpg","god_of_war_05.jpg"]
        }, {
          title: "The Thousand Face of Dunjia",
          images: ["qimendunjia_01.jpg","qimendunjia_02.jpg","qimendunjia_03.jpg"]
        },{
          title: "Psycho",
          images: ["Psycho_01.jpg","Psycho_02.jpg","Psycho_03.jpg","Psycho_04.jpg"]
        },{
          title: "Other",
          images: ["other_01.jpg"]
        },]
      },
      "illustration": {
        imgPath: "illustration",
        title: "illustration",
        description:"Most of the illustrations that I created comes from my own imagination. Sometimes, it was one of the scenes of a fantasy story. And sometimes it expressed a kind of feeling or sentiment from myself. The tools that I used includes water color, acrylic paint, oil paint, and some painting software. I want to find out the painting language and the ways of expression that belong to myself. ",
        screenshots: [
          {
            title: "",
            images: ["illustration_01.jpg","illustration_02.jpg","illustration_03.jpg","illustration_04.jpg","illustration_05.jpg","illustration_06.jpg","illustration_07.jpg"]
          }
        ]
      },
      "personalsketch": {
        imgPath: "personalsketch",
        title: "Personal Sketch",
        description:"Goldfish is a comic drew by myself. The inspiration of the story comes from a piece of true news. I provided the idea and decided to complete the story with my editor. It is a story about a journalist who determined to find out the truth, a poor but kind mother and her daughter. I want to discuss the relationship between the truth and the false and to explore the emotional relationship between different people. According to my plan, there is going to be 16 chapters in this comic. At present, I am still working on it. ",
        screenshots: [{
          title: "Gold Fish",
          images: ["JY02.jpg","JY03.jpg","JY04.jpg","JY05.jpg","JY08.jpg","JY09.jpg"]
        }]
      },

      "lifedrawing": {
        imgPath: "lifedrawing",
        title: "Life Drawing",
        description:"In order to sharpen my painting skills and have a better understanding of the physical structure, I spent most of my free time on practicing sketching. And I often practice 3-minitue sketch and 5-minute sketch to improve my painting speed.  The conferences of my sketches includes real models, pictures, and film screenshots. And there are also some concept design sketches in this part. I want to explore my own painting styles through my practice. ",
        screenshots: [{
          images: ["ld_01.jpg","ld_02.jpg","ld_03.jpg","ld_04.jpg","ld_05.jpg","ld_06.jpg","ld_07.jpg","ld_08.jpg","ld_09.jpg","ld_10.jpg","ld_11.jpg","ld_12.jpg"]
        }]
      }
    },
    c = 0;
  for (a in b) b[a].order = c, c++;
  return b
}
run.$inject = ["$rootScope", "$location", "$timeout", "$anchorScroll"], AnchorSmoothScroll.$inject = ["$document", "$window"], angular.module("portfolioApp", ["ngAnimate", "ngRoute", "angular-inview"]).config(["$routeProvider", "$locationProvider", config]).service("anchorSmoothScroll", AnchorSmoothScroll).factory("projects", factoryProjects).directive("loadImg", loadImg).directive("social", social).controller("MainController", ["$scope", "$location", "anchorSmoothScroll", MainController]).run(run), angular.module("portfolioApp").controller("HomeController", ["$scope", "projects", function(a, b) {
  a.page = "home", a.projects = b
}]), angular.module("portfolioApp").controller("ProjectController", ["$scope", "$routeParams", "projects", function(a, b, c) {
  var d = c[b.alias],
    e = Object.keys(c).sort(function(a, b) {
      return c[a].order - c[b].order
    }),
    f = d.order,
    g = 0 !== f ? e[f - 1] : e[e.length - 1],
    h = f !== e.length - 1 ? e[f + 1] : e[0];
  d.alias = b.alias, a.page = "project", a.project = d, a.prevProject = g, a.nextProject = h
}]), angular.module("portfolioApp").controller("AboutController", ["$scope", function(a) {
  a.page = "about", a.experiences = [{
    title: "Storyboard Artist, Concept Designer",
    time: "2017",
    company: "When robbers meet the Monster, Film",
    description: "When Robbers Meet the Monster is a swordsmen movie with magical elements, directed by Wai-Keung Lau. This story is happened at Ming dynasty. In this project, I was mainly responsible for the storyboard, designing some concept clips. Besides, I designed the charactor of “Monster” in this film. After communicating with the director, finally I created several concept sketches and 3D models of the monster, which respectively represented three growth stage of it. In the part of the film production, I designed the art style of the film intro animation. This film will be released at the end of 2018."
  }, {
    title: "Costume Designer",
    // time: "2017",
    company: "Drug Dealer, Film",
    // skills: ["Vue", "Laravel", "HTML5", "Stylus", "ES2015", "Webpack", "Babel", "Yarn"],
    // skillType: "code",
    description: "Drug Dealer is a realistic film based on a true story, which was happened 20 years ago in China. I designed costumes for all the characters in this film, including businessmen, patients, policemen, prostitutes, and the fraud. All the costume design is based on the style in the late 20th century in Shanghai."
  }, {
    title: "Storyboard Artist, Concept Designer",
    time: "2016",
    company: "The Founding of an Army, Film",
    description: "The Founding of An Army tells an historical event in 1927 about a revolutionary war in China. In this project which involves lots of war scenes, I was responsible for the design of storyboard, including fighting scenes, exploding scenes, etc. Besides, I drew the concept design sketch of some scenes and edited some war clips, which is the most important part in this film. "
  }, {
    title: "Costume Designer",
    company: "The Thousand Faces of Dunjia, Film",
    description: "In this film, I worked with Hark Tsui, one of the most famous swordsmen movie director in the world. I was mainly responsible for costume design of the main characters. I designed costumes of 11 martial art masters in 6 different martial art group. My design mixed together the clothing style in Song dynasty and my own imagination."
  }, {
    title: "Costume Designer",
    time: "2015",
    company: "The Village of no Return, Film",
  }, {
    title: "Storyboard Artist",
    company: "Once upon a time, Film",
    description: "Worked with Anthony LaMolinara, the director."
  },{
    title: "Concept Designer",
    company: "The Great Wall, Film",
    description: "It is a fantasy action film directed by Zhang Yimou and co-produced by Legendary Pictures and Universal Pictures. In this project, I was responsible for scene design of the capital city of Song dynasty, including the design of royal palace, the gate of imperial city, royal square, glazed stupa, tower of the great wall, etc. I designed the structure, decoration pattern, and color of these buildings."
  },{
    title: "Costume designer",
    time: "2014",
    company: "Phantom of the Theatre 3D, Film",
  },{
    title: "Costume Designer",
    time: "2013",
    company: "Sword Master 3D, Film",
  },{
    title: "Set Design Assistant",
    time: "2012",
    company: "The Rooftop, Film",
  },{
    title: "Costume design Assistant",
    company: "LanLing King, TV serie",
  }], a.education = [{
    time: "Graduated 2011",
    title: "Bachelor of Film Art Design",
    school: "Communication University of China ",
  }], a.skills = {
    experienced: ["Photoshop", "SketchUp", "Illustration", "Zbrush"],
  }
}]), angular.module("portfolioApp").run(["$templateCache", function(a) {
  a.put("views/about.html", '<article id="about-content"> <div class="container clearfix"> <div class="header"> <h2 class="header-name">Xiao Han</h2> <h3 class="header-title">Storyboard Artist, Costume Designer, Concept Designer</h3> <ul class="social-links"> <li ng-repeat="socialLink in ::socialLinks"><a href="{{::socialLink.link}}" target="_blank"><span class="font-icon icon-{{::socialLink.label | lowercase}}"></span>{{::socialLink.short}}</a></li></ul> </div> <div class="panel-left"> <section class="experiences"> <h2 class="section-heading"><span class="font-icon icon-experience"></span>Experiences</h2> <ul class="timeline"> <li ng-repeat="experience in ::experiences" class="timeline-item"> <div class="aside"> <h4 class="time v-space">{{::experience.time}}</h4> </div> <div class="main"> <h3 class="title v-space">{{::experience.title}}</h3> <h5 class="location">{{::experience.company}}</h5> <p class="description">{{::experience.description}}</p> <h5 ng-if="experience.skills" class="skills"><span class="font-icon icon-{{::experience.skillType}}"></span>{{::experience.skills.join(\', \')}}</h5> </div> </li> </ul> </section> <section class="education"> <h2 class="section-heading"><span class="font-icon icon-education"></span>Education</h2> <ul class="timeline"> <li ng-repeat="edu in ::education" class="timeline-item"> <div class="aside"> <h4 class="time v-space">{{::edu.time}}</h4> </div> <div class="main"> <h3 class="title v-space">{{::edu.title}}</h3> <h5 class="location">{{::edu.school}}</h5> <p ng-if="edu.description" class="description">{{::edu.description}}</p> </div> </li> </ul> </section> </div> <div class="panel-right"> <section class="skills"> <div> <h2 class="section-heading"><span class="font-icon icon-design"></span>Design Skills</h2> <div class="list-container"> <ul ng-repeat="(title, skill) in ::skills"> <li><h3 class="list-heading v-space">{{::title}}</h3></li> <li ng-repeat="s in ::skill">{{s}}</li> </ul> </div> </div> <div> <h2 class="section-heading"><span class="font-icon icon-other"></span>Other Skills</h2> <ul> <li>Adobe Effects</li> <li>Final Cut</li> </ul> </div> </section> </div> </div> </article>'), a.put("views/footer.html", '<div class="container clearfix"> <ul class="social-links"> <social ng-repeat="socialLink in ::socialLinks" link-data="socialLink"></social> </ul> <p>&copy; {{::year}} Designed &amp; Coded by Tricrepe</p> </div>'), a.put("views/header.html", '<div class="container"><div class="signature"></div><nav id="nav-menu" ng-class="{\'open\' : menu.open}"><ul class="nav-links"> <li><a href="#/" ng-click="menu.open = false;scrollTo(&quot;work&quot;)" id="nav-work">Work</a></li> <li><a href="#/about" ng-click="menu.open = false">About</a></li> <li> <a id="contact-link" ng-click="contact.open = !contact.open">Contact</a> <ul class="social-links" ng-show="contact.open || menu.open"> <social ng-repeat="link in ::socialLinks" link-data="link"></social> </ul> </li> </ul> </nav> </div> <a ng-click="menu.open = !menu.open" ng-class="{\'open\': menu.open}" class="menu-toggle btn-header"> <span></span> </a> <div id="contact-content" ng-class="{\'open\': contact.open}"> <div class="content-wrapper"> <h1>Connect with Me</h1> <div class="content-row" ng-repeat="socialLink in ::socialLinks"> <h3>{{::socialLink.label}}</h3> <p><a href="{{::socialLink.link}}" target="_blank">{{::socialLink.short}}</a></p> </div> <span class="close-content" ng-click="contact.open = !contact.open">Close</span> </div> </div>'), a.put("views/home.html", '<section class="intro"> <div class="container"> <div class="statement"><div class="zhuomian"><img src="./zhuomian.jpeg"></div></div> </div> </section> <a id="work"></a> <section id="work-container"> <div class="container"> <div id="thumbnail-grid" class="grid"> <a ng-repeat="(alias, project) in ::projects" in-view="project.inview = $inview" in-view-options="{ debounce: 250 }" ng-class="::{\'in-view\' : routeChange || project.inview}" class="thumbnail" href="#/project/{{::alias}}"><figure class="every_grid"><img alt="thumbnail of project {{::project.title}}" class="every_work" sizes="(min-width: 1220px) 400px, (min-width: 1024px) calc(33vw - 10px), (min-width: 768px) calc(50vw - 10px), 100vw" load-img="510" load-img-src="./images/home/{{::project.imgPath}}" model="thumbnail"><figcaption class="copy-wrapper"> <h3 class="title">{{::project.title}}</h3> <p class="sub-title">{{::project.subtitle}}</p> </figcaption> </figure> </a> </div> </div> </section>'), a.put("views/project.html", '<article class="project-content project-{{::project.alias}}"> <section class="intro"> <div class="container"> <hgroup> <h1 class="project-title">{{::project.title}}</h1> <h2>{{::project.subtitle}}</h2> <p ng-if="project.description">{{::project.description}}</p> <p class="project-tools"><span class="font-icon icon-code"></span>{{::project.tools.join(\', \')}}</p> <a class="btn-main project-link" ng-if="project.link" href="{{::project.link}}" target="_blank"><span class="btn-text">Go to site</span></a> </hgroup> <div class="jumbotron"></div> </div> </section> <section class="screenshots"> <div class="screenshot" ng-repeat="screenshot in ::project.screenshots"> <div class="container"> <h3 ng-if="::screenshot.title" class="screenshot-title">{{::screenshot.title}}</h3> <p ng-if="::screenshot.description" class="screenshot-description">{{::screenshot.description}}</p> <div class="screenshot-images"> <img ng-repeat="image in ::screenshot.images" ng-src="./images/project/{{::project.imgPath}}/{{::image}}"> </div> </div> </div> </section> </article> <div class="project-nav" ng-class="{\'at-bottom\' : footer.inview}"> <div class="container"> <a href="#/project/{{::prevProject}}"><span class="nav-prev"></span><span>previous</span></a> <a href="#/project/{{::nextProject}}"><span class="nav-next"></span><span>next</span></a> </div> </div>')
}]);
