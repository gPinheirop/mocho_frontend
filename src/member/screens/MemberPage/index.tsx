import { useEffect } from "react";
import Header from "../../../components/ui/general/Header";
import { useStore } from "../../../store";
import { Flex, Heading, Table, Text } from "@radix-ui/themes";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./styles.css";

function MemberPage() {
  const { getMember, member } = useStore();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getMember(id);
  }, []);

  return (
    <>
      <Header />
      <Flex justify={"between"} p={"4"} className="info-container">
        <Flex direction={"column"}>
          <Heading>{member?.firstName + " " + member?.lastName}</Heading>
          <Text>{member?.email}</Text>
        </Flex>
        <Link to={"/members"}>voltar</Link>
      </Flex>
      <Flex justify={"center"} align={"center"} direction={"column"}>
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          className="description-container"
        ></Flex>
      </Flex>
    </>
  );
}

export default MemberPage;
