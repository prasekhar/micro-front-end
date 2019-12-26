import React, { useEffect, useState } from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store as Notifier } from "react-notifications-component";

const Notification = ({}) => {
  const [notification, setNotification] = useState("");
  const [title, setTitle] = useState("Success");
  const [message, setMessage] = useState('Contact Added Successfully');
  const [type, setType] = useState('success');

  useEffect(() => {
    notification !== "" &&
      Notifier.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
          showIcon: true
        },
        dismissable: {
          click: true,
          touch: true
        },
        width: 256
      });
  }, [notification]);

  window.addEventListener("contactAdded", (e) => {
    setNotification(new Date().getTime());
  });

  window.addEventListener("showAlert", (e)=> {
     const {type, title, message } = e.detail;
      setTitle(title);
      setMessage(message);
      setType(type);
      setNotification(new Date().getTime());
  })

  return <ReactNotification />;
};

export default Notification;
