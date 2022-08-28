import React from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "0px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 2,
  },
};

function Subscribe({ setIsOpen, isOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    fetch(
      `https://send.pageclip.co/${process.env.REACT_APP_PAGECLIP_TOKEN}/Subscribe`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      },
    )
      .then(() => {
        toast.success("Successful!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsOpen(false);
        reset();
      })
      .catch((error) => {
        toast.error("Something wrong! Please try again !", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsOpen(false);
        reset();
      });
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Modal style={customStyles} isOpen={isOpen} onRequestClose={closeModal}>
        <p>Subscribe to our newsletter!</p>
        <form
          className="pageclip-form"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row">
            <div className="col-12">
              <input
                {...register("email", { required: true })}
                className="form-control rounded-0 py-2"
                type="email"
                placeholder="Your Email"
                name="email"
              />
              <div className="text-danger mt-2">
                {errors.email && "Email is required"}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-success rounded-0 py-2 mt-2 me-3"
              type="submit"
              style={{
                backgroundColor: "#10c9c3",
                borderColor: "#10c9c3",
              }}
            >
              Subscribe now
            </button>
            <button
              style={{
                backgroundColor: "rgb(255, 36, 66)",
                borderColor: "rgb(255, 36, 66)",
              }}
              className="btn btn-primary rounded-0 py-2 mt-2"
              type="button"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default Subscribe;
