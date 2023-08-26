import './App.css';
import pokemon from './pokemon.json';
import PropTypes from 'prop-types';

const PokemonRow = ({ pokemon }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(', ')}</td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
};

function App() {
  return (
    <div
      style={{
        margin: 'auto',
        width: 800,
        paddingTop: '1rem',
      }}
    >
      <h1 className='title'>Pokemon Search</h1>
      <table width='100%'>
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>Type(s)</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map((p) => (
            <PokemonRow pokemon={p} key={p.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
