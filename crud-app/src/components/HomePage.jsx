import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  image: {
    width: "100%",
    height: 500,
    // margin: "5% 0 0 25%",
  },
});

export default function HomePage() {
  const classes = useStyle();
  return (
    <img
      className={classes.image}
      src="https://c4.wallpaperflare.com/wallpaper/19/672/11/simple-background-ufo-typography-minimalism-wallpaper-preview.jpg"
      alt="saw"
    />
  );
}
