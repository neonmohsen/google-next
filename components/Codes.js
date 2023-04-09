import Image from "next/image";
import React from "react";

const Codes = ({ brand, data }) => {
  return (
    <div className="card">
      <h3>{brand?.name || "Unknown Brand"}</h3>
      {data.map((item) => (
        <div key={item?.id} className="card-item">
          <img
            src={item?.image}
            alt={item?.enName}
            width={400}
            height={300}
            layout="responsive"
          />
          <div className="card-content">
            <h4>{item?.name || item?.enName || "No Name"}</h4>
            <p>{item?.description || "No Description"}</p>
            <a href={item?.link}>Learn More</a>
          </div>
        </div>
      ))}
      <style jsx>{`
        .card {
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 1rem;
          margin-bottom: 1rem;
        }
        .card-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        .card-item img {
          max-width: 150px;
          margin-right: 1rem;
        }
        .card-content {
          flex: 1;
        }
        .card-content h4 {
          margin: 0 0 0.5rem;
        }
        .card-content p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 500px;
        }
      `}</style>
    </div>
  );
};

export default Codes;
