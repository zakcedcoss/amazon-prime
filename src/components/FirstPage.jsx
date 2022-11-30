import {
  BodyLayout,
  Button,
  Card,
  FlexLayout,
  StepWizard,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { Steps } from "antd";

function FirstPage() {
  return (
    <BodyLayout>
      <Card>
        <TextStyles type="Heading">Amazon Buy with Prime</TextStyles>
        <FlexLayout>
          <TextStyles type="SubHeading">
            Follow the instructions below to enable buy with Prime.
            <a href="#">Learn how to setup Buy with Prime</a>
          </TextStyles>
        </FlexLayout>
      </Card>
      <Card cardType="Bordered">
        <Card title="About this integration">
          <FlexLayout direction="vertical">
            <TextStyles>
              Use Amazon Buy with Prime app to convert and delight shoppers with
              fast,free
            </TextStyles>
            <TextStyles>
              delivery and 1-2 days shopping and transparent delivery times
            </TextStyles>
          </FlexLayout>
        </Card>
        <Card title="How to connect">
          <Steps
            style={{
              height: "350px",
            }}
            current={1}
            percent={30}
            responsive={true}
            direction="vertical"
            items={[
              {
                title: (
                  <TextStyles fontweight="bold">
                    Connect to your Amazon Account
                  </TextStyles>
                ),
                description: <Button>Connect to Amazon</Button>,
              },
              {
                title: (
                  <TextStyles fontweight="bold">
                    Choose the products you would like to enable to purchase
                    with Buy with Prime
                  </TextStyles>
                ),
                description: (
                  <TextStyles>
                    Follow this instruction on
                    <a href="#"> how to setup Buy with Prime.</a>
                  </TextStyles>
                ),
              },
              {
                title: "Save and add your Buy with Prime button",
                description:
                  "After saving, Buy with Prime button will be added to the selected product page",
              },
            ]}
          />
        </Card>
      </Card>
    </BodyLayout>
  );
}

export default FirstPage;
