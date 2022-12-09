import {
  Alert,
  BodyLayout,
  Button,
  Card,
  FlexLayout,
  Loader,
  PageFooter,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { useState } from "react";

function FirstPage() {
  const [openErrorModal, setOpenErrorModal] = useState<boolean>(false);

  function openModal() {
    let target = "_blank";
    const url = "https://www.facebook.com/login/" + "?";
    const redirect = "&redirect_return_type=app";
    const settings =
      "height=500,width=800,left=100,top=100,resizable=no,scrollbars=no,toolbar=yes,menubar=no,location=no,directories=no, status=yes";
    let popupWindow = window.open(url + redirect, target, settings);
    if (!popupWindow || popupWindow.closed) {
      target = "_self";
      popupWindow = window.open(url + redirect, target, settings);
    }

    const timer = setInterval(() => {
      if (popupWindow?.closed) {
        setOpenErrorModal(true);
        clearInterval(timer);
      }
    }, 500);
  }

  return (
    <BodyLayout>
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

        {openErrorModal && (
          <Alert
            onClose={() => setOpenErrorModal(false)}
            destroy={true}
            type="danger"
          >
            <FlexLayout direction="vertical" valign="start" halign="center">
              <TextStyles>
                Sorry! An error occurred while connecting your Amazon account.
                Please try connecting again.
              </TextStyles>
              <a href="#">Wondering what went wrong?</a>
            </FlexLayout>
          </Alert>
        )}

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
