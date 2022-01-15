import "@shopify/polaris/build/esm/styles.css";
import { Page, Card } from "@shopify/polaris";
import { DropZoneFn } from "./DropZone";
import { TextFieldFn } from "./TextField";
import { TopBarExample } from "./TopBar";
import { MainCrop } from "./crop/mainCrop";
import { PhoneFieldFn } from "./phone";
// import { prefixExample } from "./select";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { setUser } from "../features/user";

export function EditPage() {
  // const user = useSelector((state) => state.user.value);
  const [postUser, setPostUser] = useState({
    name: "",
    title: "",
    describYorself: "",
    currentCompany: "",
    phoneNumber: "",
    image: "",
  });
  const [imageCrop, setImage] = useState("");

  const dispatch = useDispatch();

  const saveUser = async () => {
    console.log("postUser");

    dispatch(
      setUser({
        name: postUser.name,
        title: postUser.title,
        description: postUser.description,
        currentCompany: postUser.currentCompany,
        describYorself: postUser.describYorself,
        phoneNumber: postUser.phoneNumber,
        image: "ddd",
      })
    );
  };

  const onDropImg = (value) => {
    setImage(value);
  };

  const onChangeProperty = (value, fieldName) => {
    console.log(value, fieldName);

    setPostUser((prevState, newState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return (
    <div className="App">
      {imageCrop && <MainCrop imageCrop={imageCrop} />}

      <Page>
        <TopBarExample />

        <Card sectioned title={"User profile"}>
          <Card
            sectioned
            subdued
            primaryFooterAction={{
              content: "Save",
              onAction: () => {
                saveUser();
              },
            }}
          >
            <Card sectioned title={"Profile picture"}>
              <DropZoneFn onAction={onDropImg} />
            </Card>

            <TextFieldFn
              value={postUser.title}
              onChangeValue={(value) => onChangeProperty(value, "title")}
              title="Job title"
            />

            <TextFieldFn
              value={postUser.currentCompany}
              onChangeValue={(value) =>
                onChangeProperty(value, "currentCompany")
              }
              title="Current company"
            />
            <TextFieldFn
              value={postUser.describYorself}
              onChangeValue={(value) =>
                onChangeProperty(value, "describYorself")
              }
              title="describYorself"
              multiline={4}
            />
            <PhoneFieldFn
              value={postUser.phoneNumber}
              onChangeValue={(value) => onChangeProperty(value, "phoneNumber")}
              title={"Phone number"}
            />

          </Card>
        </Card>
      </Page>
    </div>
  );
}
