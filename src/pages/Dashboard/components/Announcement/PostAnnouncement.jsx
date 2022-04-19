import { useState } from "react";
import axios from "axios";

import {
  Box,
  Textarea,
  Select,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";

export default function PostAnnouncement() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [announcementType, setAnnouncementType] = useState("");
  const [announcementDetails, setAnnouncementDetails] = useState("");
  const [announcementImage, setAnnouncementImage] = useState("");

  const Add = () => {
    axios
      .post("http://localhost:8000/api/announcements", {
        announcementType: announcementType,
        announcementDetails: announcementDetails,
        announcementImage: announcementImage,
      })
      .then((response) => {
        if (response) {
          alert("Success");
        } else {
          alert("Failed");
        }
      });
  };

  return (
    <Box>
      <Button
        w={["80vw", "75vw", "700px"]}
        onClick={onOpen}
        colorScheme="blueCTE"
      >
        Post Announcement
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="gray.700">Post Announcements</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={5}>
              <FormControl>
                <FormLabel htmlFor="announcementType" fontSize="sm">
                  Announcement Type
                </FormLabel>
                <Select
                  placeholder="Select Type"
                  size="sm"
                  id="announcementType"
                  name="announcementType"
                  onChange={(e) => setAnnouncementType(e.target.value)}
                >
                  <option value="announcement">Announcement</option>
                  <option value="memo">Memorandum Order</option>
                  <option value="activity">Activity</option>
                  <option value="request">Request</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="postDetails" fontSize="sm">
                  Details
                </FormLabel>
                <Textarea
                  size="sm"
                  id="postDetails"
                  name="AnnouncementDetails"
                  onChange={(e) => setAnnouncementDetails(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="postPicture" fontSize="sm">
                  Upload Image
                </FormLabel>
                <Input
                  type="file"
                  id="postPicture"
                  name="AnnouncementImage"
                  onChange={(e) => setAnnouncementImage(e.target.files[0].name)}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={2} onClick={onClose}>
              Discard
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                Add();
                onClose();
              }}
            >
              Announce
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
/* 
function Announcment() {
  return (
    <Box bgColor='gray.50' my={5} p={5} borderRadius={25} boxShadow='md' w={['80vw', '75vw', '700px']}>
      <Stack spacing={2}>
        <Heading color='gray.500' size='sm'>
          Post Announcement
        </Heading>
        <FormControl>
          <FormLabel htmlFor='announcementType' fontSize='sm'>Announcement Type</FormLabel>
          <Select placeholder='Select Type' size='sm' id='announcementType'>
            <option value="announcement">Announcement</option>
            <option value="memo">Memorandum Order</option>
            <option value="activity">Activity</option>
            <option value="request">Request</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='postDetails' fontSize='sm'>Details</FormLabel>
          <Textarea size='sm' id='postDetails' />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='postPicture' fontSize='sm'>Picture</FormLabel>
          <Input type='file' id='postPicture' />
        </FormControl>

        <Button>Announce</Button>
      </Stack >
    </Box>
  )
} */
