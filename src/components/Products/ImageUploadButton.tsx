import { Box, Button } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { ChangeEvent } from "react";

interface Props {
    onChangeUrl: (url: string) => void;
}

export const ImageUploadButton = ({ onChangeUrl }: Props) => {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            onChangeUrl(imageUrl);
        }
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <AddPhotoAlternateIcon sx={{ marginRight: 1, color: "darkgreen" }} />
            <Button variant="outlined" color="success" component="label">
                Cargar Imagen
                <input type="file" hidden onChange={handleFileChange} />
            </Button>
        </Box>
    );
};