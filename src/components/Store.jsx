import { useSelector } from "react-redux";
import StoreDisplay from "./StoreDisplay";
import StoreItem from "./StoreItem";

const Store = () => {
  const { store } = useSelector((state) => state.storeData);
  return (
    <div className="w-full">
      <StoreDisplay>
        {store.map((item) => {
          return (
            <StoreItem
              key={item.id}
              name={item.clothName}
              price={item.clothPrice}
              // imageURL={item.imageURL}
              id={item.id}
            />
          );
        })}
      </StoreDisplay>
    </div>
  );
  
}

export default Store;