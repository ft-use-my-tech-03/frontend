import React from 'react';
import { Link } from 'react-router-dom';



function Tech(props) {

    const {tech_image, tech_type, location, start_day, tech_id} = props.item;

    return (
        <section>
            { tech_image ? <img src={tech_image} /> : <img src={deadlift} />}
            <h3>Type: {tech_type}</h3>
            <h3>Start Time: {start_day}</h3>
            <Link to={`/class/${tech_id}`}>
                More Info
            </Link>
        </section>
    )
}

export default Tech;