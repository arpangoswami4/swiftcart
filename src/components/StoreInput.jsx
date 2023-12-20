import { useState } from "react";
import Input from "./Input";
import { createClothAction } from "../store/thunkActions/storeThunk";
import { useDispatch } from "react-redux";

const StoreInput = () => {
  const [storeData, setStoreData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    dispatch(createClothAction(storeData)).finally(setIsLoading(false));
  }

  function onChangeInput(identifier, value) {
    setStoreData((sd) => {
      return { ...sd, [identifier]: value };
    });
  }
  return (
    <>
      {isLoading && <p>Sending Data...</p>}
      <div className="flex flex-col items-center text-center gap-12 p-4 bg-cyan-100 w-screen">
        <h1 className="text-2xl">Admin Action</h1>
        <div className="flex flex-col gap-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <Input
              required={true}
              type="text"
              name="clothName"
              label="Cloth Name"
              onChange={(event) => {
                onChangeInput("clothName", event.target.value);
              }}
            />
            <Input
              required={true}
              type="number"
              name="clothPrice"
              label="Price"
              onChange={(event) => {
                onChangeInput("clothPrice", event.target.value);
              }}
            />
            <Input
              required={true}
              type="url"
              name="imageURL"
              label="Image URL"
              onChange={(event) => {
                onChangeInput("imageURL", event.target.value);
              }}
            />
            <button className="mt-4 p-2 mx-16 rounded-lg bg-red-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default StoreInput;
