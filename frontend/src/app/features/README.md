# Features
> The directory for lazy-loaded, self-contained feature modules

A module consists of one or more of the following:
* a [NGRX store module](https://ngrx.io)
* containers
  * containers include sub routing
  * it is all about scaffolding the feature module
  * containers extend an abstract container class
* pages
  * each page is a representation of route
  * pages hold business logic
  * pages do not include sub routing
  * pages extend an abstract page class
* components
  * components are integrated in pages
  * they are preferable dumb data consumers and represent the presentational layer
* translations
  * translations related to a module are lazy-loaded as well
* necessary [types/models](https://www.typescriptlang.org)
* [injectable](https://angular.io/api/core/Injectable) services


Each feature module should probably import the [Shared Module](../shared/README.md)
