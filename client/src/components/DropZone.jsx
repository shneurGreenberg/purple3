import React, { useState, useCallback } from "react";
import { Stack, Thumbnail, Caption, DropZone } from "@shopify/polaris";
// import { NoteMinor } from "@shopify/polaris-icons";
// import { useDispatch } from "react-redux";

export function DropZoneFn(props) {
  const [files, setFiles] = useState([]);
  // const dispatch = useDispatch();

  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) => {
      setFiles((files) => [...files, ...acceptedFiles]);
      const bb = window.URL.createObjectURL(acceptedFiles[0]);

      props.onAction(bb);
      const imageUrl = acceptedFiles[0].name;
      console.log(imageUrl); //צילום מסך 2022-01-03 170433.jpg
    },

    [props]
  );

  // const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

  const fileUpload = !files.length && <DropZone.FileUpload />;
  const uploadedFiles = files.length > 0 && (
    <Stack vertical>
      {files.map((file, index) => (
        <Stack alignment="center" key={index}>
          <Thumbnail
            size="small"
            alt={file.name}
            source={
              // validImageTypes.includes(file.type)
              window.URL.createObjectURL(file)
            }
          />
          <div>
            {file.name} <Caption>{file.size} bytes</Caption>
          </div>
        </Stack>
      ))}
    </Stack>
  );

  return (
    <DropZone onDrop={handleDropZoneDrop}>
      {uploadedFiles}
      {fileUpload}
    </DropZone>
  );
}
