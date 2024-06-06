import { useEffect } from "react";
import Header from "../../components/ui/general/Header";
import { useStore } from "../../store";
import { Flex, Heading, Table } from "@radix-ui/themes";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

function ProjectScreen() {
  const { getAllProjects, projects } = useStore();

  const navigate = useNavigate();

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <>
      <Header />
      <Flex>
        <Heading>Projetos</Heading>
      </Flex>
      <Flex>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Projeto</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Objetivo</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Descrição</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {projects.map((project) => (
              <Table.Row key={project.id}>
                <Table.RowHeaderCell className="project-name">
                  <Link to={`/projects/${project.id}`}>{project.name}</Link>
                </Table.RowHeaderCell>
                <Table.Cell>{project.objective}</Table.Cell>
                <Table.Cell>{project.description}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Flex>
    </>
  );
}

export default ProjectScreen;
