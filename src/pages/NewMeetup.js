import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
function NewMeetupPage() {
  const navigate = useNavigate();

  function AddMeetupHandler(meetupData) {
    fetch(
      "https://firstreactproject-93f93-default-rtdb.firebaseio.com/meetups.json",
      {
        // object for configuration
        method: "POST",
        // body for data to pass
        body: JSON.stringify(meetupData),
        headers: {
          "content-type": "application/json",
        } // this methode transforms objects or arrays to json format
      }
    ).then(() => {
      navigate('/');
    }); // native js function for sending http requests
  }

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
