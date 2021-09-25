import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  image: {
    width: 300,
    height: 300,
    margin: "5% 0 0 25%",
  },
});

export default function NotFound() {
  const classes = useStyle();
  return (
    <>
      <img
        className={classes.image}
        src="https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/2992887/original/resize:600x642/crop:x0y101w396h297/aspect:1.0/hash:1467381619/1354789926_Nothing_To_Display_Logo.jpg?1467381619"
        alt="nothing to display"
      />
    </>
  );
}
