import React from "react";
import { ContactWrapper } from "./Contact.styles";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

function Contact({ content }) {
  const data = content.filter((item) => item.fields.type === "setting")[0]
    .fields;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    fetch(
      `https://send.pageclip.co/${process.env.REACT_APP_PAGECLIP_TOKEN}/Feedback`,
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
        reset();
      });
  };

  return (
    <ContactWrapper className="pb-5">
      <Helmet>
        <title>Contact</title>
      </Helmet>
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
      <div className="map">
        <iframe
          style={{
            filter: "grayscale(90%)",
          }}
          title="Baku American Center"
          width="100%"
          height="570"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=baku%20american%20center+(Baku%20American%20Center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="container">
        <div className="row justify-content-between pt-5">
          <div className="col-lg-5">
            <div className="contact-info pb-3 pb-lg-0 pt-lg-5">
              <h3>Contact Info:</h3>
              <p>
                To give give beginning divide, cattle. Give moving won't, there
                the abundantly she'd she'd brought air upon. Light hath subdue.
                Life days creature upon first heaven gathering dry.
              </p>
              <ul>
                <li>
                  <span>Address:</span> {data.address}
                </li>
                <li>
                  <span>Phone:</span> {data.phone}
                </li>
                <li>
                  <span>Email:</span> {data.email}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form">
              <form
                className="pageclip-form pt-lg-5"
                method="post"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="row">
                  <div className="col-md-6">
                    <input
                      {...register("name", { required: true })}
                      className="form-control rounded-0 py-2"
                      type="text"
                      placeholder="Your Name"
                      name="name"
                    />
                    <div className="text-danger mt-2">
                      {errors.name && "Name is required"}
                    </div>
                  </div>
                  <div className="col-md-6">
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
                <div className="row mt-2">
                  <div className="col-12">
                    <input
                      {...register("title", { required: true })}
                      className="form-control rounded-0 py-2"
                      type="text"
                      placeholder="Your Title"
                      name="title"
                    />
                    <div className="text-danger mt-2">
                      {errors.title && "Title is required"}
                    </div>
                  </div>
                  <div className="col-12 mt-2">
                    <textarea
                      {...register("comment", { required: true })}
                      className="form-control rounded-0 py-2"
                      placeholder="Your Comment"
                      name="comment"
                      rows={5}
                    />
                    <div className="text-danger mt-2">
                      {errors.comment && "Comment is required"}
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-primary rounded-0 py-2 mt-2"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
