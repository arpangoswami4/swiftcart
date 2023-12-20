import { useSelector } from "react-redux";
import StoreDisplay from "./StoreDisplay";
import StoreInput from "./StoreInput";
import StoreItem from "./StoreItem";

const Admin = () => {
  const { store } = useSelector((state) => state.storeData);
  return (
    <div>
      <StoreInput />
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
};

export default Admin;
