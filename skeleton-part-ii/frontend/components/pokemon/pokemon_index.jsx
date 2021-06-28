import React from 'react';


class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  // render(){
  //   return (
  //   <section className="pokedex">
  //     <ul>
  //     {this.props.pokemon.map((poke) => (
  //       <li className="pokemon-index-item">
  //         <span>{poke.id}</span>
  //         <img src={poke.imageUrl}/>
  //         <span>{poke.name}</span>
  //       </li>
  //     ))}
  //     </ul>
  //   </section>
  //   )

    render(){
      if (this.props.loading) { return <LoadingIcon />; }
      return (
        <section className="pokedex">
          <Route exact path="/" component={PokemonFormContainer} />
          <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>
          <ul>
            {this.props.pokemon.map((poke) => (
            <PokemonIndexItem key={poke.id} pokemon={poke}/>))
            }
          </ul>
        </section>
      )
    }
  }
  }
  
  
  
  export default PokemonIndex;