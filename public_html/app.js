/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function () {
    var model = {
        currentCat: null,
        cats: [
            {
                "name": "Cat 1",
                "image": "cat_picture1.jpg",
                "counter": 0
            },
            {
                "name": "Cat 2",
                "image": "cat_picture2.jpeg",
                "counter": 0
            },
            {
                "name": "Cat 3",
                "image": "cat_picture3.jpeg",
                "counter": 0
            },
            {
                "name": "Cat 4",
                "image": "cat_picture4.jpeg",
                "counter": 0
            },
            {
                "name": "Cat 5",
                "image": "cat_picture5.jpeg",
                "counter": 0
            }
        ],

        init: function () {
            this.currentCat = this.cats[0];
        },

        getCats: function () {
            return this.cats;
        },
        getCurrentCat: function () {
            return this.currentCat;
        },
        setCurrentCat: function (cat) {
            this.currentCat = cat;
        }
    };
    var octopus = {
        init: function () {
            navigationView.init();
            catView.init();
            navigationView.render();
        },
        getCats: function () {
            return model.getCats();
        },
        getCurrentCat: function () {
            return model.getCurrentCat();
        },
        handleCatButtonClick(cat) {
            model.setCurrentCat(cat);
            catView.render();
        },
        handleCatImageClick() {
            var cat = model.getCurrentCat();
            cat.counter++;
            catView.render();
        }
    };
    var navigationView = {
        init: function () {
            this._contents = $('#navigation')[0];
        },
        render: function () {
            this._contents.innerHTML = '';
            var cats = octopus.getCats();
            for (i = 0; i < cats.length; i++) {
                var cat = cats[i];
                var button = $('<button>' + cat.name + '</button>');
                button.appendTo(this._contents);
                button.on("click", (function (cat) {
                    return function () {
                        octopus.handleCatButtonClick(cat);
                    };
                })(cat));
            }
        }

    };
    var catView = {
        init: function () {
            this._name = $('#catname')[0];
            this._image = $('#catimage')[0];
            this._counter = $('#counter')[0];
            this._image.addEventListener('click', function () {
                octopus.handleCatImageClick();
            });
            this.render();
        },
        render: function () {
            var cat = octopus.getCurrentCat();
            this._name.textContent = cat.name;
            this._image.setAttribute('src', 'images/' + cat.image);
            this._counter.textContent = cat.counter;
        }
    };
    model.init();
    octopus.init();
}
);
