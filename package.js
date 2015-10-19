Package.describe({
    name: 'suryaiiit:meteor-angular-froala',
    version: '0.0.1',
    summary: 'Angular Froala for Meteor',
    git: 'https://github.com/suryaiiit/meteor-angular-froala.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.use(['angular:angular@1.2.0', 'froala:editor@1.2.0'], "client");
    api.addFiles(['angular-froala-master/src/angular-froala.js', 'angular-froala-master/src/froala-sanitize.js'], "client");

});
