export function RateRow({ amount, code }) {
  return (
    <tr>
      <td>{code}</td>
      <td>
        {amount.toLocaleString("en", {
          style: "currency",
          currency: code,
        })}
      </td>
    </tr>
  );
}
