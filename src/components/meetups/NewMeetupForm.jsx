import classes from "./NewMeetupForm.module.css";
import Card from "../UI/Card.jsx";
import { useRef } from "react";

function NewMeetupForm (props) {

    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    function submitHandler (event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredaddress = addressInputRef.current.value;
        const entereddescription = descriptionInputRef.current.value; 

        const meetupData = {
            title : enteredTitle,
            image : enteredImage,
            address : enteredaddress,
            description : entereddescription
        }

        props.onAddMeetup (meetupData);
    }

    return (
        <Card>
            <form className = {classes.form} onSubmit={submitHandler}>
                <div className = {classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}></input>
                </div>
                <div className = {classes.control}>
                    <label htmlFor="image">Meetup Image URL</label>
                    <input type="url" required id="image" ref={imageInputRef}></input>
                </div>
                <div className = {classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id="address" ref={addressInputRef}></input>
                </div>
                <div className = {classes.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea required id="description" rows="5" ref={descriptionInputRef}></textarea>
                </div>
                <div className = {classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;

