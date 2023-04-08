const Brands = ({ data }) => {
  return (
    <div className="brand-container">
      {data.map((brand) => (
        <a href={brand.link} key={brand.id}>
          <div className="brand-circle">
            <p className="brand-name">{brand.name}</p>
          </div>
        </a>
      ))}
      <style jsx>{`
        .brand-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .brand-circle {
          background-color: #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
          width: 100px;
          margin: 10px;
          text-align: center;
        }
        .brand-name {
          font-size: 18px;
          font-weight: bold;
          margin: 0;
          text-transform: uppercase;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Brands;
