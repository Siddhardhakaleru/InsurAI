export default function Price({ oldPrice,newPrice }) {
    let styles = {
      backgroundColor: "lightBlue",
      padding: "8px",
      borderRadius: "4px"
    };
  return (
    <div className="Price" style={styles}>
      <span style={{ textDecoration: "line-through" }}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span>{newPrice}</span>
    </div>
  )
}