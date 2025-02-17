import {POKEMON_TYPE_COLORS} from './constants';

const getPokemonColor = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()]

export default getPokemonColor