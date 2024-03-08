import React from "react";

const ClientDetail = (props) => {
  const { clientName, clientAddress } = props;
  return (
    <>
      <section className="mt-5">
        <h2 className="uppercase text-xl">{clientName}</h2>
        <p>{clientAddress}</p>
      </section>
    </>
  );
};

export default ClientDetail;
