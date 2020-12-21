import React, { Component } from 'react'
import {
  BrowserRouter as
  Route,
  Link,
} from "react-router-dom";

export default class HeroSection extends Component {
  render() {
    return (
      <>
      <Route>
        <div className="relative bg-blue-900 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-blue-900 sm:py-16 md:py-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="#1E3A8A" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Busca Duelos</span>
                    <span className="block text-yellow-300 xl:inline">Pokémon</span>
                  </h1>
                  <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <Link to="/duels">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:order-2 sm:mt-0 sm:w-auto">
                      Buscar Duelos
                    </button>
                  </Link>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1542887486-c0aeb6d2fc46?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
          </div>
        </div>
      </Route>
      </>
    )
  }
}
