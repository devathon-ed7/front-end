interface ImagePreviewProps {
	file: File | null;
	image?: string | null;
	altText?: string;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
	file,
	image = null,
	altText = "imgProfile",
}) => {
	const imageSrc = file ? URL.createObjectURL(file) : image;

	return (
		<div className="preview-image">
			{imageSrc ? (
				<img
					src={imageSrc}
					alt={altText}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						objectPosition: "center",
						border: "2px solid",
						borderColor: "info.light",
					}}
				/>
			) : (
				<div className="grid place-content-center w-full h-full bg-info border-2 border-info-light">
					<h2 className="text-white font-bold shadow-[0_3px_6px_rgba(0,0,0,0.2)]">
						Sin imagen
					</h2>
				</div>
			)}
		</div>
	);
};
