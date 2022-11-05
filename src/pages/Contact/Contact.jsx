import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import AOS from "aos";
import Ccomponent from "../../Contact_Component/Ccomponent";
import "./contact.css";
import { ImOffice } from "react-icons/im";
import { MdAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSend } from "react-icons/bi";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup
//   .object()
//   .shape({
//     name: yup.string().required(),
//     email: yup
//       .string()
//       .email()
//       .required(),
//     message: yup
//       .string()
//       .max(20)
//       .min(10)
//       .required()
//   })
//   .required();
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  const mystyle = { fontSize: "50px", color: "white" };
  const mystyle2 = { color: "red" };
  const myArr = [
    {
      title: "Office Address",
      icons: <ImOffice style={mystyle} />,
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, laudantium?"
    },
    {
      title: "Email Address",
      icons: <MdAlternateEmail style={mystyle} />,
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, laudantium?"
    },
    {
      title: "Office Contact",
      icons: <BsFillTelephoneFill style={mystyle} />,
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, laudantium?"
    }
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  //console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div data-aos="zoom-in" className="container-sm ">
      <div className="row containerp">
        <div className="contact col-sm-6">
          <p>Welcome to Apiaries 16</p>
          <h1>CONTACT US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            laudantium illum ex perferendis accusamus voluptatem cum cumque
            praesentium architecto doloremque?
          </p>
          <div className="comp">
            {myArr.map((item, index) => {
              return (
                <Ccomponent
                  title={item.title}
                  text={item.text}
                  icon={item.icons}
                />
              );
            })}
            {/* <Ccomponent
              title={myArr[0].title}
              text={myArr[0].text}
              icon={myArr[0].icons}
            />
            <Ccomponent
              title={myArr[1].title}
              text={myArr[1].text}
              icon={myArr[1].icons}
            />
            <Ccomponent
              title={myArr[2].title}
              text={myArr[2].text}
              icon={myArr[2].icons}
            /> */}
          </div>
        </div>
        <div className="col-sm-1"></div>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="send col-sm-5"
        >
          <h2>Give us some buzzz..</h2>
          <input
            placeholder="Name..."
            type="text"
            name="text"
            id="text"
            {...register("name", {
              required: "You gatta fill out this field"
            })}
          />
          {errors.name && <small style={mystyle2}>{errors.name.message}</small>}
          <input
            placeholder="Email..."
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: true
            })}
          />
          {errors.email && <small style={mystyle2}>Email is required</small>}
          <input
            placeholder="Subject..."
            type="text"
            name="subject"
            id="message"
            {...register("subject", {
              required: true
            })}
          />
          {errors.subject && (
            <small style={mystyle2}>You need to give a Subject</small>
          )}
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="13"
            placeholder="Message..."
            {...register("message", {
              required: true
            })}
          ></textarea>
          {errors.message && (
            <small style={mystyle2}>What do you have to say</small>
          )}
          <Button variant="warning" className="button btnsend" type="submit">
            <BiSend />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
