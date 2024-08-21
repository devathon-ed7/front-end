import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { useUI } from "@/dashboard/hooks/UI/useUI";
import { useUsers } from "@/dashboard/hooks/users/useUsers";
import { snackBarElement } from "@/helpers/snackBarElement";
import { useAuth } from "@/hooks/useAuth";
import { User } from "@/interfaces/index.interface";
import { Box, Button } from "@mui/material";
import { DialogResult } from "../UI/DialogResult";
const columns: GridColDef[] = [
  {
    flex: 1,
    field: "username",
    headerName: "Usuario",
    minWidth: 200,
    headerAlign: "left",
    align: "left",
    editable: false,
  },
  {
    flex: 2,
    field: "name",
    headerName: "Nombre",
    sortable: true,
    minWidth: 220,
    headerAlign: "left",
    align: "left",
  },
  {
    flex: 2,
    field: "email",
    headerName: "Correo",
    sortable: true,
    minWidth: 220,
    headerAlign: "left",
    align: "left",
  },
  {
    flex: 1,
    field: "role",
    headerName: "Rol",
    sortable: true,
    minWidth: 140,
    headerAlign: "left",
    align: "left",
  },
  {
    flex: 2,
    field: "action",
    headerName: "Acciones",
    sortable: false,
    headerAlign: "center",
    align: "center",
    minWidth: 200,
    renderCell({ row }) {
      const { user } = useAuth();
      const rowData = row as User;
      // const navigate = useNavigate();
      const { setDialogResultState } = useUI();
      const willBeCloseSession = user?.idUser == rowData.idUser;
      return (
        <Box
          sx={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            columnGap: "0.625em",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => {
              snackBarElement(
                "info",
                "Característica editar usuario no implementada por el momento"
              );
              // navigate(`/usuarios/editar/${rowData.idUser}`);
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
                message: willBeCloseSession
                  ? "Se cerrará la sesión y esta acción de eliminar no se podrá deshacer!"
                  : "Una vez realizada la acción no se puede deshacer!",
                idRegister: rowData.idUser,
              })
            }
            variant="contained"
            size="small"
            color="error"
          >
            Eliminar
          </Button>
        </Box>
      );
    },
  },
];

export const UserDatagrid = () => {
  const { UsersDataGrid, deleteUserById } = useUsers();

  return (
    <Box width="100%" overflow="auto">
      <DataGrid
        rows={UsersDataGrid}
        columns={columns}
        hideFooter
        paginationMode="server"
        rowCount={0}
        sx={{
          userSelect: "none",
          fontWeight: 600,
          height: { xs: 520, lg: 550, xl: 680 },
          fontSize: { xs: "0.8em", md: "0.9em", xl: "1.05em" },
          "& .MuiDataGrid-columnHeader *": {
            color: "primary.dark",
            fontWeight: "bold",
            fontSize: "1em",
          },
          "& .MuiDataGrid-columnHeaders *": {
            fontSize: { xl: "1em" },
          },
        }}
      />
      <DialogResult
        handleDialogResultConfirm={(idRegister) => deleteUserById(idRegister)}
      />
    </Box>
  );
};
