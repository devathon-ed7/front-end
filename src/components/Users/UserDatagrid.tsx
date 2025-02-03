import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { Box, Button } from "@mui/material";

import { useUI } from "@/dashboard/hooks/UI/useUI";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { User } from "@/interfaces";

import { DialogResult } from "@/components/UI/DialogResult";

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
      if (!row) return null;
      const rowData = row as User;
      const navigate = useNavigate();
      const { setDialogResultState } = useUI();
      const willBeCloseSession = user?.id == rowData.id;
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
                message: willBeCloseSession
                  ? "Se cerrará la sesión y esta acción de eliminar no se podrá deshacer!"
                  : "Una vez realizada la acción no se puede deshacer!",
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
      );
    },
  },
];
interface Props {
  loading: boolean;
  data: any;
  deleteUserById: (id: string) => void;
}

const SkeletonRow = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "2.5rem",
        gap: "0.5rem",
        padding: "0 0.5rem",
      }}
    >
      <Skeleton variant="circular" width={20} height={20} />
      <Skeleton variant="text" width="50%" />
      <Skeleton variant="text" width="50%" />
      <Skeleton variant="text" width="50%" />
      <Skeleton variant="text" width="50%" />
    </Box>
  );
};

export const UserDatagrid = ({ loading, data, deleteUserById }: Props) => {
  //const { UsersDataGrid, deleteUserById } = useUsers();

  return (
    <Box width="100%" overflow="auto">
      <DataGrid
        rows={loading ? [] : data}
        columns={columns}
        hideFooter
        paginationMode="server"
        rowCount={data.length}
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
        loading={loading}
        slotProps={{
          loadingOverlay: {
            variant: "linear-progress",
            noRowsVariant: "skeleton",
          },
        }}
      />
      <DialogResult
        handleDialogResultConfirm={(idRegister) => deleteUserById(idRegister)}
      />
    </Box>
  );
};
