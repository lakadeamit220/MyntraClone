import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

export default function Bag() {
  return (
    <>
      <div className="bag-page">
        <div className="bag-items-container">
          <BagItem />
        </div>
        <BagSummary />
      </div>
    </>
  );
}
