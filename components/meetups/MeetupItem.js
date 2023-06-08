import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";

function MeetupItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
      </div>
      <div className={classes.actions}>
        <button onClick={showDetailsHandler}>Show Details</button>
      </div>
    </div>
  );
}

export default MeetupItem;
