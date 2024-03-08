import React from "react";

const Footer = (props) => {
  const {
    name,
    address,
    email,
    website,
    phone,
    bankName,
    bankAccount,
    bankAccountNumber,
  } = props;
  return (
    <>
      <footer className="footer border-t-2 border-grap-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Your Name: </span>
            {name}
          </li>
          <li>
            <span className="font-bold">Email Address: </span>
            {email}
          </li>
          <li>
            <span className="font-bold">Mobile Number: </span>{phone}
          </li>
          <li>
            <span className="font-bold">Bank: </span>{bankName}
          </li>
          <li>
            <span className="font-bold">Account Holder Name: </span>{name}
          </li>
          <li>
            <span className="font-bold">Account Number: </span>{bankAccountNumber}
          </li>
          <li>
            <span className="font-bold">Website: </span>
            <a href={website} target="_blank" rel="noopenner noreferrer">
              {website}
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
