# DRF Ecommerce

DRF Ecommerce is a fully functional *Clothing Ecommerce* Platform made using Django and React.

### Prototype

### Motivation

### Special Features

### Tech Stack Used

* [React.js](https://github.com/facebook/react "React.js + Hooks") is used for creating the UI.
    * [React.js](https://github.com/facebook/react "React's Context API") is used for managing complex state.
* [Django](https://www.djangoproject.com/ "Django") is used for the backend.
    * [Django Rest Framework](https://www.django-rest-framework.org/ "Django Rest Framework") is used setting up API endpoints.
* [SqlLite](https://sqlite.org/docs.html "SqlLite DB") is used that comes bundeled by default in the django app.
* [React Router Dom](https://reactrouter.com/web "React Router Dom") , used for declarative routing in browser.
* [Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/ "Simple JWT") Simple JWT provides a JSON Web Token authentication backend for the Django REST Framework.
* [Pillow](https://pillow.readthedocs.io/en/stable/ "Pillow") library is used for extensive file support and image processing tasks.
* [Localstorage](https://developer.chrome.com/docs/devtools/storage/localstorage/ "Localstorage") used for storing user info like access tokens and session data in the browser storage.


### What more can be done?

This project is far from perfect. Many more things can be done in order to make the user experience and the overall functioning of the product. These are some of the features that I believe could be added in future:

* A product recommendeer system, that provides each user personlized recommendations according to their product searches.
* Mechanism for storing user tokens in *cookies*, as Localstorage is prone to **XXS (Cross Site Scripting)** attacks.
* Integrating a NoSQL database(eg. MongoDB) for more flexibility in product detail fields.


