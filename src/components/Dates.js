import React from "react";

const Dates = (props) => {
  const { invoiceNumber, invoiceDate, dueDate } = props;
  return (
    <>
      <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">Invoice Number: </span>
            {invoiceNumber}
          </li>
          <li className="p-1">
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
