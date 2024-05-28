import { Component, useState } from 'react'
import { Catalog } from '../../Pages/Catalog';
import { Home } from '../../Pages/Home';
import { Poster } from '../Poster/Poster';
// import { Answer } from './Answer/Answer';
import { FAQ } from '../../Pages/FAQ';
import { Contacts } from '../../Pages/Contacts/Contacts';
import { AboutUs } from '../../Pages/AboutUs/AboutUs';
import { FilmPage } from '../../Pages/Film/FilmPage';
import {Registration} from '../../Registration/Registration'
import { Autorization } from '../../Pages/Authorization/Authorization';
import { Profile } from '../../Pages/Profile/Profile';
// import { Heart } from './Film/Heart/Heart';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ABOUT_US_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, FAQ_ROUTE, FILM_ROUTE, HOME_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import { FilmList } from '../Card/FilmList';
import { Detectives } from '../../Pages/Detectives';
import { Actions } from '../../Pages/Actions';

export const authRoutes = [
  {
  
  }
]


export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: <Home/>
  },
  {
    path: CATALOG_ROUTE,
    Component: <Catalog/>
  },
  {
    path: LOGIN_ROUTE,
    Component: <Autorization/>
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Autorization/>
  },
  {
    path: PROFILE_ROUTE,
    Component: <Profile/>
  },
  {
    path: CONTACTS_ROUTE,
    Component: <Contacts/>
  },
  {
    path: ABOUT_US_ROUTE,
    Component: <AboutUs/>
  },
  {
    path: FAQ_ROUTE,
    Component: <FAQ/>
  },
  {
    path: '/actions',
    Component: <Actions/>
  },
  {
    path: '/detectives',
    Component: <Detectives/>
  },
  {
    path: FILM_ROUTE + '/:id',
    Component: <FilmPage/>
  }
]