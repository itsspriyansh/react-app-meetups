import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage () {

    const navigate = useNavigate();

    function MeetupHandler (meetupData) {
        fetch ("https://react-app-49dd7-default-rtdb.firebaseio.com/meetups.json", 
        {
            method : "POST",
            body : JSON.stringify(meetupData),
            mode : "cors",
            headers : {
                "Content-Type" : "application/json",
                "Access-Control-Allow-Origin" : "*"
            }
        }
        ).then (() => {
            navigate("/");
        })
    }

    return (
            <section>
                <h1>Add New Meetup</h1>
                <NewMeetupForm onAddMeetup = {MeetupHandler} />
            </section>
    )
}

export default NewMeetupPage;

