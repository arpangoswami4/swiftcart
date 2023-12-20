import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getClothAction } from "../store/thunkActions/storeThunk";

const StoreDisplay = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClothAction());
  }, [dispatch]);

  return (
    <div className="p-12 grid grid-cols-3 gap-8 bg-amber-100">{children}</div>
  );
};

export default StoreDisplay;
