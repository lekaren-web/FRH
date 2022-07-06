import React, { useEffect, useState } from "react";
// import div from "reactjs-div";
import axios from "axios";
import "./App.css";
import { FaBars, FaPlus, FaCross, FaRegTimesCircle } from "react-icons/fa";

function Home() {
  const [events, setEvents] = useState([]);
  const [user, setuser] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("1970-01-01Z");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(
    ""
  );
  let NavOpen = false;
  const [newSize, setNewSize] = useState(0);
  let slideIndex = 0;
  const [formOpen, setFormOpen] = useState(false);

  const [profileData, setProfileData] = useState(null);
  const [eventData, setEventData] = useState(null);

  function getData() {
    // axios({
    //   method: "GET",
    //   url: "/profile",
    // })
    // or
    fetch("/profile").then((response) => {
      if (response.status == 200){
        return response.json()
      }}).then(data => setProfileData(data))
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }



  function fetchData() {
    fetch("/events").then((response) => {
      if (response.status == 200){
        return response.json()
      }}).then(data => setEventData(data.events))
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  // Fetch on events on load
  useEffect(() => {
    fetchData();
    getData();
  }, []);

  // useEffect(() => {
  // Writing to the database
  

  // },[])
  // Read from database  !
  // const events = await DataStore.query(Events);
  // console.log("Events retrieved successfully!", JSON.stringify(events, null, 2));

  return (
    <div className="Home" style={{ zIndex: 0, marginLeft: { newSize } }}>
      {/* Slideshow container  */}
      <div className="wave-container" id="carousel">
        <h1
          id="header"
          style={{
            position: "absolute",
            marginTop: 200,
            marginLeft: 140,
            fontSize: 50,
            color: "#172a3a",
          }}
        >
          Upcoming Events
        </h1>
        {/* Full-width images with number and caption text */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#D6E4EA"
            fillOpacity="1"
            d="M0,256L60,213.3C120,171,240,85,360,90.7C480,96,600,192,720,192C840,192,960,96,1080,53.3C1200,11,1320,21,1380,26.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      {/* <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
              <p>PFP: {profileData.image}</p>
            </div>
        } */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginLeft: 150,
        }}
        id="upcoming"
      >
        <h1
          style={{
            textAlign: "left",
            color: "#344966",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* <button
              id="eventbutton"
              style={{
                backgroundColor: "white",
                width: 100,
                height: 40,
                marginRight: 100,
                color: "black",
                border: "0",
              }}
              onClick={() => {
                if (!formOpen) {
                  setFormOpen(true);
                  document.querySelector("#form").style.display = "flex";
                  document.querySelector("#Home").style.opacity = 0.2;
                  document.querySelector("#header").style.opacity = 0.2;
                  document.querySelector("#eventcancelbutton").display = "block";
                  document.querySelector("#eventbutton").display = "none"
                } else {
                  setFormOpen(false);
                  document.querySelector("#form").style.display = "none";
                  document.querySelector("#Home").style.opacity = 1;
                  document.querySelector("#header").style.opacity = 1;
                  document.querySelector("#eventcancelbutton").display = "none";
                  document.querySelector("#eventbutton").display = "block"
              }}}
            >
            Add Event<FaPlus style={{ height: "10px", color: "black", marginLeft: 10 }} />
            </button> */}

          <div
            id="form"
            style={{
              width: "50%",
              height: 500,
              backgroundColor: "white",
              position: "absolute",
              boxShadow: "1px 1px 2px 1px grey",
              padding: 20,
              display: "none",
              flexDirection: "column",
              top: 150,
              right: 260,
              zIndex: 10,
              borderRadius: 20,
            }}
          >
            <h3>Add New Event</h3>
            <div style={{ marginLeft: 10 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: 19 }}>
                  <p>Title</p>
                </label>
                <input
                  style={{ width: "70%", height: 23 }}
                  type="text"
                  placeholder="Lorem ipsum dolor sit amet"
                  onChange={(val) => {
                    setTitle(val.target.value);
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: 19 }}>
                  <p>Date</p>
                </label>
                <input
                  style={{ width: "70%", height: 23 }}
                  type="text"
                  placeholder="Lorem ipsum dolor sit amet"
                  onChange={() => {
                    setDate("1970-01-01Z");
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: 19 }}>
                  <p>Description</p>
                </label>
                <input
                  style={{ width: "70%", height: 23 }}
                  type="text"
                  placeholder="Lorem ipsum dolor sit amet"
                  onChange={(val) => {
                    setDescription(val.target.value);
                  }}
                />
              </div>
              {/* <div style={{display:'flex', flexDirection:'column'}}>
              <label style={{fontSize: 19}}><p>Upload Image</p></label>
              <input style={{width: '70%', height: 23}} type="file"/>
            </div> */}
              <button
                onClick={() => {
                  fetchData();
                  setFormOpen(false);
                  document.querySelector("#form").style.display = "none";
                  document.querySelector("#Home").style.display = "block";
                  document.querySelector("#eventbutton").innerHTML =
                    "Add Event";
                }}
              >
                Add Event
              </button>
              <button
                id="eventcancelbutton"
                style={{
                  marginLeft: 10,
                  position: "absolute",
                  right: 0,
                  top: 0,
                  backgroundColor: "transparent",
                  border: 0,
                }}
                onClick={() => {
                  if (!formOpen) {
                    setFormOpen(true);
                    document.querySelector("#form").style.display = "flex";
                    document.querySelector("#Home").style.opacity = 0.2;
                    document.querySelector("#header").style.opacity = 0.2;
                    document.querySelector("#eventcancelbutton").display =
                      "block";
                  } else {
                    setFormOpen(false);
                    document.querySelector("#form").style.display = "none";
                    document.querySelector("#Home").style.opacity = 1;
                    document.querySelector("#header").style.opacity = 1;
                    document.querySelector("#eventcancelbutton").display =
                      "none";
                    document.querySelector("#eventbutton").display = "block";
                  }
                }}
              >
                <FaRegTimesCircle
                  style={{
                    height: "30px",
                    width: "30px",
                    color: "navy",
                    marginTop: 10,
                    marginRight: 10,
                  }}
                />
              </button>
            </div>
          </div>
        </h1>
      </div>
      <div
        id="Home"
        style={{ display: "flex", flexDirection: "column", padding: 30 }}
        className="Home-header"
      >
        {/* <button onClick={fetchData}>Add Event</button> */}
        {/* <div id="filters">
          filters
        </div> */}

        {eventData && (
          <div
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
              paddingTop: "40%",
              padding: 10,
              marginLeft: 70,
            }}
          >
            {eventData.map((event,index) => (
              <div
                key={index}
                className="Event-card"
                style={{
                  height: "270px",
                  backgroundColor: "white",
                  margin: 20,
                  width: "250px",
                  borderRadius: 10,
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "1px 1px 2px 1px rgba(0, 0, 255, .1)",
                  overflow: "clip",
                }}
                key={event.id}
              >
                <img
                  src={event.image}
                  style={{ width: "100%", borderRadius: "10, 10, 0, 0" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 8,
                    width: "100%",
                  }}
                >
                  <p
                    style={{
                      color: "black",
                      textAlign: "left",
                      marginBottom: -10,
                      color: "grey",
                    }}
                  >
                    {event.title}
                  </p>

                  <p
                    style={{
                      color: "black",
                      textAlign: "left",
                      color: "grey",
                      fontSize: 12,
                    }}
                  >
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
