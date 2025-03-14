export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        const { square, player } = turn;
        return (
          <li key={`${square.row}}${square.col}`}>
            Player {player} selected row:{square.row} col:{square.col}
          </li>
        );
      })}
    </ol>
  );
}
