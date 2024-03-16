import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const TableForm = (props) => {
  const {
    description,
    setDescription,
    quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    setAmount,
    list,
    setList,
    total,
    setTotal,
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  // Submit form Function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !quantity || !price) {
      alert("Please fill in all Inputs");
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount,
      };
      setDescription("");
      setQuantity("");
      setPrice("");
      setAmount("");
      setList([...list, newItems]);
      setIsEditing(false);
    }
  };

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price);
    };
    calculateAmount(amount);
  }, [quantity, price, amount, setAmount]);

  // Calculate total amount of items in table
  let rows = document.querySelectorAll(".amount");
  let sum = 0;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].className === "amount") {
      sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
      setTotal(sum);
    }
  }

  // Edit button
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
  };

  // Delete function
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <article className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
          </div>
        </article>
        <button
          type="submit"
          className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          {isEditing ? "Edited Row Item" : "Add Table Item"}
        </button>
      </form>

      {/* Table Items */}
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
                <td className="amount">{amount}</td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className="text-2xl text-red-500 font-bold" />
                  </button>
                </td>
                <td>
                  <button onClick={() => editRow(id)}>
                    <AiOutlineEdit className="text-2xl font-bold text-gray-500" />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <div className="px-5">
        <h2 className="flex items-end justify-end text-gray-800 text-xl">
          Rs. {total.toLocaleString()}
        </h2>
      </div>
    </>
  );
};

export default TableForm;
