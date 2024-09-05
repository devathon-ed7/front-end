import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUsers } from "@/hooks/useUsers";
import { Box, Button } from "@mui/material";
import { UserHeader } from "@/components/Users/UserHeader";
import { BasicTable } from "@/components/Table/BasicTable";
import { useUI } from "@/dashboard/hooks/UI/useUI";

export const Users = () => {
  const navigate = useNavigate();
  const { setDialogResultState } = useUI();
  const { setListUsersDataGrid, UsersDataGrid, deleteUserById } = useUsers();
  const columnDefinitions = {
    username: {
      label: "Usuario",
      align: "left",
    },
    name: {
      label: "Nombre",
      align: "left",
    },
    email: {
      label: "Correo electrónico",
      align: "left",
    },
    role: {
      label: "Rol",
      align: "left",
    },
    action: {
      label: "Acciones",
      align: "right",
      render: (rowData: any) => (
        <Box
          sx={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            columnGap: "0.625em",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={() => {
              navigate(`/usuarios/editar/${rowData.id}`);
            }}
            variant="contained"
            size="small"
            color="warning"
          >
            Editar
          </Button>
          <Button
            onClick={() =>
              setDialogResultState({
                isOpen: true,
                title: `¿Está seguro de eliminar el usuario: ${rowData.username}`,
                message: "Una vez realizada la acción no se puede deshacer!",
                idRegister: rowData.id,
              })
            }
            variant="contained"
            size="small"
            color="error"
          >
            Eliminar
          </Button>
        </Box>
      ),
    },
  };

  useEffect(() => {
    setListUsersDataGrid();
  }, []);

  return (
    <Box sx={{ display: "grid", rowGap: "0.625em" }}>
      <UserHeader />
      <BasicTable
        data={UsersDataGrid}
        deleteUserById={deleteUserById}
        columnDefinitions={columnDefinitions}
      />
    </Box>
  );
};
