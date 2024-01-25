import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const clampStyle = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  WebkitLineClamp: 4,
};

const cardStyle = {
  maxWidth: 345,
  height: "100%",
  marginLeft: "20px",
  marginTop: "20px",
};

export default function BasicCard({ recipe }) {
  const [isHovered, setHovered] = useState(false);

  const navigate = useNavigate();
  const handleMouseEnter = () => setHovered(true);
  const houseMouseLeave = () => setHovered(false);
  const handleClick = () => {
    navigate(`/recipe/${recipe.id}`);
  }

  return (
    <Card
      raised={isHovered}
      sx={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={houseMouseLeave}
      style={{
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {recipe.cookingTime}
        </Typography>
        <Typography variant="body2" sx={{ ...clampStyle }}>
          {recipe.method}
          <br />
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" variant="contained" onClick={handleClick}>
          Cook This
        </Button>
      </CardActions>
    </Card>
  );
}
