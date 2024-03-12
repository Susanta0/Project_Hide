import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import FromFillup from "./FromFillup";
import { useContext, useState, useRef } from "react";
import { useToast } from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext";
const data = [
  {
    id: 1,
    name: "Kids Coding Contest",
    description:
      "Kids Code Quest is an online coding competition tailored for young enthusiasts. This event invites children to tackle a series of engaging programming challenges, fostering creativity and problem-solving skills. Participants, ranging from beginners to budding coders, showcase their talent in a fun, virtual environment. Join us in igniting the spark of curiosity and coding brilliance in the next generation!",
    image:
      "https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/04/Screen-Shot-2022-04-25-at-4.56.50-PM.png",
    moreDetails: "more details",
  },
  {
    id: 2,
    name: "students Coding Contest",
    description:
      "Future Coders Clash is a dynamic online coding competition exclusively designed for students. Dive into a world of challenges that test your programming prowess and logical reasoning. Whether you're a beginner or an experienced coder, this event offers a platform to sharpen your skills, solve real-world problems, and compete with fellow students. Join us on this coding journey and pave the way for your future in tech!",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20220427142321/TopWebsitesForCodingChallengesCompetitions.jpg",
    moreDetails: "more details",
  },
  {
    id: 3,
    name: "Work Experience Coding Contest",
    description:
      "Code Masters Showdown is a prestigious online coding competition tailored for seasoned professionals and work experience holders. Elevate your coding expertise by tackling complex challenges that demand advanced problem-solving skills. Showcase your experience, compete with industry peers, and solidify your position as a coding maestro. It's time to put your skills to the test and claim the title of Code Master!",
    image:
      "https://www.shutterstock.com/image-photo/young-skilled-programmers-executing-testing-600nw-2358516041.jpg",
    moreDetails: "more details",
  },
];

const Contest = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const btnRef = useRef(null);

  const { isAuth } = useContext(AuthContext);
  const toast = useToast();
  const handleClick = () => {
    if(isAuth){
     return onOpen();
    }else{
      toast({
        title: "Please Sign in first",
        status: "error",
        duration: 2000,
        isClosable: true,
      })
    }
    
  };
  return (
    <div className="">
      <div className="m-auto">
        <h2 className="text-center text-3xl bg-green-500 text-white font-bold h-14">
          Contest
        </h2>
      </div>
      <div className=" mt-10 flex justify-between gap-10">
        {data.map((ele) => (
          <div id="card1" key={ele.id} className=" m-auto px-5 py-5 rounded-md">
            <div className="">
              <img
                className="w-[400px] h-[250px] m-auto"
                src={ele.image}
                alt="image"
              />
            </div>
            <h2 className="text-center text-xl font-bold">{ele.name}</h2>
            <p className="text-center text-md">
              Description: {ele.description.slice(0, 120)}
            </p>
            <div className="flex justify-between items-center">
              <Link className="text-blue-600 underline text-sm">
                {ele.moreDetails}
              </Link>
              <Button mt={3} ref={btnRef} onClick={handleClick}>
                Join Contest
              </Button>
                <Modal
                  onClose={onClose}
                  finalFocusRef={btnRef}
                  isOpen={isOpen}
                  scrollBehavior={scrollBehavior}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Join this Contest</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <FromFillup onClose={onClose} />
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contest;
