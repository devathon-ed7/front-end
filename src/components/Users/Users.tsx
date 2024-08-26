import { useUsers } from "@/hooks/useUsers";
import { Box, Button} from "@mui/material";
import { useEffect, useState } from "react";
//import { UserDatagrid } from "@/components/Users/UserDatagrid";
import { UserHeader } from "@/components/Users/UserHeader";
import { BasicTable } from "@/components/Table/BasicTable";
import { snackBarElement } from "@/utils/snackBarElement";
import { useNavigate } from "react-router-dom";
import { useUI } from "@/dashboard/hooks/UI/useUI";

export const Users = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
   const { setDialogResultState } = useUI();
  const { setListUsersDataGrid, UsersDataGrid, deleteUserById } = useUsers();
  const columnDefinitions = {
      username: {
        label: 'Usuario',
        align: 'left',
      },
      name: {
        label: 'Nombre',
        align: 'left',
      },
      email: {
        label: 'Correo electrónico',
        align: 'right',
      },
      role: {
        label: 'Rol',
        align: 'left',
      },
      action: {
        label: 'Acciones',
        align: 'center',
        render: (rowData: any) => (
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              columnGap: '0.625em',
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={() => {
                snackBarElement(
                  'info',
                  'Característica editar usuario no implementada por el momento'
                );
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
                  message: 'Una vez realizada la acción no se puede deshacer!',
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
    setLoading(true);
    setListUsersDataGrid();
    setLoading(false);
  }, []);

  return (
    <Box sx={{ display: "grid", rowGap: "0.625em" }}>
      <UserHeader />
      
        <BasicTable loading={loading} data={UsersDataGrid} deleteUserById={deleteUserById} columnDefinitions={columnDefinitions} />
  
    </Box>
  );
};


