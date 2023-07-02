import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    marginTop: "40px ",
  },
  image: {
    width: "50%",
    height: "auto",
    borderRadius: theme.spacing(1),
    marginLeft: "120px",
  },
  description: {
    marginBottom: theme.spacing(2),
    lineHeight: "1.8",
    textAlign: "justify",
    padding: "25px",
  },
  button: {
    padding: "10px",
    margin: "10px",
  },
}));
