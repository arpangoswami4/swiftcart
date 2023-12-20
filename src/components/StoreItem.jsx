import { useDispatch } from "react-redux";
import { deleteClothAction } from "../store/thunkActions/storeThunk";

const StoreItem = ({name, price,id}) => {
  const dispatch = useDispatch();
  function handleDelete(id){
    dispatch(deleteClothAction(id));
  }
  return(
  <div className="text-center flex flex-col items-center gap-4 bg-orange-300 rounded-lg p-4">
    <h2 className="text-xl">{name}</h2>
    <p>Price: ${price}</p>
    <button onClick={()=>{handleDelete(id)}} className="p-2 bg-purple-800 text-white w-1/4">Delete Item</button>
    {/* <img src={imageURL} alt="item" /> */}
  </div>);
};

export default StoreItem;
