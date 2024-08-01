import React from "react";
import "../../style/bookingTicket.css";
import ListChair from "./ListChair";
import TableSelect from "./TableSelect";
import { useDispatch, useSelector } from "react-redux";
import { confirmSelectedChairs } from "../../data/redux/slices/chairSlice";
const BookingTicket = () => {
  const arrSelectedChairs = useSelector(
    (state) => state.dataChairs.selectedChairs
  );
  const dispatch = useDispatch();
  return (
    <section className="booking-ticket">
      <div className="py-10 booking-ticket-content">
        <h2 className="text-yellow-200 text-center text-5xl font-extrabold uppercase">
          Booking Ticket
        </h2>
        <div className="container mx-auto py-5">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className="theater-screen">
                <h4 className="text-center text-orange-400 font-semibold">
                  Screen
                </h4>
                <div className="h-3 bg-orange-500 ms-10 rounded-sm"></div>
              </div>
              <div className="list-chair grid grid-rows-11 gap-4 mt-8">
                <ListChair />
              </div>
            </div>
            <div className="selected-chair">
              <h3 className="text-center text-4xl capitalize font-semibold text-yellow-300">
                danh sách ghế chọn
              </h3>
              <div className="container mx-auto px-28">
                <div className="note-list">
                  <ul>
                    <li className="flex items-center mb-3">
                      <p className="bg-white h-10 w-10 rounded-sm me-3"></p>Ghế
                      trống
                    </li>
                    <li className="flex items-center mb-3">
                      <p className="bg-orange-400 h-10 w-10 rounded-sm me-3"></p>
                      Ghế đã đặt
                    </li>
                    <li className="flex items-center mb-3">
                      <p className="bg-green-700 h-10 w-10 rounded-sm me-3"></p>
                      Ghế đang chọn
                    </li>
                  </ul>
                </div>
                <div className="confirm-selected">
                  <table className="table-auto border-double border-2">
                    <thead>
                      <tr>
                        <th className="border-double border-2 w-32 py-1 font-bold text-yellow-700">
                          Ghế chọn
                        </th>
                        <th className="border-double border-2 w-32 py-1 font-bold text-yellow-700">
                          Giá tiền
                        </th>
                        <th className="border-double border-2 w-32 py-1 font-bold text-yellow-700">
                          Hủy
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <TableSelect />
                    </tbody>
                  </table>
                  <button
                    className="px-5 py-2 bg-blue-600 rounded-md mt-5 text-white font-semibold"
                    onClick={() =>
                      dispatch(confirmSelectedChairs(arrSelectedChairs))
                    }
                  >
                    Đặt mua
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingTicket;
