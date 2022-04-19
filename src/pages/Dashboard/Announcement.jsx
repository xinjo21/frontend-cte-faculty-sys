import { useState, useEffect } from "react";
import axios from "axios";

import { Box, Heading, Center } from "@chakra-ui/react";

import AnnouncementPost from "./components/Announcement/AnnouncementPost";
import PostAnnouncement from "./components/Announcement/PostAnnouncement";

export default function Announcement() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/announcements/show/all")
      .then((response) => {
        setList(response.data);
      });
  }, []);

  return (
    <Box>
      <Heading size="lg" mb={5}>
        Announcement
      </Heading>

      <Center flexDirection="column">
        <PostAnnouncement />

        {list.map((index) => <AnnouncementPost data={index} />).reverse()}
      </Center>
    </Box>
  );
}
