import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useLogin } from "@/hooks/useLogin";

export const FormLogin = () => {
  const {
    form,
    showPassword,
    loading,
    handleInputChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleSubmit,
  } = useLogin();

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "1em",
        width: "100%",
      }}
    >
      <TextField
        id="username"
        name="username"
        label="Usuario..."
        type="text"
        required
        value={form.username}
        onChange={handleInputChange}
        autoComplete="off"
      />

      <TextField
        id="password"
        name="password"
        label="Contraseña..."
        required
        type={showPassword ? "text" : "password"}
        value={form.password}
        onChange={handleInputChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        type="submit"
        size="large"
        variant="contained"
        color="secondary"
        sx={{ fontSize: "18px" }}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Acceder"}
      </Button>
    </Box>
  );
};