import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedChairs } from "../../data/redux/slices/chairSlice";
const ListChair = () => {
  const isDisabled = true;
  const arrListChair = useSelector((state) => state.dataChairs.arrChairs);
  const dispatch = useDispatch();

  return (
    <>
      {arrListChair.map((item, index) => {
        return (
          <div key={index} className="flex items-center">
            <h3 className="flex-none w-10 text-yellow-400 font-se">
              {item.hang}
            </h3>
            <div className="flex-auto grid grid-cols-12 gap-2">
              {item.danhSachGhe.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={
                      item.soGhe >= 1
                        ? "bg-transparent text-yellow-400"
                        : item.daDat
                        ? "bg-orange-400 rounded-sm py-1"
                        : "bg-white rounded-sm py-1"
                    }
                    onClick={() => dispatch(selectedChairs(item.soGhe))}
                    disabled={
                      item.soGhe >= 1 || item.daDat ? isDisabled : !isDisabled
                    }
                    id={item.soGhe}
                  >
                    {item.soGhe}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListChair;
