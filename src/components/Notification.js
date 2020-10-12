import React, { useState } from "react";

function Notification() {
  let [notification, setNotification] = useState("");

  return (
    <React.Fragment>
      <div>
        <p>loggedIn sucessfully</p>
        <p>signout sucessfully</p>
        <p>liked the post</p>
      </div>
    </React.Fragment>
  );
}

export default Notification;
