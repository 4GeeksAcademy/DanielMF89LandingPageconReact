import React from "react";

const Card = () => {
    return (
        <div className="card col-3">
            <img src="http://placehold.it/500x325.jpg" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo necessitatibus accusamus. Rerum quam autem optio ut, tenetur consectetur ad temporibus sequi, itaque vero impedit suscipit, cumque debitis facere saepe?</p>
                <div className="container d-flex border justify-content-center">
                    <button className="btn btn-primary btn-lg m-1 " type="button">Find out More!</button></div>
            </div>
        </div>

    )

};

export default Card;

