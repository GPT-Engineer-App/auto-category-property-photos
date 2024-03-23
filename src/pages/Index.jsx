import React, { useState } from "react";
import { ChakraProvider, Box, VStack, Heading, Text, Input, Button, Textarea, Image, FormControl, FormLabel, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { FaUpload, FaPlus, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    // TODO: Implement the logic to upload the file and other details to the server
    console.log("File to upload:", selectedFile);
    console.log("Address:", address);
    console.log("Description:", description);
    // Reset the form
    setSelectedFile(null);
    setAddress("");
    setDescription("");
  };

  return (
    <ChakraProvider>
      <Box padding={8} maxWidth="3xl" margin="auto">
        <VStack spacing={8}>
          <Heading as="h1" size="xl">
            Construction Photo Catalog
          </Heading>
          <Text>If you have construction photos of residential properties, upload them here with the location information and a short description.</Text>

          <FormControl>
            <FormLabel htmlFor="file-upload">Upload Photo</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<Icon as={FaUpload} />} />
              <Input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} paddingLeft="2.5rem" />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="address">Property Address</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<Icon as={FaMapMarkerAlt} />} />
              <Input id="address" type="text" placeholder="Enter the property address" value={address} onChange={handleAddressChange} paddingLeft="2.5rem" />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea id="description" placeholder="Enter a short description of the photo" value={description} onChange={handleDescriptionChange} />
          </FormControl>

          {selectedFile && <Image src={URL.createObjectURL(selectedFile)} alt="Preview" boxSize="200px" objectFit="cover" borderRadius="md" />}

          <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid" onClick={handleSubmit} isDisabled={!selectedFile || !address || !description}>
            Register Image
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
