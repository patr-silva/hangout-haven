import Link from "next/link";
import Image from "next/image";
import classes from "./Home.module.css";


const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2>Welcome!</h2>
        <p>
         Check out for new events around you!
        </p>
        <Link href={"/meetuplist"}>
          <a className={classes.btn}>Check the Meetups</a>
        </Link>
      </div>
      <div className={classes.image}>
      <Image src="/group.jpg" alt="group of people" width="600px" height="400px" />
      </div>
    </div>
  );
};

export default Home;
