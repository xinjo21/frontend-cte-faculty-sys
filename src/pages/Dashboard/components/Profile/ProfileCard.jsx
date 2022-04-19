import { useEffect, useState } from "react";
import axios from "axios";

import {
  Box,
  Flex,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Select,
  Spacer,
  useToast,
} from "@chakra-ui/react";

export default function ProfileCard() {
  const toast = useToast();
  const [editable, setEditable] = useState(true);

  const [profileLname, setProfileLname] = useState("");
  const [profileFname, setProfileFname] = useState("");
  const [profileMname, setProfileMname] = useState("");
  const [profileGender, setProfileGender] = useState("");
  const [profileAddress, setProfileAddress] = useState("");
  const [profileBirthDate, setProfileBirthDat] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [profileDegree, setProfileDegree] = useState("");
  const [profileDepartment, setProfileDeparment] = useState("");
  const [profileDateEmployed, setProfileDateEmployed] = useState("");
  const [profileReligion, setProfileReligion] = useState("");
  const [profileCivilStatus, setProfileCivilStatus] = useState("");
  const [profilePublishWork, setprofilePublishWork] = useState("");

  function updateProfile() {
    axios
      .post(`http://localhost:8000/api/profile`, {
        profileLname: profileLname,
        profileFname: profileFname,
        profileMname: profileMname,
        profileGender: profileGender,
        profileAddress: profileAddress,
        profileBirthDate: profileBirthDate,
        profilePicture: profilePicture,
        profileDegree: profileDegree,
        profileDepartment: profileDepartment,
        profileDateEmployed: profileDateEmployed,
        profileReligion: profileReligion,
        profileCivilStatus: profileCivilStatus,
        profilePublishWork: profilePublishWork,
      })
      .then((res) => {
        if (res) {
          alert("Success");
        } else {
          alert("Failed");
        }
      });
  }

  return (
    <Stack spacing={5}>
      <Stack direction="row" pos="sticky" top="5" zIndex="1">
        <Spacer />
        <Button
          colorScheme={editable ? "yellow" : "green"}
          onClick={() => {
            setEditable(!editable);
            updateProfile();
            editable
              ? toast({
                  title: "Editing enabled",
                  status: "info",
                  position: "top",
                  duration: 5000,
                  isClosable: true,
                })
              : toast({
                  title: "Information saved!",
                  status: "success",
                  position: "top",
                  duration: 5000,
                  isClosable: true,
                });
          }}
        >
          {editable ? "Edit" : "Save"}
        </Button>
        <Button
          colorScheme="red"
          onClick={() => {
            toast({
              title: "Changes Discarded",
              status: "warning",
              position: "top",
              duration: 5000,
              isClosable: true,
            });
          }}
        >
          Discard
        </Button>
      </Stack>
      {/* Personal Information */}
      <Box bgColor="gray.50" borderRadius={25} p={5}>
        <Heading size="md" color="gray.500" mb={5}>
          Personal Information
        </Heading>
        <Flex flexDirection={["column", "row"]}>
          <Box w="100%" pr={[0, 5]}>
            <FormControl mb={5}>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                isReadOnly={editable}
                id="lastName"
                onChange={(e) => setProfileLname(e.target.value)}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                isReadOnly={editable}
                id="firstName"
                onChange={(e) => setProfileFname(e.target.value)}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel htmlFor="middleName">Middle Name</FormLabel>
              <Input
                isReadOnly={editable}
                id="middleName"
                onChange={(e) => setProfileMname(e.target.value)}
              />
            </FormControl>
          </Box>

          <Box w="100%">
            <FormControl mb={5}>
              <FormLabel htmlFor="birthdate">Birthdate</FormLabel>
              <Input
                isReadOnly={editable}
                id="birthdate"
                type="date"
                onChange={(e) => setProfileBirthDat(e.target.value)}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel htmlFor="civilStatus">Civil Status</FormLabel>
              <Input
                isReadOnly={editable}
                id="civilStatus"
                onChange={(e) => setProfileCivilStatus(e.target.value)}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <Select
                isReadOnly={editable}
                id="gender"
                onChange={(e) => setProfileGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="male">Female</option>
                <option value="male">Other</option>
              </Select>
              {/* <Input isReadOnly={editable} id='gender' /> */}
            </FormControl>
            <FormControl mb={5}>
              <FormLabel htmlFor="religion">Religion</FormLabel>
              <Input
                isReadOnly={editable}
                id="religion"
                onChange={(e) => setProfileReligion(e.target.value)}
              />
            </FormControl>
          </Box>
        </Flex>
        <FormControl mb={5}>
          <FormLabel htmlFor="religion">Address</FormLabel>
          <Input
            isReadOnly={editable}
            id="address"
            onChange={(e) => setProfileAddress(e.target.value)}
          />
        </FormControl>
      </Box>

      {/* Employment Information */}
      <Box bgColor="gray.50" borderRadius={25} p={5}>
        <Heading size="md" color="gray.500" mb={5}>
          Employment Information
        </Heading>
        <Flex flexDirection={["column", "row"]}>
          <Box w="100%">
            <FormControl mb={5}>
              <FormLabel htmlFor="department">Department</FormLabel>
              <Input isReadOnly={editable} id="department" />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel htmlFor="collegeTitle">College Title</FormLabel>
              <Input isReadOnly={editable} id="collegeTitle" />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel htmlFor="employmentDate">Employment date</FormLabel>
              <Input isReadOnly={editable} id="employmentDate" />
            </FormControl>
          </Box>
        </Flex>
      </Box>

      {/* Educational Background */}
      <Box bgColor="gray.50" borderRadius={25} p={5}>
        <Heading size="md" color="gray.500" mb={5}>
          Educational Background
        </Heading>
        <Flex flexDirection={["column", "row"]}>
          <Box w="100%">
            <FormControl mb={5}>
              <FormLabel htmlFor="bachelorDegree">
                Bachelor's Degree | School
              </FormLabel>
              <Input isReadOnly={editable} id="bachelorDegree" />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel htmlFor="masterDegree">
                Master's Degree | School
              </FormLabel>
              <Input isReadOnly={editable} id="masterDegree" />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel htmlFor="doctoralDegree">
                Doctoral Degree | School{" "}
              </FormLabel>
              <Input isReadOnly={editable} id="doctoralDegree" />
            </FormControl>
          </Box>
        </Flex>
      </Box>

      {/* Security */}
      <Box bgColor="gray.50" borderRadius={25} p={5}>
        <Heading size="md" color="gray.500" mb={5}>
          Security
        </Heading>
        <Flex flexDirection={["column", "row"]}>
          <Box w="100%">
            <FormControl mb={5}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input isReadOnly={editable} id="email" type="email" />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input isReadOnly={editable} id="password" type="password" />
            </FormControl>
          </Box>
        </Flex>
      </Box>
    </Stack>
  );
}
