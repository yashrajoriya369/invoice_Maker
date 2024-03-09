import React from "react";

const Table = (props) => {
  const { list } = props;
  return (
    <>
      <table width="100%" className="mb-5">
        <thead>
          <tr className="bg-gray-100">
            <th>Item description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody className="text-center">
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </>
  );
};

export default Table;
