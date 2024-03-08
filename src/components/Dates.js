import React from "react";

const Dates = (props) => {
  const { invoiceNumber, invoiceDate, dueDate } = props;
  return (
    <>
      <article className="my-5 flex items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">Invoice Number: </span>
            {invoiceNumber}
          </li>
          <li className="p-1 bg-gray-100">
            <span className="font-bold">Invoice date: </span>
            {invoiceDate}
          </li>
          <li className="p-1">
            <span className="font-bold">Due date: </span>
            {dueDate}
          </li>
        </ul>
      </article>
    </>
  );
};

export default Dates;
