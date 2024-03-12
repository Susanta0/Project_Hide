import { useState, useEffect} from "react";
import { Data } from "../../db";
import { ShimerUI } from "./ShimerUI";
import { useDisclosure, useToast } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
export const FileUpload = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageScore, setImageScore] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    const score =
      "We verified Your Code. You are the Winner, now you can buy any of those gift";
    setImageScore(score);
    setImagePreview(null);
  };

  const [basketItems, setBasketItems] = useState([]);
  const addTocart = (items) => {
    const updatedBasketItems = [...basketItems, items];
    setBasketItems(updatedBasketItems);
    localStorage.setItem("basket", JSON.stringify(updatedBasketItems));
  };

  const toast = useToast();
  const AddProduct = (ele) => {
    addTocart(ele);
    toast({
      title: "Added successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleCheckOut = () => {
    onOpen();
  };

  const handleRemove = (ind) => {
    const updatedBasket = [...basketItems];
    updatedBasket.splice(ind, 1);
    setBasketItems(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const handleOrder = () => {
      onClose();
      toast({
        title: "Ordered Successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    
  };

  useEffect(() => {
    const basketItems = JSON.parse(localStorage.getItem("basket")) || [];
    setBasketItems(basketItems);
  }, []);

  return (
    <>
      <div className="mt-10">
        <h2 className="text-center text-xl font-bold">
          Upload Your Screen Short or File
        </h2>
        <div className=" bg-emerald-200 mx-72 mt-2 text-center">
          <div className=" w-[100%] ">
            <label htmlFor="image">Upload Image:</label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              accept="image/*"
            />
            <div className="mt-2 ">
              {imagePreview && (
                <img
                  className="m-auto h-[15em] "
                  src={imagePreview}
                  alt="Selected Image"
                  style={{ maxWidth: "100%", marginTop: "10px" }}
                />
              )}
            </div>
          </div>
        </div>
        <div className=" flex justify-center mt-4">
          {imagePreview ? (
            <button
              className="border px-2.5 py-1 rounded-md text-sm font-bold bg-blue-500 hover:bg-blue-700 text-white"
              onClick={handleUpload}
            >
              Upload
            </button>
          ) : null}
        </div>
        {imageScore && (
          <>
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold text-yellow-800">
                {imageScore}
              </h3>
            </div>
            {Data.length === 0 ? (
              <ShimerUI />
            ) : (
              <div className=" mt-10 grid gap-4 grid-cols-4 py-10 px-20 bg-white">
                {Data.map((ele) => (
                  <div
                    key={ele.id}
                    className="border w-[20em] p-2 rounded-lg drop-shadow-md shadow-lg"
                  >
                    <div className="">
                      <img className="productImage" src={ele.image} alt="" />
                    </div>
                    <div className="flex gap-1 mt-2">
                      <strong>Title:</strong>
                      <p className="font-semibold">{ele.title}</p>
                    </div>
                    <div className="flex gap-1 mt-2">
                      <strong>Price:</strong>
                      <p className="font-semibold">{ele.price}</p>
                    </div>

                    <div className="flex justify-between mt-2">
                      <button
                        onClick={() => AddProduct(ele)}
                        className="border text-sm w-[9.5em] h-[2.5em] rounded-md bg-[#FF9F00] text-white font-semibold"
                      >
                        🛒 ADD TO CART
                      </button>
                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Product Details</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody className=" flex overflow-y-auto border">
                            <div className="flex gap-4 m-auto">
                              {basketItems.length === 0 ? (
                                <h2 className="text-center font-bold">
                                  Please Add your product what you want 💻 or 🧢
                                </h2>
                              ) : (
                                basketItems.map((basketItem, ind) => (
                                  <div
                                    key={basketItem.id}
                                    className="w-80 bg-white shadow rounded border "
                                  >
                                    <div
                                      className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center rounded"
                                      style={{
                                        backgroundImage: `url(${basketItem.image})`,
                                      }}
                                    >
                                      <div>
                                        <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                                          available
                                        </span>
                                      </div>
                                    </div>
                                    <div className="p-4 flex flex-col items-center">
                                      <h1 className="text-gray-800 text-center mt-1 font-semibold">
                                        Item Name:
                                        <span className="text-xs">
                                          {basketItem.title}
                                        </span>
                                      </h1>
                                      <p className="text-center text-gray-800 mt-1 font-semibold">
                                        Price:
                                        <span className="text-sm">
                                          {basketItem.price}
                                        </span>
                                      </p>
                                      <div className="flex justify-between w-full mt-4">
                                        <button
                                          
                                          onClick={()=> handleOrder()}
                                          className="border text-sm h-[2em] w-[7em] rounded bg-green-600 text-white hover:bg-yellow-400 font-bold"
                                        >
                                          Order
                                        </button>
                                        
                                        
                                        <button
                                          onClick={() => handleRemove(ind)}
                                          className="border text-sm h-[2em] w-[7em] rounded bg-yellow-300 hover:bg-red-600 hover:text-white font-bold"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              )}
                            </div>
                          </ModalBody>
                        </ModalContent>
                      </Modal>
                      <button
                        onClick={handleCheckOut}
                        className="border text-sm w-[8.5em] h-[2.5em] rounded-md bg-[#FF9F00] text-white font-semibold"
                      >
                        🗲 CHECK OUT
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
          </>
        )}
      </div>
      
    </>
  );
};
