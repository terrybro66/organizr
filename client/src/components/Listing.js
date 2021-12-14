import { React, useEffect, useState } from "react";
import axios from "axios";
import ListingCard from "./ListingCard";

const Listing = ({ currEvent }) => {
  const [listing, setListing] = useState([]);
  const [filteredListing, setFilteredListing] = useState([]);

  const textOptions = ["All", "task", "food", "exercise"];

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/");

      setListing(result.data);
      setFilteredListing(result.data.reverse());
    };

    fetchData();
  }, []);

  useEffect(() => {
    textOptions[currEvent] === "All"
      ? setFilteredListing(listing)
      : setFilteredListing(
          listing.filter((item) => item.type == textOptions[currEvent])
        );
  }, [currEvent]);

  return (
    <div>
      {filteredListing.map((event) => {
        return <ListingCard event={event} />;
      })}
    </div>
  );
};

export default Listing;
