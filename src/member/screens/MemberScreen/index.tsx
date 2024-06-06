import { useEffect, useState } from "react";
import Header from "../../../components/ui/general/Header";
import { useStore } from "../../../store";
import {
  AlertDialog,
  Button,
  Dialog,
  Flex,
  Heading,
  Select,
  Table,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { Pencil1Icon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { Role } from "../../types";

function MemberScreen() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = useState("");

  const { getAllMembers, members, createMember, updateMember, deleteMember } =
    useStore();
  const navigate = useNavigate();

  const handleCreateProject = async () => {
    if (name && lastName && document) {
      const isSucess = await createMember(
        name,
        lastName,
        document,
        email,
        password,
        zipCode,
        street,
        state,
        neighborhood,
        number,
        Number(role)
      );
      if (isSucess) {
        getAllMembers();
      } else {
        console.error("erro durante o salvamento do membro");
      }
    }
  };

  const handleUpdateProject = async (id: string) => {
    if (name && lastName && document) {
      const isSucess = await updateMember(
        name,
        lastName,
        document,
        email,
        password,
        zipCode,
        street,
        state,
        neighborhood,
        number,
        Number(role),
        id
      );
      if (isSucess) {
        getAllMembers();
      } else {
        console.error("erro durante o atualização do membro");
      }
    }
  };

  const handleDeleteProject = async (id: string) => {
    const isSucess = await deleteMember(id);
    if (isSucess) {
      getAllMembers();
    } else {
      console.error("erro durante a destruição do membro");
    }
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <>
      <Header />
      <Flex direction={"column"} gap={"3"} align={"end"} mr={"4"}>
        <Heading>Membros</Heading>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button className="project-name">
              <PlusIcon />
              Adicionar Membro
            </Button>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="450px">
            <Dialog.Title>Adicionar um novo membro</Dialog.Title>
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Primeiro Nome
                </Text>
                <TextField.Root
                  placeholder="Nome"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Sobrenome
                </Text>
                <TextField.Root
                  placeholder="Sobrenome"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Documento
                </Text>
                <TextField.Root
                  placeholder="Documento"
                  onChange={(e) => {
                    setDocument(e.target.value);
                  }}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Documento
                </Text>
                <Select.Root
                  defaultValue="ADMIN"
                  value={role}
                  onValueChange={setRole}
                >
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Group>
                      <Select.Label>Cargo</Select.Label>
                      <Select.Item value="1">Admin</Select.Item>
                      <Select.Item value="2">Padrão</Select.Item>
                      <Select.Item value="3">Gerente</Select.Item>
                    </Select.Group>
                    <Select.Separator />
                  </Select.Content>
                </Select.Root>
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Email
                </Text>
                <TextField.Root
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Senha
                </Text>
                <TextField.Root
                  placeholder="Senha"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </label>
              <Dialog.Description size="2" mb="4">
                Endereço
              </Dialog.Description>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  CEP
                </Text>
                <TextField.Root
                  placeholder="CEP"
                  onChange={(e) => {
                    setZipCode(e.target.value);
                  }}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Rua
                </Text>
                <TextField.Root
                  placeholder="Rua"
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Estado
                </Text>
                <TextField.Root
                  placeholder="Estado"
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Bairro
                </Text>
                <TextField.Root
                  placeholder="Bairro"
                  onChange={(e) => {
                    setNeighborhood(e.target.value);
                  }}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Número
                </Text>
                <TextField.Root
                  placeholder="Número"
                  onChange={(e) => {
                    setNumber(e.target.value);
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
              <Table.ColumnHeaderCell>Membro</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Cargo</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Deletar</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {members.map((member) => (
              <Table.Row key={member.id}>
                <Table.RowHeaderCell className="project-name">
                  <Link to={`/members/${member.id}`}>{member.firstName}</Link>
                </Table.RowHeaderCell>
                <Table.Cell>{member.email}</Table.Cell>
                <Table.Cell>{Role[member.role]}</Table.Cell>
                <Table.Cell align={"center"} justify={"center"}>
                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <TrashIcon color="red" className="project-name" />
                    </AlertDialog.Trigger>
                    <AlertDialog.Content maxWidth="450px">
                      <AlertDialog.Title>Deletar projeto?</AlertDialog.Title>
                      <AlertDialog.Description size="2">
                        {`Tem certeza que deseja deletar ${member.firstName} ${member.lastName} ? Uma vez feito, este registro não pode ser recuperado!`}
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
                              handleDeleteProject(member.id);
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

export default MemberScreen;
