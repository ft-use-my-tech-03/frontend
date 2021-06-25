import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTech} from "../store";
import Tech from "./Tech";

function Dashboard(props) {
    console.log(props.currentUser.auth_code)

  useEffect(() => {
    props.getTech();
  }, []);

  return (
    <div className="sbox">
      <h2>Available Rentals</h2>
      { props.currentUser.auth_code && <Link to="/techform">Add Equipment</Link>}
      <div>
        {props.loading && <h2>Loading Equipment...</h2>}

        {props.tech.map &&
          props.tech.map((item) => {
            return <Tech key={item.tech_id} item={item} />;
          })}

        {props.errors && <h2>{props.errors}</h2>}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tech: state.tech,
    loading: state.loading,
    errors: state.errors,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, { getTech })(Dashboard);