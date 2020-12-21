import React, {useState} from 'react'
import Calendar from 'react-calendar'

// https://github.com/wojtekmaj/react-calendar

export default function RegisterForm() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-white text-right">Crear Equipo</h3>
              <p className="mt-1 text-sm text-white text-opacity-75 text-right">
                Los Equipos están conformados por un entrenador y 6 pokémones
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Nombre</label>
                      <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                      />
                    </div>


                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                      <Calendar
                        onChange={onChange}
                        value={value}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
