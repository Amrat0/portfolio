import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { MdTimeline } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import "./AdminPanel.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateUser } from "../../actions/user";
import { useAlert } from "react-alert";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
const AdminPanel = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { message: loginMessage } = useSelector((state) => state.login);

  const { message, error, loading } = useSelector((state) => state.update);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [skills, setSkills] = useState({});
  const [about, setAbout] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    // e.prevent islya usekarta ha ka yah form pa laga hova ha
    dispatch(updateUser(name, email, password, skills, about));
    console.log(name, email, password, skills, about);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  const handleAboutImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAbout({ ...about, avator: Reader.result });
      }
    };
  };

  const handleImages = (e, val) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        if (val === 1) {
          setSkills({ ...skills, image1: Reader.result });
        }
        if (val === 2) {
          setSkills({ ...skills, image2: Reader.result });
        }
        if (val === 3) {
          setSkills({ ...skills, image3: Reader.result });
        }
        if (val === 4) {
          setSkills({ ...skills, image4: Reader.result });
        }
        if (val === 5) {
          setSkills({ ...skills, image5: Reader.result });
        }
        if (val === 6) {
          setSkills({ ...skills, image6: Reader.result });
        }
      }
    };
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
    if (loginMessage) {
      alert.success(loginMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alert, error, message, dispatch, loginMessage]);

  return (
    <>
      <Header />

      <div className="adminPanel">
        <div className="adminPanelContainer">
          <Typography variant="h4">
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </Typography>

          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="adminPanelInputs"
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="adminPanelInputs"
            />
            <input
              type="password"
              value={password}
              placeholder="pasasword"
              onChange={(e) => setPassword(e.target.value)}
              className="adminPanelInputs"
            />

            <div className="adminPanelSkill">
              <div>
                <Typography>Skill 1</Typography>
                <input
                  className="adminPanelFileUpload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImages(e, 1)}
                />
              </div>
              <div>
                <Typography>Skill 2</Typography>
                <input
                  className="adminPanelFileUpload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImages(e, 2)}
                />
              </div>
              <div>
                <Typography>Skill 3</Typography>
                <input
                  className="adminPanelFileUpload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImages(e, 3)}
                />
              </div>
              <div>
                <Typography>Skill 4</Typography>
                <input
                  className="adminPanelFileUpload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImages(e, 4)}
                />
              </div>
              <div>
                <Typography>Skill 5</Typography>
                <input
                  className="adminPanelFileUpload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImages(e, 5)}
                />
              </div>
              <div>
                <Typography>Skill 6</Typography>
                <input
                  className="adminPanelFileUpload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImages(e, 6)}
                />
              </div>

              <div className="adminPanelAbout">
                <fieldset>
                  <legend>About</legend>
                  <input
                    type="text"
                    placeholder="Name"
                    value={about.name}
                    className="adminPanelInputs"
                    onChange={(e) =>
                      setAbout({ ...about, name: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Title"
                    value={about.title}
                    className="adminPanelInputs"
                    onChange={(e) =>
                      setAbout({ ...about, title: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Subtitle"
                    value={about.subtitle}
                    className="adminPanelInputs"
                    onChange={(e) =>
                      setAbout({ ...about, subtitle: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={about.description}
                    className="adminPanelInputs"
                    onChange={(e) =>
                      setAbout({ ...about, description: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Quote"
                    value={about.quote}
                    className="adminPanelInputs"
                    onChange={(e) =>
                      setAbout({ ...about, quote: e.target.value })
                    }
                  />

                  <input
                    type="file"
                    className="adminPanelFileUpload"
                    onChange={handleAboutImage}
                    placeholder="Choose Avator"
                    accept="image/*"
                  />
                </fieldset>
              </div>
            </div>
            <Link to="/admin/timeline">
              TIMELINE
              <MdTimeline />
            </Link>
            <Link to="/admin/youtube">
              YOUTUBE
              <FaYoutube />
            </Link>
            <Link to="/admin/project">
              PROJECTS
              <AiOutlineProject />
            </Link>
            <Button type="submit" variant="contained" disabled={loading}>
              Update
            </Button>
          </form>
          <Button
            onClick={logoutHandler}
            variant="contained"
            color="error"
            style={{ display: "flex", margin: "4vmax auto" }}
          >
            LOGOUT
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPanel;
