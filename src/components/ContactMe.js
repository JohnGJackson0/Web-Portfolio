import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const TEMPLATE_ID = "1DDS";
  const SERVICE_ID = "service_sgakdbe";
  const USER_ID = "user_zaIZq3uSRKKLG3FSI77WC";

  const onSubmit = (data, r) => {
    sendEmail(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        content: data.content,
      },
      USER_ID
    );
    r.target.reset();
  };

  const sendEmail = (SERVICE_ID, TEMPLATE_ID, variables, USER_ID) => {
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, variables, USER_ID)
      .then(() => {
        setSuccessMessage("Sent successfully. I will get back to you soon.");
      })
      .catch((e) => {
        setSuccessMessage(
          "Something went wrong. Please contact JohnGJackson0@gmail.com"
        );
      });
  };

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the form and describe your project needs and I will
          contact you soon.
        </p>
        <span className="success-message">{successMessage}</span>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message: "Please enter a name under 20 characters.",
                    },
                  })}
                />
                <div className="line"></div>
                <span className="error-message">
                  {errors.name && (
                    <span>
                      {" "}
                      <br /> {errors.name.message} <br />
                    </span>
                  )}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Please add your phone number",
                  })}
                />
                <div className="line"></div>
                <span className="error-message">
                  {errors.phone && (
                    <span>
                      <br /> {errors.phone.message} <br />
                    </span>
                  )}
                </span>
                <input
                  className="form-control"
                  placeholder="Email"
                  {...register("email", {
                    required: "Please add your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid Email",
                    },
                  })}
                />
                <div className="line"></div>
                <span className="error-message">
                  {errors.email && (
                    <span>
                      <br /> {errors.email.message} <br />
                    </span>
                  )}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  {...register("subject", {
                    required: "Please add a subject",
                  })}
                />
                <div className="line"></div>
                <span className="error-message">
                  {errors.subject && (
                    <span>
                      <br /> {errors.subject.message} <br />
                    </span>
                  )}
                </span>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="text-center">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Please describe what you are looking for and basic requirements of project"
                    {...register("content", {
                      required: "Please add content.",
                      minLength: {
                        value: 10,
                        message: "Please provide some more detail.",
                      },
                    })}
                  ></textarea>
                  <div className="line"></div>
                  <span className="error-message">
                    {errors.content && (
                      <span>
                        <br /> {errors.content.message}
                        <br />
                      </span>
                    )}
                  </span>
                </div>

                <button className="btn-main-offer contact-btn" type="submit">
                  Contact Me
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
