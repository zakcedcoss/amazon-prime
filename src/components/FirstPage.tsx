import {
  Alert,
  BodyLayout,
  Button,
  Card,
  FlexLayout,
  Loader,
  Modal,
  PageFooter,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { useEffect, useState } from "react";

function FirstPage() {
  const [openLoader, setOpenLoader] = useState<boolean>(false);
  const [percent, setPercent] = useState<number>(0);
  const [newTab, setNewTab] = useState<Window | null>();
  console.log(newTab);

  function openModal() {
    const popupWindow = window.open(
      "https://sellercentral.amazon.in/?" + "&redirect_return_type=app",
      "popUpWindow",
      "height=500,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
    );
    setNewTab(popupWindow);
  }

  const timer = setInterval(() => {
    if (newTab?.closed) {
      console.log("WORKING...");
      setOpenLoader(true);
      clearInterval(timer);
    }
  }, 500);

  return (
    <BodyLayout>
      {openLoader && (
        <Loader
          title="You are all set!"
          subtitle="Setting up your account"
          percentage={percent}
          type="Loader3"
        />
      )}
      <FlexLayout spacing="loose" desktopWidth="100">
        <Card>
          <TextStyles type="Heading">Amazon Buy with Prime</TextStyles>
          <FlexLayout>
            <TextStyles type="SubHeading">
              Choose which products you would like to enable shopping with Buy
              with Prime.
              <a href="#">Learn how to setup Buy with Prime</a>
            </TextStyles>
          </FlexLayout>
        </Card>

        <Alert destroy={false} type="danger">
          <FlexLayout direction="vertical" valign="start" halign="center">
            <TextStyles>
              Sorry! An error occurred while connecting your Amazon account.
              Please try connecting again.
            </TextStyles>
            <a href="#">Wondering what went wrong?</a>
          </FlexLayout>
        </Alert>

        <Card cardType="Bordered">
          <Card title="About this integration">
            <FlexLayout direction="vertical">
              <TextStyles>
                Use Amazon Buy with Prime app to convert and delight shoppers
                with fast,free delivery and 1-2 days
              </TextStyles>
              <TextStyles>shopping and transparent delivery times</TextStyles>
            </FlexLayout>
          </Card>
          <FlexLayout spacing="loose" valign="center" halign="fill">
            <FlexLayout spacing="loose" direction="vertical">
              {/* 1 */}
              <Card>
                <FlexLayout spacing="extraLoose" valign="center">
                  <TextStyles>_ICON_</TextStyles>
                  <FlexLayout direction="vertical">
                    <TextStyles fontweight="bold">
                      Connect your amazon account
                    </TextStyles>
                    <TextStyles>
                      Connect your amazon account and experience a new way of
                    </TextStyles>
                    <TextStyles>Selling your products</TextStyles>
                  </FlexLayout>
                </FlexLayout>
              </Card>
              {/* 2 */}
              <Card>
                <FlexLayout spacing="extraLoose" valign="center">
                  <TextStyles>_ICON_</TextStyles>
                  <FlexLayout direction="vertical">
                    <TextStyles fontweight="bold">
                      Choose the products you would like to enable
                    </TextStyles>
                    <TextStyles fontweight="bold">
                      purchase with buy with Prime
                    </TextStyles>
                    <TextStyles>
                      Follow this instruction on{" "}
                      <a href="#">how to set up Buy with Prime</a>
                    </TextStyles>
                  </FlexLayout>
                </FlexLayout>
              </Card>
              {/* 3 */}
              <Card>
                <FlexLayout spacing="extraLoose" valign="center">
                  <TextStyles>_ICON_</TextStyles>
                  <FlexLayout direction="vertical">
                    <TextStyles fontweight="bold">
                      Save and add your Buy with Prime button.
                    </TextStyles>
                    <TextStyles>
                      After saving, Buy with Prime button will be added to the
                    </TextStyles>
                    <TextStyles>selected product pages</TextStyles>
                  </FlexLayout>
                </FlexLayout>
              </Card>
            </FlexLayout>
            <Card>
              <img
                style={{
                  width: "300px",
                  marginRight: "100px",
                }}
                src="https://buywithprime.amazon.com/content/dam/amzn-stealth/BwP-Badge-2.png"
                alt=""
              />
            </Card>
          </FlexLayout>
        </Card>
        <Card>
          <FlexLayout halign="fill" valign="center" spacing="loose">
            <FlexLayout direction="vertical">
              <TextStyles fontweight="bold">
                Enable your users to order your products directly from amazon
              </TextStyles>
              <TextStyles>
                Connect your Amazon account and experience a new way of selling
                your products.
              </TextStyles>
            </FlexLayout>
            <Button icon={<TextStyles>_ICON_</TextStyles>} onClick={openModal}>
              Connect to Amazon
            </Button>
          </FlexLayout>
        </Card>
      </FlexLayout>
      <PageFooter>
        A CedCommerce Inc. Product @2022. Need Help? <a href="#">Get Support</a>
      </PageFooter>
    </BodyLayout>
  );
}

export default FirstPage;
