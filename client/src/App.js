import { gql, useQuery } from "@apollo/client";

const NOTES = gql`
  query NotesQuery {
    notes {
      description
    }
  }
`;

function App() {
  const { loading, data, error } = useQuery(NOTES);
  if (loading) return "loading...";
  if (error) return `Error:${error.message}`;
  return (
    <div>
      {data &&
        data.notes.map((note, index) => {
          return <h2 key={`note_${index}`}>{note.description}</h2>;
        })}
    </div>
  );
}

export default App;
