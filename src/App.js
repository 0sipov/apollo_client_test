import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p> loading... </p>;

  if (error) return <p> Error =( </p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This from request</p>
        <div>
          {data.rates.map(({ currency, rate }) => (
            <div key={currency}>
              <p>
                {currency}: {rate}
              </p>
            </div>
          ))}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apollo client
        </a>
      </header>
    </div>
  );
}

export default App;
