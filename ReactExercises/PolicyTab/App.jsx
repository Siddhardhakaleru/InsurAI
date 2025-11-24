
import './App.css'
import PolicyTab from './PolicyTab';

function App() {
 let policyNames = ["Car Insurance", "Home Insurance", "Health Insurance", "Life Insurance"];
 let policyDescriptions = [
   "Coverage for damages to your car.",
   "Protection against home damages and theft.",
   "Medical coverage for health-related issues.",
   "Financial protection for your loved ones."
 ];
 let oldPrices = [1200, 800, 600, 1000];
 let newPrices = [1000, 700, 500, 900];

  return (
    <>
    <h2>Policies available</h2>
      <PolicyTab productNames={policyNames} productDescriptions={policyDescriptions} oldPrices={oldPrices} newPrices={newPrices} />
    </>
  )
}

export default App