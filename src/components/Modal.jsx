/* eslint-disable react/prop-types */
import { usePoke } from "../hooks/usePoke";

const Modal = ({ children }) => {
  const { open, setOpen } = usePoke();
  return (
    <>
      {/* Fondo oscuro detrás del modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed xl:hidden inset-0 bg-black opacity-50 z-20 cursor-pointer"
        ></div>
      )}

      {/* Contenedor del modal */}
      <div
        className={` xl:hidden -bottom-5  right-2 top-30 left-2 sm:right-20 sm:left-20 fixed z-20 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-1000 ease-in-out`}
      >
        {/* Contenido del modal */}
        {children}
      </div>
    </>
  );
};

export default Modal;
