export const Search = ({ onNewSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Busqueda por modelo o nombre"
        onChange={(e) => onNewSearch(e.target.value)}
      />
    </>
  );
};
