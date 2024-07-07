export function Form({ inputValue, onInputChange, onButtonClick }) {
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="New Todo"
      />

      <button onClick={onButtonClick}>Submit</button>
    </>
  );
}
