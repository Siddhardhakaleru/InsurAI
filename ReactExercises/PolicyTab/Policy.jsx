import './Policy.css';
import Price from './Price';

export default function Policy({ name, description, oldPrice, newPrice }) {
  return (
    <div className="Policy">
      <h2>{name}</h2>
      <p>{description}</p>
      <Price oldPrice={oldPrice} newPrice={newPrice} />
    </div>
  )
}