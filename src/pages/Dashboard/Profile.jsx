import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Center,
  Image,
  Table,
  Tr,
  Th,
  Td,
  Tag,
  Stack,
  useToast,
  Flex,
  Divider,
  Button,
  EditablePreview,
  useColorModeValue,
  IconButton,
  Input,
  useEditableControls,
  ButtonGroup,
  Editable,
  Tooltip,
  EditableInput,
} from "@chakra-ui/react";
import { HiCheck, HiX } from "react-icons/hi";
import CTE_logo from "../../media/samplepic.JPG";

export default function Profile() {
  const toast = useToast();

  // Input
  // const [profileLname, setProfileLname] = useState("");
  // const [profileFname, setProfileFname] = useState("");
  // const [profileMname, setProfileMname] = useState("");
  // const [profileGender, setProfileGender] = useState("");
  // const [profileAddress, setProfileAddress] = useState("");
  // const [profileBirthDate, setProfileBirthDate] = useState("");
  // const [profilePicture, setProfilePicture] = useState("");
  // const [profileDegree, setProfileDegree] = useState("");
  // const [profileDepartment, setProfileDepartment] = useState("");
  // const [profileDateEmployed, setProfileDateEmployed] = useState("");
  // const [profileReligion, setProfileReligion] = useState("");
  // const [profileCivilStatus, setProfileCivilStatus] = useState("");

  // const profile = () => {
  //   axios
  //     .post("http://localhost:8000/api/profile", {
  //       profileLname: profileLname,
  //       profileFname: profileFname,
  //       profileMname: profileMname,
  //       profileGender: profileGender,
  //       profileAddress: profileAddress,
  //       profileBirthDate: profileBirthDate,
  //       profilePicture: profilePicture,
  //       profileDegree: profileDegree,
  //       profileDepartment: profileDepartment,
  //       profileDateEmployed: profileDateEmployed,
  //       profileReligion: profileReligion,
  //       profileCivilStatus: profileCivilStatus,
  //     })
  //     .then((response) => {
  //       if (response) {
  //         alert("SUCCESS");
  //       } else {
  //         alert("FAILED");
  //       }
  //     });
  // };

  useEffect(() =>
    toast({
      title: "Click on the text to edit",
      description: "",
      status: "info",
      duration: 9000,
      isClosable: true,
      position: "bottom",
    })
  );
  return (
    <Box w="100%">
      <Heading size="lg" mb={5}>
        Profile
      </Heading>
      <Stack direction={["column", "row"]}>
        <InformationCard />
        <Stack w={["80vw", "54vw"]}>
          <PersonalInformation />
          <Divider />
          <CollegeInformation />
          <Divider />
          <EducationalInformation />
        </Stack>
      </Stack>
    </Box>
  );
}

function InformationCard() {
  return (
    <Box bgColor="gray.50" h="78vh" borderRadius={25} w={["80vw", "300px"]}>
      <Center flexDirection="column" p={5}>
        <Image
          boxSize="175px"
          src={CTE_logo}
          objectFit="cover"
          borderRadius="full"
          mb={5}
        />
        <Heading size="sm">FirstName LastName</Heading>
      </Center>
      <Table size="sm" variant="unstyled">
        <Tr>
          <Th>Position</Th>
          <Td>College Dean</Td>
        </Tr>
        <Tr>
          <Th>Department</Th>
          <Td>Elementary Education Department</Td>
        </Tr>
        <Tr>
          <Th>Employment Date</Th>
          <Td>April 22, 2021</Td>
        </Tr>
        <Tr>
          <Th>Status</Th>
          <Td>
            <Tag colorScheme="green">Available</Tag>
          </Td>
        </Tr>
      </Table>
      <Center>
        <Button m={2} colorScheme="blueCTE" w="90%">
          Logout
        </Button>
      </Center>
    </Box>
  );
}

function PersonalInformation() {
  return (
    <Box bgColor="gray.50" borderRadius={25} p={5} py={9}>
      <Heading size="md" color="gray.500" mb={5}>
        Personal Information
      </Heading>
      <Flex flexDirection={["column", "row"]}>
        <Box w={["100%", "25vw"]}>
          <EditableTexts
            value="Lastname"
            title="Last Name"
            data="Mark Angelo"
            id="profileLname"
            // onChange={(e) => setProfileLname(e.target.value)}
          />
          <EditableTexts
            value="Firstname"
            title="First Name"
            data="Nayn"
            id="profileFname"
            // onChange={(e) => setProfileFname(e.target.value)}
          />
          <EditableTexts
            value="Middlename"
            title="Middle Name"
            data="Copper"
            id="profileMname"
            // onChange={(e) => setProfileMname(e.target.value)}
          />
        </Box>
        <Box w={["100%", "25vw"]}>
          <EditableTexts
            title="Birthdate"
            data="TEMPLATE"
            id="profileBirthDate"
            // onChange={(e) => setProfileBirthDate(e.target.value)}
          />{" "}
          {/* DATE PICKER PLEASE */}
          <EditableTexts
            title="Civil Status"
            data="Single"
            id="profileCivilStatus"
            // onChange={(e) => setProfileCivilStatus(e.target.value)}
          />
          <EditableTexts
            title="Gender"
            data="Female"
            id="profileGender"
            // onChange={(e) => setProfileGender(e.target.value)}
          />
          <EditableTexts
            title="Religion"
            data="Roman Catholic"
            id="profileReligion"
            // onChange={(e) => setProfileReligion(e.target.value)}
          />
        </Box>
      </Flex>
      <EditableTexts
        title="Address"
        data="Block 1, Lot 2, Southcom"
        id="profileAddress"
        // onChange={(e) => setProfileAddress(e.target.value)}
      />
    </Box>
  );
}

function CollegeInformation() {
  return (
    <Box bgColor="gray.50" borderRadius={25} p={5} py={9}>
      <Heading size="md" color="gray.500" mb={5}>
        College/Employment Information
      </Heading>
      <EditableTexts
        title="Department"
        data="Elementary Education"
        id="profileDepartment"
        // onChange={(e) => setProfileDepartment(e.target.value)}
      />
      <EditableTexts
        title="College Title"
        data="Department Head"
        id="profilePosition"
        // onChange={(e) => setProfilePosition(e.target.value)}
      />
      <EditableTexts title="Employment Date" data="TEMPLATE" />
    </Box>
  );
}

function EducationalInformation() {
  return (
    <Box bgColor="gray.50" borderRadius={25} p={5} py={9}>
      <Heading size="md" color="gray.500" mb={5}>
        Educational Information
      </Heading>
      <EditableTexts
        title="Bachelor's"
        data="Bachelor in Elementary Education Major in English"
      />
      <EditableTexts
        title="Masteral"
        data="Master in Education Major in English"
      />
      <EditableTexts title="Doctorate" data="Doctor of Education" />
      <Divider mb={5} />
      <EditableTexts title="Published Works" data="Lorem2" />
      <EditableTexts title="Seminar Attended" data="Lorem2" />
    </Box>
  );
}

function EditableTexts({ data, title }) {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="end" size="sm" spacing={2}>
        <IconButton
          colorScheme="green"
          icon={<HiCheck />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          colorScheme="red"
          icon={<HiX />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : null;
  }

  return (
    <Editable
      defaultValue={data}
      isPreviewFocusable={true}
      selectAllOnFocus={false}
    >
      <Heading size="sm" color="gray.600">
        {title}
      </Heading>
      <Flex alignItems="baseline">
        <Tooltip label="Click to edit">
          <EditablePreview
            py={2}
            px={4}
            m={2}
            _hover={{
              background: useColorModeValue("gray.300", "gray.700"),
            }}
          />
        </Tooltip>
        <Input as={EditableInput} m={2} />
        <EditableControls />
      </Flex>
    </Editable>
  );
}
