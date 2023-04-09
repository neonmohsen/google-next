import Image from "next/image";

const Card = ({ brand, items }) => {
  return (
    <div className="card">
      <h3 className="brand-name">{brand?.name}</h3>
      <div className="items-container">
        {items?.map((item) => (
          <div className="item" key={item?.id}>
            <div className="image-container">
              <img
                src={item?.image}
                alt={item?.name}
                width={400}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="item-details">
              <h4 className="item-name">{item?.name}</h4>
              <p className="item-description">
                {`${item?.description?.slice(0, 100)}...`}
              </p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .card {
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin: 3rem;
        }
        .brand-name {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 15px;
          text-align: center;
          text-transform: uppercase;
        }
        .items-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .item {
          border-radius: 12px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          width: calc(20% - 10px);
        }
        .item .image-container {
          border-radius: 12px 12px 0 0;
          overflow: hidden;
          margin: 2rem;
        }
        .item-details {
          background-color: #f5f5f5;
          border-radius: 0 0 12px 12px;
          padding: 20px;
        }
        .item-name {
          font-size: 16px;
          font-weight: bold;
          margin: 0 0 10px;
        }
        .item-description {
          font-size: 14px;
          margin: 0;
        }
        @media only screen and (max-width: 768px) {
          .item {
            width: 100%;
          }
          .item .image-container {
            border-radius: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
