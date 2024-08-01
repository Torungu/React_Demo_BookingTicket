import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSelectedChair } from "../../data/redux/slices/chairSlice";
const TableSelect = () => {
  const arrSelectedChairs = useSelector(
    (state) => state.dataChairs.selectedChairs
  );
  const dispatch = useDispatch();

  return (
    <>
      {arrSelectedChairs.slice(1).map((item, index) => {
        return (
          <tr className="text-center text-green-700 text-xl" key={index}>
            <td>{item.soGheChon}</td>
            <td>{item.price}</td>
            <td>
              <button
                className="text-red-700 font-bold"
                onClick={() => dispatch(deleteSelectedChair(item.soGheChon))}
              >
                X
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableSelect;
