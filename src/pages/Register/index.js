import React, { Component } from 'react'

//Components
import RegisterForm from './RegisterForm'

export default class Register extends Component {
  render() {
    return (
      <>
        <div className="bg-blue-900 h-screen">
          <div className="max-w mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block text-yellow-300">Crear Nueva Batalla</span>
              <span className="block font-thin">Prueba que eres el mejor</span>
            </h2>
          </div>
        <RegisterForm />
        </div>
      </>
    )
  }
}
