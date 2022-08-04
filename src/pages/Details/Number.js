/* eslint-disable react/prop-types */
export default function Number(props) {
  let entries;
  if (props.numbers) {
    entries = Object.entries(props.numbers);
  }

  return (
    <>
      <h6 className="font-weight-bold">Thông số kỹ thuật</h6>
      <br />
      <table style={{ width: '100%' }}>
        <tbody>
          {entries &&
            entries.map((item, idx) => {
              return (
                <tr key={idx} style={{ width: '100%' }} className="d-flex align-items-center m-y-4">
                  <th className="flex-grow-1 font-weight-bold">{item[0]}</th>
                  <th className="flex-grow-1 font-weight-medium text-right">{item[1]}</th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
