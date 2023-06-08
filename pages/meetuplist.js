import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Charity event",
    image:
      "https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    address: "Some address 5, 12345 Porto",
    description: "A fundraising event for charity.",
  },
  {
    id: "m2",
    title: "Plant a tree!",
    image:
      "https://images.unsplash.com/photo-1625758476104-f2ed6c81248f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    address: "Some address 9, 6789 Aveiro",
    description: "A tree planting fundraiser.",
  },
  {
    id: "m3",
    title: "Networking event",
    image:
      "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    address: "Some address 5, 12345 Porto",
    description: "Graet opportunity for professionals to meet new people and form relationships!",
  },
  {
    id: "m4",
    title: "Pottery workshop",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    address: "Some address 9, 6789 Porto",
    description: "Pottery workshop for beginners.",
  },
];

const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export function getStaticProps(){
  // fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  }
}


export default HomePage;