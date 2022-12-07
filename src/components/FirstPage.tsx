import {
  BodyLayout,
  Button,
  Card,
  FlexLayout,
  PageFooter,
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
        <FlexLayout direction="vertical" spacing="loose">
          <Card cardType="Bordered">
            <Card>
              <FlexLayout direction="vertical">
                <TextStyles type="SubHeading" fontweight="bold">
                  Your Journey Ahead
                </TextStyles>
                <TextStyles>
                  Here is what you needed to do for next steps
                </TextStyles>
              </FlexLayout>
            </Card>
            <Steps
              style={{
                height: "350px",
              }}
              responsive={true}
              direction="vertical"
              items={[
                {
                  title: (
                    <TextStyles fontweight="bold">
                      Connect to your Amazon Account
                    </TextStyles>
                  ),
                  description: "",
                  status: "process",
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
                  status: "process",
                },
                {
                  title: (
                    <TextStyles fontweight="bold">
                      Save and add your Buy with Prime button
                    </TextStyles>
                  ),
                  description: (
                    <TextStyles>
                      After saving, Buy with Prime button will be added to the
                      selected product page
                    </TextStyles>
                  ),
                  status: "process",
                },
              ]}
            />
          </Card>
          <Button>Connect to Amazon</Button>
        </FlexLayout>
      </Card>
      <PageFooter>
        A CedCommerce Inc. Product @2022. Need Help? <a href="#">Get Support</a>
      </PageFooter>
    </BodyLayout>
  );
}

export default FirstPage;
