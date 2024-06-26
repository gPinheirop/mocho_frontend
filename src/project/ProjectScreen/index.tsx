import { useEffect, useState } from "react";
import Header from "../../components/ui/general/Header";
import { useStore } from "../../store";
import {
  AlertDialog,
  Button,
  Dialog,
  Flex,
  Heading,
  Table,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { Pencil1Icon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";

function ProjectScreen() {
  const [name, setName] = useState("");
  const [objective, setObjective] = useState("");
  const [description, setDescription] = useState("");

  const {
    getAllProjects,
    projects,
    createProject,
    updateProject,
    deleteProject,
  } = useStore();
  const navigate = useNavigate();

  const handleCreateProject = async () => {
    if (name && objective && description) {
      const isSucess = await createProject(name, objective, description);
      if (isSucess) {
        getAllProjects();
      } else {
        console.error("erro durante o salvamento do projeto");
      }
    }
  };

  const handleUpdateProject = async (id: string) => {
    if (name && objective && description) {
      const isSucess = await updateProject(name, objective, description, id);
      if (isSucess) {
        getAllProjects();
      } else {
        console.error("erro durante o atualização do projeto");
      }
    }
  };

  const handleDeleteProject = async (id: string) => {
    const isSucess = await deleteProject(id);
    if (isSucess) {
      getAllProjects();
    } else {
      console.error("erro durante a destruição do projeto");
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <>
      <Header />
      <Flex direction={"column"} gap={"3"} align={"end"} mr={"4"}>
        <Heading>Projetos</Heading>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button className="project-name">
              <PlusIcon />
              Adicionar Projeto
            </Button>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="450px">
            <Dialog.Title>Crie um novo projeto</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Crie seu projeto
            </Dialog.Description>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Nome do projeto
                </Text>
                <TextField.Root
                  placeholder="Nome do projeto"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Objetivo
                </Text>
                <TextField.Root
                  placeholder="Objetivo"
                  onChange={(e) => {
                    setObjective(e.target.value);
                  }}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Descrição
                </Text>
                <TextArea
                  placeholder="Descrição"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray" className="project-name">
                  Cancelar
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button
                  className="project-name"
                  onClick={() => {
                    handleCreateProject();
                  }}
                >
                  Salvar
                </Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </Flex>
      <Flex p={"4"}>
        <Table.Root variant="surface" size={"3"} className="table">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Projeto</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Objetivo</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Descrição</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Editar</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Deletar</Table.ColumnHeaderCell>
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
                <Table.Cell align="center">
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Pencil1Icon
                        className="project-name"
                        onClick={() => {
                          setName(project.name);
                          setDescription(project.description);
                          setObjective(project.objective);
                        }}
                      />
                    </Dialog.Trigger>
                    <Dialog.Content maxWidth="450px">
                      <Dialog.Title>Editar projeto</Dialog.Title>
                      <Dialog.Description size="2" mb="4">
                        Atualize seu projeto
                      </Dialog.Description>

                      <Flex direction="column" gap="3">
                        <label>
                          <Text as="div" size="2" mb="1" weight="bold">
                            Nome do projeto
                          </Text>
                          <TextField.Root
                            placeholder="Nome do projeto"
                            defaultValue={project.name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </label>
                        <label>
                          <Text as="div" size="2" mb="1" weight="bold">
                            Objetivo
                          </Text>
                          <TextField.Root
                            defaultValue={project.objective}
                            placeholder="Objetivo"
                            onChange={(e) => {
                              setObjective(e.target.value);
                            }}
                          />
                        </label>
                        <label>
                          <Text as="div" size="2" mb="1" weight="bold">
                            Descrição
                          </Text>
                          <TextArea
                            defaultValue={project.description}
                            placeholder="Descrição"
                            onChange={(e) => {
                              setDescription(e.target.value);
                            }}
                          />
                        </label>
                      </Flex>

                      <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            Cancelar
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button
                            disabled={!name && !description && !objective}
                            className="project-name"
                            onClick={() => {
                              handleUpdateProject(project.id);
                            }}
                          >
                            Salvar
                          </Button>
                        </Dialog.Close>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>
                </Table.Cell>
                <Table.Cell align={"center"} justify={"center"}>
                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <TrashIcon color="red" className="project-name" />
                    </AlertDialog.Trigger>
                    <AlertDialog.Content maxWidth="450px">
                      <AlertDialog.Title>Deletar projeto?</AlertDialog.Title>
                      <AlertDialog.Description size="2">
                        {`Tem certeza que deseja deletar ${project.name}? Uma vez feito, este registro não pode ser recuperado!`}
                      </AlertDialog.Description>

                      <Flex gap="3" mt="4" justify="end">
                        <AlertDialog.Cancel>
                          <Button variant="soft" color="gray">
                            Cancelar
                          </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                          <Button
                            variant="solid"
                            color="red"
                            onClick={() => {
                              handleDeleteProject(project.id);
                            }}
                          >
                            Deletar
                          </Button>
                        </AlertDialog.Action>
                      </Flex>
                    </AlertDialog.Content>
                  </AlertDialog.Root>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Flex>
    </>
  );
}

export default ProjectScreen;
