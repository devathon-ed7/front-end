
import { CameraIcon } from "lucide-react";

export const ImageUpload = ({ onChange }) => {
  const handleCaptureImageByCamera = async (event) => {
    const files = event.target.files;
    if (!files || files.length <= 0) {
      event.target.value = "";
      return;
    }

    onChange(files[0]);

    event.target.value = "";
  };

  return (
    <label className="flex items-center cursor-pointer border border-gray-300 rounded-md px-4 py-2 text-gray-700 font-bold text-sm hover:bg-gray-100 transition duration-300">
      <CameraIcon className="mr-2" />
      Cargar imagen
      <input
        accept="image/png, image/jpeg, image/jpg"
        hidden
        type="file"
        name="profile_filename"
        onChange={handleCaptureImageByCamera}
      />
    </label>
  );
};