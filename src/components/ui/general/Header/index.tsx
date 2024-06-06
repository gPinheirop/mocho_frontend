import { Box, Button, DropdownMenu, Flex } from "@radix-ui/themes";
import logo from "../../../../assets/logo.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <Flex className="header">
      <img className="logo" src={logo} alt="Mocho" />
      <Box className="menu-container">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">
              Menu
              <DropdownMenu.TriggerIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item onClick={() => {}}>Projetos</DropdownMenu.Item>
            <DropdownMenu.Item onClick={() => {}}>Membros</DropdownMenu.Item>
            <DropdownMenu.Item onClick={() => {}}>
              Tecnologias
            </DropdownMenu.Item>
            <DropdownMenu.Separator />

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>Experiências</DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>Problemas</DropdownMenu.Item>
                <DropdownMenu.Item>Problemas Vencidos</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Soluções</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator />
            <DropdownMenu.Item>Perfil</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item color="red">Logout</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Box>
    </Flex>
  );
}
export default Header;
