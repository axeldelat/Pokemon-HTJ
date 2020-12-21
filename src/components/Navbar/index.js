import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

//Components
import Banner from '../Banner'

// Pages
import Home from '../../pages/Home'
import Pokemons from '../../pages/Pokemons/'
import Register from '../../pages/Register/'
import Duels from '../../pages/Duels';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      navbarOpen: !state.navbarOpen
    }))
  }

  render() {
    return (
      <>
        <Router>
        <Banner />
          <div className="relative bg-blue-900 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <span>
                    <Link to="/">
                      <img className="h-8 w-auto sm:h-10" src="https://www.flaticon.es/svg/static/icons/svg/361/361998.svg" alt="" />
                    </Link>
                  </span>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={this.handleClick}>
                    <span className="sr-only">Abrir Menú</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
                <nav className="hidden md:flex space-x-10">
                  <span className="text-base font-medium text-white hover:text-opacity-75 cursor-pointer">
                    <Link to="/">Inicio</Link>
                  </span>
                  <span className="text-base font-medium text-white hover:text-opacity-75 cursor-pointer">
                    <Link to="/pokemons">Pokémones</Link>
                  </span>
                  <span className="text-base font-medium text-white hover:text-opacity-75 cursor-pointer">
                    <Link to="/duels">Duelos</Link>
                  </span>
                </nav>
              </div>
            </div>

            {/* <!--
              Mobile menu, show/hide based on mobile menu state.

              Entering: "duration-200 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
              Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            --> */}
            <div
            className={this.state.navbarOpen ? 'rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50' : 'hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'}
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-end">
                    <div className="-mr-2">
                      <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={this.handleClick}>
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        <Link to="/">Inicio</Link>
                      </span>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        <Link to="/pokemons">Pokémones</Link>
                      </span>
                      <span className="tml-3 text-base font-medium text-gray-900">
                        <Link to="/duelists">Duelistas</Link>
                      </span>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div>
                    Signup
                  </div>
                </div>
              </div>
            </div>
            <Switch>
              <Route path="/pokemons">
                <Pokemons />
              </Route>
              <Route path="/duels">
                <Duels />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    )
  }
}
