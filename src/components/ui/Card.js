import classes from "./Card.module.css";
// card component we be used to wrap other components

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
