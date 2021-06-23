import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTech } from "../store";
import Tech from "./Tech";

function Dashboard(props) {
  console.log(props.currentUser.auth_code)

  useEffect(() => {
    props.getClasses();
  }, []);

  return (
    <div>
      <h2>Available Rentals</h2>
      { props.currentUser.auth_code && <Link to="/techform">Add Electronics</Link>}
      <div>
        {props.loading && <h2>Loading Electronics...</h2>}

        {props.classes.map &&
          props.classes.map((item) => {
            return <Tech key={item.tech_id} item={item} />;
          })}

        {props.errors && <h2>{props.errors}</h2>}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, { getTech })(Dashboard);