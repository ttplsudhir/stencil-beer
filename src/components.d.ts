/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}

import 'ionicons';
import '@stencil/router';
import '@ionic/core';

import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';
import {
  Bar,
  Beer,
} from './global/interfaces';

import {
  AuthPage as AuthPage
} from './components/auth-page/auth-page';

declare global {
  interface HTMLAuthPageElement extends AuthPage, HTMLStencilElement {
  }
  var HTMLAuthPageElement: {
    prototype: HTMLAuthPageElement;
    new (): HTMLAuthPageElement;
  };
  interface HTMLElementTagNameMap {
    "auth-page": HTMLAuthPageElement;
  }
  interface ElementTagNameMap {
    "auth-page": HTMLAuthPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "auth-page": JSXElements.AuthPageAttributes;
    }
  }
  namespace JSXElements {
    export interface AuthPageAttributes extends HTMLAttributes {
      history?: RouterHistory;
    }
  }
}


import {
  BarDirections as BarDirections
} from './components/bar-directions/bar-directions';

declare global {
  interface HTMLBarDirectionsElement extends BarDirections, HTMLStencilElement {
  }
  var HTMLBarDirectionsElement: {
    prototype: HTMLBarDirectionsElement;
    new (): HTMLBarDirectionsElement;
  };
  interface HTMLElementTagNameMap {
    "bar-directions": HTMLBarDirectionsElement;
  }
  interface ElementTagNameMap {
    "bar-directions": HTMLBarDirectionsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "bar-directions": JSXElements.BarDirectionsAttributes;
    }
  }
  namespace JSXElements {
    export interface BarDirectionsAttributes extends HTMLAttributes {
      match?: any;
    }
  }
}


import {
  barList as BarList
} from './components/bar-list/bar-list';

declare global {
  interface HTMLBarListElement extends BarList, HTMLStencilElement {
  }
  var HTMLBarListElement: {
    prototype: HTMLBarListElement;
    new (): HTMLBarListElement;
  };
  interface HTMLElementTagNameMap {
    "bar-list": HTMLBarListElement;
  }
  interface ElementTagNameMap {
    "bar-list": HTMLBarListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "bar-list": JSXElements.BarListAttributes;
    }
  }
  namespace JSXElements {
    export interface BarListAttributes extends HTMLAttributes {
      bars?: Array<Bar>;
    }
  }
}


import {
  BarPage as BarPage
} from './components/bar-page/bar-page';

declare global {
  interface HTMLBarPageElement extends BarPage, HTMLStencilElement {
  }
  var HTMLBarPageElement: {
    prototype: HTMLBarPageElement;
    new (): HTMLBarPageElement;
  };
  interface HTMLElementTagNameMap {
    "bar-page": HTMLBarPageElement;
  }
  interface ElementTagNameMap {
    "bar-page": HTMLBarPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "bar-page": JSXElements.BarPageAttributes;
    }
  }
  namespace JSXElements {
    export interface BarPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  BeerDetail as BeerDetail
} from './components/beer-detail/beer-detail';

declare global {
  interface HTMLBeerDetailElement extends BeerDetail, HTMLStencilElement {
  }
  var HTMLBeerDetailElement: {
    prototype: HTMLBeerDetailElement;
    new (): HTMLBeerDetailElement;
  };
  interface HTMLElementTagNameMap {
    "beer-detail": HTMLBeerDetailElement;
  }
  interface ElementTagNameMap {
    "beer-detail": HTMLBeerDetailElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "beer-detail": JSXElements.BeerDetailAttributes;
    }
  }
  namespace JSXElements {
    export interface BeerDetailAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  BeerItem as BeerItem
} from './components/beer-item/beer-item';

declare global {
  interface HTMLBeerItemElement extends BeerItem, HTMLStencilElement {
  }
  var HTMLBeerItemElement: {
    prototype: HTMLBeerItemElement;
    new (): HTMLBeerItemElement;
  };
  interface HTMLElementTagNameMap {
    "beer-item": HTMLBeerItemElement;
  }
  interface ElementTagNameMap {
    "beer-item": HTMLBeerItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "beer-item": JSXElements.BeerItemAttributes;
    }
  }
  namespace JSXElements {
    export interface BeerItemAttributes extends HTMLAttributes {
      beer?: Beer;
      fave?: Boolean;
    }
  }
}


import {
  BeerList as BeerList
} from './components/beer-list/beer-list';

declare global {
  interface HTMLBeerListElement extends BeerList, HTMLStencilElement {
  }
  var HTMLBeerListElement: {
    prototype: HTMLBeerListElement;
    new (): HTMLBeerListElement;
  };
  interface HTMLElementTagNameMap {
    "beer-list": HTMLBeerListElement;
  }
  interface ElementTagNameMap {
    "beer-list": HTMLBeerListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "beer-list": JSXElements.BeerListAttributes;
    }
  }
  namespace JSXElements {
    export interface BeerListAttributes extends HTMLAttributes {
      beers?: Array<Beer>;
      fave?: Boolean;
    }
  }
}


import {
  BeerPage as BeerPage
} from './components/beer-page/beer-page';

declare global {
  interface HTMLBeerPageElement extends BeerPage, HTMLStencilElement {
  }
  var HTMLBeerPageElement: {
    prototype: HTMLBeerPageElement;
    new (): HTMLBeerPageElement;
  };
  interface HTMLElementTagNameMap {
    "beer-page": HTMLBeerPageElement;
  }
  interface ElementTagNameMap {
    "beer-page": HTMLBeerPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "beer-page": JSXElements.BeerPageAttributes;
    }
  }
  namespace JSXElements {
    export interface BeerPageAttributes extends HTMLAttributes {
      history?: RouterHistory;
    }
  }
}


import {
  favoritesPage as FavoritesPage
} from './components/favorites-page/favorites-page';

declare global {
  interface HTMLFavoritesPageElement extends FavoritesPage, HTMLStencilElement {
  }
  var HTMLFavoritesPageElement: {
    prototype: HTMLFavoritesPageElement;
    new (): HTMLFavoritesPageElement;
  };
  interface HTMLElementTagNameMap {
    "favorites-page": HTMLFavoritesPageElement;
  }
  interface ElementTagNameMap {
    "favorites-page": HTMLFavoritesPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "favorites-page": JSXElements.FavoritesPageAttributes;
    }
  }
  namespace JSXElements {
    export interface FavoritesPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  LazyImg as LazyImg
} from './components/lazy-img/lazy-img';

declare global {
  interface HTMLLazyImgElement extends LazyImg, HTMLStencilElement {
  }
  var HTMLLazyImgElement: {
    prototype: HTMLLazyImgElement;
    new (): HTMLLazyImgElement;
  };
  interface HTMLElementTagNameMap {
    "lazy-img": HTMLLazyImgElement;
  }
  interface ElementTagNameMap {
    "lazy-img": HTMLLazyImgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "lazy-img": JSXElements.LazyImgAttributes;
    }
  }
  namespace JSXElements {
    export interface LazyImgAttributes extends HTMLAttributes {
      alt?: string;
      src?: string;
    }
  }
}


import {
  MainPage as MainPage
} from './components/main-page/main-page';

declare global {
  interface HTMLMainPageElement extends MainPage, HTMLStencilElement {
  }
  var HTMLMainPageElement: {
    prototype: HTMLMainPageElement;
    new (): HTMLMainPageElement;
  };
  interface HTMLElementTagNameMap {
    "main-page": HTMLMainPageElement;
  }
  interface ElementTagNameMap {
    "main-page": HTMLMainPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "main-page": JSXElements.MainPageAttributes;
    }
  }
  namespace JSXElements {
    export interface MainPageAttributes extends HTMLAttributes {
      history?: RouterHistory;
    }
  }
}


import {
  PopoverPage as PopoverPage
} from './components/popover-page/popover-page';

declare global {
  interface HTMLPopoverPageElement extends PopoverPage, HTMLStencilElement {
  }
  var HTMLPopoverPageElement: {
    prototype: HTMLPopoverPageElement;
    new (): HTMLPopoverPageElement;
  };
  interface HTMLElementTagNameMap {
    "popover-page": HTMLPopoverPageElement;
  }
  interface ElementTagNameMap {
    "popover-page": HTMLPopoverPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "popover-page": JSXElements.PopoverPageAttributes;
    }
  }
  namespace JSXElements {
    export interface PopoverPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  ProfileHeader as ProfileHeader
} from './components/profile-header/profile-header';

declare global {
  interface HTMLProfileHeaderElement extends ProfileHeader, HTMLStencilElement {
  }
  var HTMLProfileHeaderElement: {
    prototype: HTMLProfileHeaderElement;
    new (): HTMLProfileHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "profile-header": HTMLProfileHeaderElement;
  }
  interface ElementTagNameMap {
    "profile-header": HTMLProfileHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "profile-header": JSXElements.ProfileHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface ProfileHeaderAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  ProfilePage as ProfilePage
} from './components/profile-page/profile-page';

declare global {
  interface HTMLProfilePageElement extends ProfilePage, HTMLStencilElement {
  }
  var HTMLProfilePageElement: {
    prototype: HTMLProfilePageElement;
    new (): HTMLProfilePageElement;
  };
  interface HTMLElementTagNameMap {
    "profile-page": HTMLProfilePageElement;
  }
  interface ElementTagNameMap {
    "profile-page": HTMLProfilePageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "profile-page": JSXElements.ProfilePageAttributes;
    }
  }
  namespace JSXElements {
    export interface ProfilePageAttributes extends HTMLAttributes {
      history?: RouterHistory;
    }
  }
}


import {
  ShareButton as ShareButton
} from './components/share-button/share-button';

declare global {
  interface HTMLShareButtonElement extends ShareButton, HTMLStencilElement {
  }
  var HTMLShareButtonElement: {
    prototype: HTMLShareButtonElement;
    new (): HTMLShareButtonElement;
  };
  interface HTMLElementTagNameMap {
    "share-button": HTMLShareButtonElement;
  }
  interface ElementTagNameMap {
    "share-button": HTMLShareButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "share-button": JSXElements.ShareButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface ShareButtonAttributes extends HTMLAttributes {
      beer?: any;
    }
  }
}


import {
  StencilBeer as StencilBeer
} from './components/stencil-beer/stencil-beer';

declare global {
  interface HTMLStencilBeerElement extends StencilBeer, HTMLStencilElement {
  }
  var HTMLStencilBeerElement: {
    prototype: HTMLStencilBeerElement;
    new (): HTMLStencilBeerElement;
  };
  interface HTMLElementTagNameMap {
    "stencil-beer": HTMLStencilBeerElement;
  }
  interface ElementTagNameMap {
    "stencil-beer": HTMLStencilBeerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stencil-beer": JSXElements.StencilBeerAttributes;
    }
  }
  namespace JSXElements {
    export interface StencilBeerAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  TabsPage as TabsPage
} from './components/tabs-page/tabs-page';

declare global {
  interface HTMLTabsPageElement extends TabsPage, HTMLStencilElement {
  }
  var HTMLTabsPageElement: {
    prototype: HTMLTabsPageElement;
    new (): HTMLTabsPageElement;
  };
  interface HTMLElementTagNameMap {
    "tabs-page": HTMLTabsPageElement;
  }
  interface ElementTagNameMap {
    "tabs-page": HTMLTabsPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "tabs-page": JSXElements.TabsPageAttributes;
    }
  }
  namespace JSXElements {
    export interface TabsPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  UserProfile as UserProfile
} from './components/user-profile/user-profile';

declare global {
  interface HTMLUserProfileElement extends UserProfile, HTMLStencilElement {
  }
  var HTMLUserProfileElement: {
    prototype: HTMLUserProfileElement;
    new (): HTMLUserProfileElement;
  };
  interface HTMLElementTagNameMap {
    "user-profile": HTMLUserProfileElement;
  }
  interface ElementTagNameMap {
    "user-profile": HTMLUserProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "user-profile": JSXElements.UserProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface UserProfileAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  UsersList as UsersList
} from './components/users-list/users-list';

declare global {
  interface HTMLUsersListElement extends UsersList, HTMLStencilElement {
  }
  var HTMLUsersListElement: {
    prototype: HTMLUsersListElement;
    new (): HTMLUsersListElement;
  };
  interface HTMLElementTagNameMap {
    "users-list": HTMLUsersListElement;
  }
  interface ElementTagNameMap {
    "users-list": HTMLUsersListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "users-list": JSXElements.UsersListAttributes;
    }
  }
  namespace JSXElements {
    export interface UsersListAttributes extends HTMLAttributes {
      users?: any[];
    }
  }
}


import {
  UsersPage as UsersPage
} from './components/users-page/users-page';

declare global {
  interface HTMLUsersPageElement extends UsersPage, HTMLStencilElement {
  }
  var HTMLUsersPageElement: {
    prototype: HTMLUsersPageElement;
    new (): HTMLUsersPageElement;
  };
  interface HTMLElementTagNameMap {
    "users-page": HTMLUsersPageElement;
  }
  interface ElementTagNameMap {
    "users-page": HTMLUsersPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "users-page": JSXElements.UsersPageAttributes;
    }
  }
  namespace JSXElements {
    export interface UsersPageAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
