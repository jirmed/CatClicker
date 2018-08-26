    var Cat = function (data) {
        var self = this;
        this.name = ko.observable(name);
        this.imgSrc = ko.observable(data.imgSrc );
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
        },this);
        this.nicknames = ko.observableArray(data.nicknames);
        this.handleClick = function () {
            self.counter(this.counter() + 1);
        };
    };


var viewModel = function () {
    this.cat = ko.observable(new Cat({
        name:'Cute cat',
        imgSrc: 'images/cat_picture1.jpg',
        nicknames: ['Baby', 'Puppy', 'Fluffy']
    }));
};
ko.applyBindings(viewModel());