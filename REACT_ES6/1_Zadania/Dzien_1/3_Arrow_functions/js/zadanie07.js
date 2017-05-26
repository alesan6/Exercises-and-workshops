const App = function() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
}


App.prototype.generateLinks = function() {
this.websites.forEach(e => {
  this.links.push('https://www.' + e + '.com');
});
}


let app = new App();
app.generateLinks();
console.log(app.links)

let aElement1= $('.menu').find('a').first();
let aElement2= $('.menu').find('a').eq(1);
let aElement3= $('.menu').find('a').last();
aElement1.attr('href', app.links[0]);
aElement2.attr('href', app.links[1]);
aElement3.attr('href', app.links[2]);
