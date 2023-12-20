import { useDispatch } from "react-redux";
import {
  deleteClothAction,
  updateClothAction,
} from "../store/thunkActions/storeThunk";
import { useRef, useState } from "react";

const StoreItem = ({ name, price, id, isAdmin = false }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const nameRef = useRef();
  const priceRef = useRef();

  function handleDelete(id) {
    dispatch(deleteClothAction(id));
  }

  function handleEdit(id) {
    if (!isEditing) {
      setIsEditing((val) => !val);
    } else {
      const data = {};
      data.clothName = nameRef.current.value;
      data.clothPrice = priceRef.current.value;
      dispatch(updateClothAction({ data, id }));
      setIsEditing((val) => !val);
    }
  }
  return (
    <div className="text-center flex flex-col items-center gap-4 bg-orange-300 rounded-lg p-4">
      {!isEditing && <h2 className="text-xl">{name}</h2>}
      {isEditing && (
        <p>
          Cloth Name:{" "}
          <input
            ref={nameRef}
            defaultValue={name}
            type="text"
            className="text-lg text-center"
          />
        </p>
      )}
      {!isEditing && <p>Price: ${price}</p>}
      {isEditing && (
        <p>
          Cloth Price:{" "}
          <input
            ref={priceRef}
            defaultValue={price}
            type="number"
            className="text-lg text-center"
          />
        </p>
      )}
      {!isAdmin && (
        <div className="flex justify-center gap-4 w-1/3 mt-2">
          <button
            onClick={() => {
              handleDelete(id);
            }}
            className="p-2 bg-purple-800 text-white"
          >
            Add to Cart
          </button>
        </div>
      )}
      {isAdmin && (
        <div className="flex justify-center gap-4 w-1/3 mt-2">
          <button
            onClick={() => {
              handleEdit(id);
            }}
            className="p-2 bg-yellow-900 text-white w-1/2"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
          <button
            onClick={() => {
              handleDelete(id);
            }}
            className="p-2 bg-purple-800 text-white w-1/2"
          >
            Delete
          </button>
        </div>
      )}

      {/* <img src={imageURL} alt="item" /> */}
    </div>
  );
};

export default StoreItem;
