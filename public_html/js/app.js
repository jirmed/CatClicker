const cCats = [
    {
        name: 'Cute cat',
        imgSrc: 'images/cat_picture1.jpg',
        nicknames: ['Baby', 'Puppy', 'Fluffy']
    },
    {
        name: 'Ugly cat',
        imgSrc: 'images/cat_picture5.jpeg',
        nicknames: ['Baby', 'Puppy', 'Fluffy']
    },
    {
        name: 'Cat2',
        imgSrc: 'images/cat_picture2.jpeg',
        nicknames: ['Baby2', 'Puppy', 'Fluffy']
    },
    {
        name: 'Cute cat 3',
        imgSrc: 'images/cat_picture3.jpeg',
        nicknames: ['Baby3', 'Puppy', 'Fluffy']
    },
    {
        name: 'Cute cat 4',
        imgSrc: 'images/cat_picture4.jpeg',
        nicknames: ['Baby', 'Puppy', 'Fluffy']
    }
];
var Cat = function (data) {
    var self = this;
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.counter = ko.observable(data.counter || 0);
    this.type = ko.computed(function () {
        var type;
        if (this.counter() <= 1)
            type = 'infant';
        else if (this.counter() < 12)
            type = 'child';
        else if (this.counter() < 18)
            type = 'teenager';
        else
            type = 'adult';
        return type;
    }, this);
    this.nicknames = ko.observableArray(data.nicknames);
    this.handleClick = function () {
        self.counter(this.counter() + 1);
    };
    this.handleButtonClick = function () {
       console.log('cat-click');
    };
};


var ViewModel = function () {
    var self = this;
    
    self.cats = ko.observableArray([]);
    cCats.forEach(function(catItem) {
        self.cats.push(new Cat(catItem));
    });
//    for (var i=0; i<cCats.length; i++) {
//        self.cats.push(ko.observable(new Cat(cCats[i])));
//    };
    self.handleButtonClick = function() {
        self.cat(this);
    };
    self.cat=ko.observable((this.cats()[1]));
};
ko.applyBindings(new ViewModel());