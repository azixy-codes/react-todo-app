export function Tasks({ tasks, onRemoveButtonClick }) {
  return (
    <>
      {tasks && tasks.length ? (
        <ul className="tasks-list">
          {tasks.map(({ text, id }) => (
            <li key={id} className="task">
              <span>{text}</span>
              <button className="close" onClick={() => onRemoveButtonClick(id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
