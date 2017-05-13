# \<app-active-route\>
<p align="center">
    <a href="https://beta.webcomponents.org/element/mgibas/app-active-route">
        <img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg"></img>
    </a>
    <a href="https://www.gitcheese.com/donate/users/530319/repos/88923930">
        <img src="https://s3.amazonaws.com/gitcheese-ui-master/images/badge.svg"></img>
    </a>
    <a href="https://github.com/mgibas/app-active-route">
        <img src="https://img.shields.io/bower/v/app-active-route.svg"></img>
    </a>
</p>

_[Component Page](https://www.webcomponents.org/element/mgibas/app-active-route)_

Simple polymer element that selects currently active app-route

```html
<app-active-route pattern="{{activePattern}}" fallback-pattern="/">
  <app-route route="[[route]]" pattern="/nested"></app-route>
  <app-route route="[[route]]" pattern="/other"></app-route>
</app-active-route>

<iron-pages selected="[[activePattern]]" attr-for-selected="for-pattern">
  <div for-pattern="/">Default selection</div>
  <div for-pattern="/nested">nested path</div>
  <div for-pattern="/other">other path</div>
</iron-pages>
```

## Bower

```
bower install app-active-route
```
