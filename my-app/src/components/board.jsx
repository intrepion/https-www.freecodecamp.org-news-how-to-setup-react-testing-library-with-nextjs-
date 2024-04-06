import { times } from "lodash";

export default function Board() {
  return (
    <table>
      <tbody>
        {times(4, (i) => (
          <tr key={i}>
            {times(4, (j) => (
              <td key={j} className="cell"></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
