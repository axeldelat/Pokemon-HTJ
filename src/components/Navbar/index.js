import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

// Pages
import Home from '../../pages/Home'
import Pokemons from '../../pages/Pokemons/'
import Register from '../../pages/Register/'
import Duelists from '../../pages/Duelists';

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
          <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <span>
                    <span className="sr-only">Workflow</span>
                    <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                  </span>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={this.handleClick}>
                    <span className="sr-only">Open menu</span>
                    {/* <!-- Heroicon name: menu --> */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
                <nav className="hidden md:flex space-x-10">
                  <span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                    <Link to="/">Inicio</Link>
                  </span>
                  <span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                    <Link to="/pokemons">Pokémones</Link>
                  </span>
                  <span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                    <Link to="/duelists">Duelistas</Link>
                  </span>
                </nav>
                <span className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 hidden">
                  <Link to="/register">Inscríbete</Link>
                </span>
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
              <Route path="/duelists">
                <Duelists />
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
