import { useEffect } from "react";
import Header from "../../components/ui/general/Header";
import { useStore } from "../../store";
import { Flex, Heading, Table, Text } from "@radix-ui/themes";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./styles.css";

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
      <Flex justify={"between"} p={"4"} className="info-container">
        <Flex direction={"column"}>
          <Heading>{project?.name}</Heading>
          <Text>{project?.objective}</Text>
        </Flex>
        <Link to={"/projects"}>voltar</Link>
      </Flex>
      <Flex justify={"center"} align={"center"} direction={"column"}>
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          className="description-container"
        >
          <Heading>Descrição do Projeto</Heading>
          <Flex maxWidth={"50%"} width={"fit-content"} m={"5"}>
            <Text>{project?.description}</Text>
          </Flex>
          <Flex direction={"row"} justify={"between"}>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Membros</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Tecnologias</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>Tecnologia 1</Table.RowHeaderCell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Tecnologia 2</Table.RowHeaderCell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Tecnologia 3</Table.RowHeaderCell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default ProjectPage;
