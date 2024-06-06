import { useEffect } from "react";
import Header from "../../components/ui/general/Header";
import { useStore } from "../../store";
import { Flex, Heading } from "@radix-ui/themes";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProjectPage() {
  const { getProject, project } = useStore();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getProject(id);
  }, []);

  return (
    <>
      <Header />
      <Flex>
        <Heading>{project?.name}</Heading>
      </Flex>
      <Flex>
        <Link to={"/projects"}> voltar</Link>
      </Flex>
    </>
  );
}

export default ProjectPage;
