import Policy from "./Policy";

export default function PolicyTab({productNames,productDescriptions,oldPrices,newPrices}) {
    let styles = {
        flexDirection: "row",
        display: "flex",
        border: "2px solid black",
        padding: "10px",
        margin: "10px"
    };
  return (
    <div style={styles}>
      <Policy name={productNames[0]} description={productDescriptions[0]} oldPrice={oldPrices[0]} newPrice={newPrices[0]} />
      <Policy name={productNames[1]} description={productDescriptions[1]} oldPrice={oldPrices[1]} newPrice={newPrices[1]} />
      <Policy name={productNames[2]} description={productDescriptions[2]} oldPrice={oldPrices[2]} newPrice={newPrices[2]} />
      <Policy name={productNames[3]} description={productDescriptions[3]} oldPrice={oldPrices[3]} newPrice={newPrices[3]} />
    </div>
  )
}