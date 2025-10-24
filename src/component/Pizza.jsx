export default function Pizza({ name, ingredients, price, photoName }) {
    return (
      <article className="pizza">
        <img src={photoName} alt={name} />
        <div className="pizza-info">
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <p><strong>${price}</strong></p>
        </div>
      </article>
    );
  }
  