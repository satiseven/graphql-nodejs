import { gql } from "@apollo/client";

const NOTES = gql`
  query NotesQuery {
    notes {
      description
    }
  }
`;

function App() {
  return (
    <div>
      <h1>this is app</h1>
    </div>
  );
}

export default App;
