/*import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUsers } from "@/hooks/useUsers";
import { Box } from "@mui/material";
import { UserHeader } from "@/components/Users/UserHeader";
import { BasicTable } from "@/components/Table/BasicTable";
import { useUI } from "@/dashboard/hooks/UI/useUI";

import "./Users.css";

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
        <Box className="table-column-actions">
          <button
            onClick={() => {
              navigate(`/usuarios/editar/${rowData.id}`);
            }}
            className="btn-action-edit"
          >
            Editar
          </button>
          <button
            onClick={() =>
              setDialogResultState({
                isOpen: true,
                title: `¿Está seguro de eliminar el usuario: ${rowData.username}`,
                message: "Una vez realizada la acción no se puede deshacer!",
                idRegister: rowData.id,
              })
            }
            className="btn-action-delete"
          >
            Eliminar
          </button>
        </Box>
      ),
    },
  };

  useEffect(() => {
    setListUsersDataGrid();
  }, []);

  return (
    <Box className="container-user-table">
      <UserHeader />
      <BasicTable
        data={UsersDataGrid}
        deleteUserById={deleteUserById}
        columnDefinitions={columnDefinitions}
      />
    </Box>
  );
};
*/