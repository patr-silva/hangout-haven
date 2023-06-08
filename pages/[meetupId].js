import MeetupDetail from "../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      title='A first Meetup'
      image='https://cdn.thecrazytourist.com/wp-content/uploads/2022/06/ccimage-shutterstock_1706807566.jpg'
      address='Some address 5, 12345 Porto'
      description='The first meetup'
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: "m1",
        title: "A first Meetup",
        image:
          "https://cdn.thecrazytourist.com/wp-content/uploads/2022/06/ccimage-shutterstock_1706807566.jpg",
        address: "Some address 5, 12345 Porto",
        description: "This is a first meetup!",
      },
    },
  };
}

export default MeetupDetails;
