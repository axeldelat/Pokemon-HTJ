import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default class CtaSection extends Component {
  render() {
    return (
      <>
        <div className="bg-blue-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">
              <span className="block">¿Estás listo para comenzar?</span>
              <span className="block text-blue-600">Pelea con los mejores de tu área</span>
            </h2>
            <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
            <Link to="/register">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:order-2 sm:mt-0 sm:w-auto">
                Crear Batalla
              </button>
            </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}
