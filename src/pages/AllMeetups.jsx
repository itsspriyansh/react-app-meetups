import MeetupList from "../components/meetups/MeetupList";
import classes from "./AllMeetups.module.css";
import { useState } from "react";
import { useEffect } from "react";

function AllMeetupsPage  () {
  const [isLoading, setIsLoading] = useState (true);
  const [loadedMeetups, setLoadedMeetups] = useState ([]);

  useEffect (() => {
    fetch ("https://react-app-49dd7-default-rtdb.firebaseio.com/meetups.json").then (response => {
      return response.json();
    }).then (data => {
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id : key,
          ...data[key]
        }
        meetups.push (meetup);
      }
      setIsLoading (false);
      setLoadedMeetups(meetups);
    })
  }, [])
    
  if (isLoading) {
    return (
      <section>
        <div className={classes.outerbox}>
          <div className = {classes.facebook}><div></div><div></div><div></div></div>
        </div>
      </section>
    )
  }

  return (
      <section>
          <h1>All Meetups</h1>
          <MeetupList meetups = {loadedMeetups} />
      </section>
  )
}

export default AllMeetupsPage;

