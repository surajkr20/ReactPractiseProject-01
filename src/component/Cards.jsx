import "./Cards.css";


const Cards = ({data}) => {
    return (
      <div className="card-container">
        {data.map(value => (
          <div className="Card-items" key={value.id}>
            <div className="img-contain">
            <img src={value.image} alt={value._id} />
            </div>
            <h2>{value.title}</h2>
            <div className="text-items">
            <p>Price : ${value.price}</p>
            <p>Ratings : {value.rating}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
export default Cards;
