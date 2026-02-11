function Card({ title, description, icon }) {
  return (
    <article className="card">
      {icon ? <p className="card-icon">{icon}</p> : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default Card;
