import "@shopify/polaris/build/esm/styles.css";
import { Page, Card } from "@shopify/polaris";
import { DropZoneFn } from "./DropZone";
import { TextFieldFn } from "./TextField";
import { TopBarExample } from "./TopBar";
import { MainCrop } from "../components/crop/mainCrop";
import { PhoneFieldFn } from "./phone";
// import { prefixExample } from "./select";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { setUser } from "../features/user";
import { setUseFunc } from "../api/api";

export function EditPage() {
  // const user = useSelector((state) => state.user.value);
  const [postUser, setPostUser] = useState({
    name: "",
    title: "",
    description: "",
    currentCompany: "",
    describYorself: "Foo",
    phoneNumber: "",
    image: "ddd",
  });
  const [imageCrop, setImage] = useState("");

  const dispatch = useDispatch();

  const saveUser = async () => {
    await setUseFunc(postUser);

    dispatch(
      setUser({
        name: postUser.name,
        title: postUser.title,
        description: postUser.description,
        currentCompany: postUser.currentCompany,
        describYorself: "Foo",
        phoneNumber: postUser.phoneNumber,
        image: "ddd",
      })
    );
  };
  const onDropImg = (value) => {
    alert(value);
    setImage(value);
  };

  const onChangeName = (value) => {
    setPostUser((prevState, newState) => ({
      ...prevState,
      name: value,
    }));
  };
  const onChangeTitle = (value) => {
    setPostUser((prevState, newState) => ({
      ...prevState,
      title: value,
    }));
  };

  const onChangeDescription = (value) => {
    setPostUser((prevState, newState) => ({
      ...prevState,
      description: value,
    }));
  };
  const onChangeCurrentCompany = (value) => {
    setPostUser((prevState, newState) => ({
      ...prevState,
      currentCompany: value,
    }));
  };
  const onChangePhoneNumber = (value) => {
    setPostUser((prevState, newState) => ({
      ...prevState,
      phoneNumber: value,
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
              value={postUser.name}
              onChangeValue={onChangeName}
              title="Job title"
            />

            <TextFieldFn
              value={postUser.title}
              onChangeValue={onChangeTitle}
              title="Job title"
            />
            <TextFieldFn
              value={postUser.currentCompany}
              onChangeValue={onChangeCurrentCompany}
              title="Current company"
            />
            <TextFieldFn
              value={postUser.description}
              onChangeValue={onChangeDescription}
              title="describYorself"
              multiline={4}
            />
            <PhoneFieldFn
              value={postUser.phoneNumber}
              onChangeValue={onChangePhoneNumber}
              title={"Phone number"}
            />
            {JSON.stringify(postUser)}
          </Card>
        </Card>
      </Page>
    </div>
  );
}
