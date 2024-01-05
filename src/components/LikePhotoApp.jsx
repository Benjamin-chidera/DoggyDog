import React, { useEffect, useState } from "react";
import { Title } from "./Title";
import { FaFaceSmile, FaRegHeart, FaHeart } from "react-icons/fa6";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";

export const LikePhotoApp = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  console.log(show);

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
      setShow(true);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [like]);

  return (
    <div className="flex justify-center items-center  flex-col gap-5 pb-40">
      <Title text={"Like My Photo"} />
      <Title subTitle={`Likes: ${count}`} />

      <div className=" w-[250px] h-[430px] text-center bg-gray-700 rounded-lg shadow shadow-gray-600">
        <div className="text-white flex justify-center items-center gap-5 my-3 text-3xl font-medium">
          <FaFaceSmile /> DoggyDog
        </div>

        <div className="relative">
          <img
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className="h-[300px] w-full object-cover relative"
            onDoubleClick={toggleLike}
          />

          {show && (
            <div className=" absolute top-[50%] right-[40%] fade-in-tl">
              <FaHeart size={40} color="red" onAnimationEnd={"fade-in-tl"}/>
            </div>
          )}
        </div>

        <div className="mt-3 flex justify-between items-center mx-3">
          <BiSolidMessageRoundedDetail size={35} color="white" />
          {like ? (
            <FaHeart onClick={toggleLike} size={35} color="red" />
          ) : (
            <FaRegHeart onClick={toggleLike} size={35} color="white" />
          )}
        </div>
      </div>
    </div>
  );
};
