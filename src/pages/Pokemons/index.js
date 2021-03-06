import React, { Component } from 'react'

export default class Pokemons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    }
  }
  async componentDidMount() {


    const poke = await fetch(`https://pokemonapi-humble-gecko-nx.mybluemix.net/pokemons`,{
      method:'GET',
      headers:{
        'content-type':"application/json"
      }
    })

    const pokemonsJSON = await poke.json()
    this.setState( {pokemons: pokemonsJSON.data.Pokemons} )
  }

  render() {
    return (
      <>
        <div className="bg-blue-900">
          <div className="max-w mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block text-yellow-300">Pokémones</span>
              <span className="block font-thin">Primer Generación</span>
            </h2>
            </div>
          </div>
        <div className="bg-blue-900 grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        { this.state.pokemons.map(pokemon=>(
          <div className="bg-white rounded-lg shadow-xl grid-span-1">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex flex-col">
                <img  className="self-center"src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <h3 className="text-lg leading-6 font-medium text-gray-900 capitalize">
                  {pokemon.name}
                </h3>
                <p className="self-center mt-1 max-w-2xl text-sm text-gray-500">
                  {pokemon.types.map(data => {
                    return data.type.name
                  })}
                </p>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 h-20">
                    <dt className="text-sm font-medium text-gray-500 text-right">
                      Habilidades
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul className="text-left">
                        {pokemon.abilities.map(data => {
                          const ability = data.ability.name
                          const gid = data.gid
                          return <li key={gid}>{ability}</li>
                        })}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" >
                <dt className="text-sm font-medium text-gray-500 text-right">
                  Stats
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="text-left">
                    {pokemon.stats.map(data => {
                      return <li>
                      <span className="font-bold">
                      {`${data.stat.name}:`}
                      </span>
                      <span>
                      {` ${data.base_stat}`}
                      </span>
                      </li>
                    })}
                  </ul>
                </dd>
              </div>
            </div>
          </div>
        ))}
        </div>

      </>
    )
  }
}
