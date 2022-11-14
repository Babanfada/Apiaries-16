import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { dataContext } from "./App";
import Spinner from "react-bootstrap/Spinner";
import Aos from "aos";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
//import Carousel from "./ReusedComponent/Carousel";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const MyStory = () => {
    useEffect(() => {
      Aos.init({ duration: 2000, once: true });
    }, []);
  const { data0 } = useContext(dataContext);
  const { id } = useParams();
  const loneData = data0.find(data => {
    return data.id == id;
  });

  if (!data0) {
    return (
      <div
        data-aos="zoom-out-right"
        style={{ display: "grid", placeContent: "center" }}
      >
        <Spinner animation="border" variant="success" />
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          //   width:"50vw",
          height: "70vh",
          margin: "10vh 0"
        }}
      >
        <Card sx={{ maxWidth: "50vw" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="40vh"
              image={loneData.image}
              alt="green iguana"
              style={{
                height: "60vh"
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {loneData.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {loneData.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button size="small" color="warning">
              {loneData.id}
            </Button>

            <Link to="/Story">
              <Button size="small" color="success">
                <MdOutlineKeyboardBackspace />
              </Button>
            </Link>
          </CardActions>
        </Card>
        {/* <div style={{ mariginTop: "5vh" }}><Carousel  /></div> */}
      </div>
    );
  }
};

export default MyStory;
