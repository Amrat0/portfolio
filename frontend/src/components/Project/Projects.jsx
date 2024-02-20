import "./Project.css";
import { AiFillDelete } from "react-icons/ai";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteProject, getUser } from "../../actions/user";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  techStack,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <a href={url} className="projectCard">
        <div>
          <img src={projectImage} alt="projectImage" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Skills:- {techStack}</Typography>
          <hr
            style={{ width: "200px", height: "3px", marginLeft: "15px" }}
          ></hr>
        </div>
      </a>
      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          {" "}
          <AiFillDelete />{" "}
        </Button>
      )}
    </>
  );
};

const Projects = ({ projects }) => {
  return (
    <>
      <Header />
      <div className="projects">
        <Typography variant="h3">
          <p>P</p>
          <p>r</p>
          <p>o</p>
          <p>j</p>
          <p>e</p>
          <p>c</p>
          <p>t</p>
        </Typography>
        <div>
          <div className="projectWrapper">
            {projects.map((item) => (
              <ProjectCard
                id={item._id}
                key={item._id}
                url={item.url}
                projectImage={item.image.url}
                projectTitle={item.title}
                description={item.description}
                techStack={item.techStack}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Projects;
