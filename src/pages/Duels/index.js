import React, { Component } from 'react'

export default class Duels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      pokemons: []
    }
  }
  async componentDidMount() {
    const events = await fetch(`https://pokemonapi-humble-gecko-nx.mybluemix.net/events`,{
      method:'GET',
      headers:{
        'content-type':"application/json"
      }
    })

    const eventsJSON = await events.json()
    console.log(eventsJSON)
    this.setState( {events: eventsJSON.data.Events} )




    const poke = await fetch(`https://pokemonapi-humble-gecko-nx.mybluemix.net/pokemons`,{
      method:'GET',
      headers:{
        'content-type':"application/json"
      }
    })
  
    const pokemonsJSON = await poke.json()
    this.setState( {pokemons: pokemonsJSON.data.Pokemons} )
  }

  getUsername(user_id) {
    fetch(`https://pokemonapi-humble-gecko-nx.mybluemix.net/users/${user_id}`,{
      method:'GET',
      headers:{
        'content-type':"application/json"
      }
    })
  }


  render() {
    return (
      <>
        <div className="bg-blue-900">
          <div className="max-w mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block text-yellow-300">Duelos Disponibles</span>
              <span className="block font-thin">Pon a prueba tus Pokémones</span>
            </h2>
          </div>
        </div>
        <div className="bg-blue-900 grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        { this.state.events.map(event=>(
          <div className="bg-white rounded-lg shadow-xl grid-span-1">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex flex-col">
                <img  className="self-center"src={event.date} alt={event.date}/>
                <h3 className="text-lg leading-6 font-medium text-gray-900 capitalize">
                  {event.date}
                </h3>
                <p className="self-center mt-1 max-w-2xl text-sm text-gray-500">
                  {/* {pokemon.types.map(data => {
                    return data.type.name
                  })} */}
                </p>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 h-20">
                    <dt className="text-sm font-medium text-gray-500 text-right">
                      Nombre de Pokemon
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul className="text-left">
                        img
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        ))}
        </div>

      </>
    )
  }
}
