/**
`app-active-route`
Simple polymer element that selects active route from given app-routes

It's very usefull for elements like `iron-pages` and `neon-animated-pages`.
Instead of writing extra code for selected page or be limited by `/:page` pattern,
simply write:

```
<app-active-route pattern="{{activePattern}}" fallback-pattern="/">
  <app-route route="[[route]]" pattern="/nested"></app-route>
  <app-route route="[[route]]" pattern="/other"></app-route>
</app-active-route>

<iron-pages selected="[[activePattern]]" attr-for-selected="for-pattern">
  <div for-pattern="/">Default selection</div>
  <div for-pattern="/nested">nested path</div>
  <div for-pattern="/other">nested path</div>
</iron-pages>
```

Nesting also works nicelly while using pretty url format:

```
<app-active-route pattern="{{activePattern}}" fallback-pattern="/">
  <app-route route="[[route]]" pattern="/nested" tail="{{tail}}"></app-route>
</app-active-route>

<iron-pages selected="[[activePattern]]" attr-for-selected="for-pattern">
  <div for-pattern="/">
    Root page
  </div>
  <nested-component for-pattern="/nested" route="[[tail]]"></nested-component>
</iron-pages>
```
and inside `nested-component`

```
<app-active-route pattern="{{activePattern}}" fallback-pattern="/">
  <app-route route="[[route]]" pattern="/deeper"></app-route>
</app-active-route>

<iron-pages selected="[[activePattern]]" attr-for-selected="for-pattern">
  <div for-pattern="/">
    ...content of /nested...
  </div>
  <super-nested-component for-pattern="/deeper">
    ...content of /nested/deeper...
  </super-nested-component>
</iron-pages>
```

@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

import { Element } from '@polymer/polymer/polymer-element.js';
class AppActiveRoute extends Element {
  static get template() {
    return html`
    <content select="app-route"></content>
`;
  }

  static get is() { return "app-active-route"; }

  static get properties() {
    return {
      /**
      * Currently active app-route
      */
      route: {
        type: Object,
        readOnly: true,
        notify: true
      },
      /**
      * Pattern of currently active app-route
      */
      pattern: {
        type: String,
        readOnly: true,
        notify: true,
        computed: '_computePattern(route)'
      },
      /**
      * Data of currently active app-route
      */
      data: {
        type: Object,
        readOnly: true,
        notify: true,
        computed: '_computeData(route)'
      },
      /**
      * Tail of currently active app-route
      */
      tail: {
        type: Object,
        readOnly: true,
        notify: true,
        computed: '_computeTail(route)'
      },
      /**
      * Default pattern fallback if there is no active app-route
      */
      fallbackPattern: {
        type: String
      },
      /**
      * Default data fallback if there is no active app-route
      */
      fallbackData: {
        type: String
      },
      /**
      * Default tail fallback if there is no active app-route
      */
      fallbackTail: {
        type: String
      },
      _routes: {
        type: Array
      }
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }

    let self = this;
    this._routes = this.getEffectiveChildren();
    this._routes.forEach(function(route){
      route.addEventListener('active-changed', function() { self._handleActiveChanged(route); } );
      if (route.active) {
        self._setRoute(route);
      }
    });
    this._setRoute(this._routes.find(function(r){ return r.active; }) || null);
  }

  disconnectedCallback() {
    if (super.disconnectedCallback) {
      super.disconnectedCallback();
    }
  }

  ready() {
    super.ready();
  }

  _handleActiveChanged() {
    return this._setRoute(this._routes.find(function(r){ return r.active; }) || null);
  }

  _computePattern(route) {
    return route ? route.pattern : this.fallbackPattern;
  }

  _computeData(route) {
    return route ? route.data : this.fallbackData;
  }

  _computeTail(route) {
    return route ? route.tail : this.fallbackTail;
  }
}

window.customElements.define(AppActiveRoute.is, AppActiveRoute);
