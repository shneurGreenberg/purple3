// import User from "./components/user";
import "@shopify/polaris/build/esm/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeMajor } from "@shopify/polaris-icons";
import { EditPage } from "./components/ViewPage";

import {
  Page,
  Card,
  Layout,
  Thumbnail,
  ResourceList,
  TextStyle,
  Button,
  Navigation,
} from "@shopify/polaris";
// import { DropZoneFn } from "./components/DropZone";
import { TextFieldFn } from "./components/TextField";
import { TopBarExample } from "./components/TopBar";
import { PhoneFieldFn } from "./components/phone";
import { useSelector } from "react-redux";
import React from "react";
// import { setUser } from "./features/user";
// import { MainCrop } from "./components/crop/mainCrop";

function App() {
  const user = useSelector((state) => state.user.value);

  const createUser = () => {
    alert("createUser");
  };

  return (
    <>
      <div className="App">
        <Page>
          <TopBarExample />
          <Layout>
            <Router>
              <div>
                <Switch>
                  <Route path="/about">
                    <EditPage />
                  </Route>
                </Switch>
              </div>
            </Router>
            <Card.Section>
              <Navigation location="/">
                <Navigation.Section
                  items={[
                    {
                      url: "/about",
                      label: "Home",
                      icon: HomeMajor,
                    },
                  ]}
                />
              </Navigation>
              <Button onClick={createUser}>Add product</Button>

              <Card sectioned>
                <ResourceList
                  items={[
                    {
                      id: 343,
                      name: "Shneur Greenberg",

                      media: (
                        <Thumbnail
                          source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                          alt="Black orange scarf"
                        />
                      ),
                    },
                  ]}
                  renderItem={(item) => {
                    const { id, url, name, media, quantity } = item;

                    return (
                      <ResourceList.Item
                        id={id}
                        url={url}
                        media={media}
                        accessibilityLabel={`View details for ${name}`}
                      >
                        <h3>
                          <TextStyle variation="strong">{name}</TextStyle>
                        </h3>
                        <div>{quantity} 770shneu1@gmail.com</div>
                      </ResourceList.Item>
                    );
                  }}
                />
              </Card>
            </Card.Section>
            {JSON.stringify(user)}
            <Card sectioned title={"User profile"}>
              <Card sectioned subdued>
                <TextFieldFn title="Job title" value={user.title} />
                <TextFieldFn title="Current company" value={user.currentCompany} />
                <TextFieldFn
                  title="describYorself"
                  multiline={4}
                  value={user.describYorself}
                />
                <PhoneFieldFn title={"Phone number"} value={user.phoneNumber} />
              </Card>
            </Card>
          </Layout>
        </Page>
      </div>
    </>
  );
}

export default App;
