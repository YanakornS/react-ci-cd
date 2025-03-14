import React, { useContext, useRef } from "react";
import logo from "/Logo/LogoDormdeals.png";
import universityLogo from "/Logo/university.png"; 
import UserService from "../../services/user.service";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Modal = ({ name }) => {
    const { signUpWithGoogle } = useContext(AuthContext);
    const modalRef = useRef(null); // ใช้ useRef เพื่ออ้างถึง modal

    const googleSignUp = () => {
        signUpWithGoogle().then(async (result) => {
          const user = result.user;
          console.log(user);
          await UserService.addUser(user.email);
          Swal.fire({
            icon: "success",
            title: "Google Sign Up Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });

          // ปิด Modal โดยใช้ useRef
          if (modalRef.current) {
            modalRef.current.close();
          }
        });
      };
      
  return (
    <dialog ref={modalRef} id={name} className="modal">
      <div className="modal-box flex flex-col items-center text-center p-6 w-full max-w-[600px] h-auto sm:h-[450px]">
        <img src={logo} alt="DormDeals Logo" className="h-10 mb-4" />
        <div className="p-4 rounded-lg w-full flex flex-col items-center">
          <div className="w-full flex items-center justify-center gap-2 text-black px-6 py-3 rounded-lg mt-8 sm:mt-12">
            <button className="btn btn-ghost h-20" onClick={googleSignUp}>
              <img src={universityLogo} alt="University Logo" className="h-16 sm:h-20 ml-1.5" />
              <span className="mr-2.5 text-base sm:text-lg font-medium">ลงชื่อเข้าใช้ด้วยอีเมลมหาวิทยาลัย</span>
            </button>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-gray-500 mt-12 sm:mt-24 px-4 text-center">
          ข้อตกลงและเงื่อนไขการยอมรับ
          <a href="#" className="text-blue-500 underline"> ข้อกำหนดในการให้บริการ </a>
          ของ DormDeals และรับทราบว่า
          <a href="#" className="text-blue-500 underline"> นโยบายความเป็นส่วนตัว </a>
          ของ DormDeals มีผลบังคับใช้กับคุณ
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => modalRef.current?.close()} className="btn">ปิด</button>
      </form>
    </dialog>
  );
};

export default Modal;
