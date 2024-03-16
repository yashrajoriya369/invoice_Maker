import React from "react";

const ClientDetail = (props) => {
  const { clientName, clientAddress } = props;
  return (
    <>
      <section className="mt-10">
        <h2 className="uppercase text-2xl font-bold mb-1">{clientName}</h2>
        <p>{clientAddress}</p>
      </section>
    </>
  );
};

export default ClientDetail;
