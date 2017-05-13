# \<app-active-route\>
<p align="center">
    <a href="https://beta.webcomponents.org/element/mgibas/app-active-route">
        <img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg"></img>
    </a>
    <a href="https://github.com/mgibas/app-active-route">
        <img src="https://img.shields.io/bower/v/app-active-route.svg"></img>
    </a>
</p>

_[Demo and API docs](https://mgibas.github.io/app-active-route/components/app-active-route/)_

Simple polymer element that selects currently active app-route


<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../iron-demo-helpers/demo-pages-shared-styles.html">
    <link rel="import" href="../iron-demo-helpers/demo-snippet.html">
    <link rel="import" href="../iron-pages/iron-pages.html">
    <link rel="import" href="../app-route/app-route.html">
    <link rel="import" href="../paper-input/paper-input.html">
    <link rel="import" href="app-active-route.html">
    <next-code-block>
        <demo-snippet>
          <template is="dom-bind" id="demo">
            <app-active-route pattern="{{activePattern}}" fallback-pattern="/">
              <app-route route="[[route]]" pattern="/nested"></app-route>
            </app-active-route>

            <paper-input label="Route path" value="{{route.path}}"></paper-input>

            <iron-pages selected="[[activePattern]]" attr-for-selected="for-pattern">
              <div for-pattern="/">Default selection</div>
              <div for-pattern="/nested">nested path</div>
            </iron-pages>
          </template>
          <script>
            demo.route = {};
          </script>
        </demo-snippet>
    </next-code-block>
  </template>
</custom-element-demo>
```
-->
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
