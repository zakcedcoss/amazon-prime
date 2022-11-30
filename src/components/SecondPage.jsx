import { CheckCircleTwoTone, DownOutlined } from "@ant-design/icons";
import {
  ActionList,
  Avatar,
  BodyLayout,
  Button,
  Card,
  FlexLayout,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { Skeleton, Table } from "antd";
import { useState } from "react";

function SecondPage() {
  const products = new Array(5).fill({
    sku: 234768459,
    wix_name: "New Balance 206",
    amazon_name: "New Balance 2022",
  });
  const [selectedFIlter, setSelectedFilter] = useState("Select");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [columnOpen, setColumnOpen] = useState(
    new Array(products?.length).fill(false)
  );

  return (
    <BodyLayout>
      <Card>
        <FlexLayout halign="fill">
          <Card>
            <TextStyles type="Heading">Amazon Buy with Prime</TextStyles>
            <FlexLayout>
              <TextStyles type="SubHeading">
                Chooose which products you would like to enable shopping with
                Buy with Prime.
                <a href="#">Learn how to setup Buy with Prime</a>
              </TextStyles>
            </FlexLayout>
          </Card>
          <Card>
            <FlexLayout spacing="extraLoose" valign="center">
              <CheckCircleTwoTone />
              <TextStyles textcolor="positive" icon={<CheckCircleTwoTone />}>
                Connected
              </TextStyles>
              <Avatar></Avatar>
              <Button disable={products?.length === 0 ? true : false}>
                Save
              </Button>
            </FlexLayout>
          </Card>
        </FlexLayout>
      </Card>
      <Card cardType="Bordered">
        {products && products?.length !== 0 ? (
          <>
            <FlexLayout halign="fill">
              <ActionList
                activator={
                  <Button
                    icon={<TextStyles content="Filter By:" />}
                    iconAlign="left"
                    onClick={() => {
                      setIsOpen((prev) => !prev);
                    }}
                    type="Outlined"
                  >
                    {selectedFIlter}
                  </Button>
                }
                open={isOpen}
                direction="left"
                onClose={function noRefCheck() {}}
                sections={[
                  {
                    items: [
                      {
                        content: "All",
                        onClick: () => {
                          setSelectedFilter("All");
                          setIsOpen(false);
                        },
                      },
                      {
                        content: "A",
                        onClick: () => {
                          setSelectedFilter("A");
                          setIsOpen(false);
                        },
                      },
                      {
                        content: "B",
                        onClick: () => {
                          setSelectedFilter("B");
                          setIsOpen(false);
                        },
                      },
                    ],
                  },
                ]}
              />
              <TextField placeHolder="Search" />
            </FlexLayout>
            {!isLoading ? (
              <Table
                columns={[
                  {
                    align: "left",
                    dataIndex: "sku",
                    key: "sku",
                    title: "Matching SKU",
                    width: 100,
                  },
                  {
                    align: "center",
                    dataIndex: "wix_name",
                    key: "wix_name",
                    title: "Wix Product Name",
                    width: 200,
                  },
                  {
                    align: "center",
                    dataIndex: "amazon_name",
                    key: "amazon_name",
                    title: "Amazon Product Name",
                    width: 200,
                  },
                  {
                    align: "center",
                    dataIndex: "buy_with_prime",
                    key: "buy_with_prime",
                    title: "Buy with Prime",
                    width: 150,
                    render: (_, __, idx) => {
                      return (
                        <FlexLayout
                          direction="vertical"
                          halign="start"
                          spacing="loose"
                        >
                          <ActionList
                            activator={
                              <Button
                                icon={<DownOutlined />}
                                iconAlign="right"
                                onClick={() => {
                                  setColumnOpen((prev) => {
                                    return prev.map((col, i) => {
                                      if (i === idx) return !col;
                                      return false;
                                    });
                                  });
                                }}
                                type="Outlined"
                              >
                                Hidden
                              </Button>
                            }
                            open={columnOpen[idx]}
                            direction="right"
                            onClose={function noRefCheck() {}}
                            sections={[
                              {
                                items: [
                                  {
                                    content: "Hidden",
                                    onClick: () => {},
                                  },
                                  {
                                    content: "Visible",
                                    onClick: () => {},
                                  },
                                ],
                              },
                            ]}
                          />
                        </FlexLayout>
                      );
                    },
                  },
                ]}
                rowSelection={{
                  type: "checkbox",
                }}
                dataSource={products}
                pagination={false}
              />
            ) : (
              <Card>
                <Skeleton line={3} type="line" rounded="0%" />
              </Card>
            )}
          </>
        ) : (
          <Card>
            <FlexLayout direction="vertical" halign="center" valign="center">
              <TextStyles type="Heading">
                We haven't found any products with matching SKU
              </TextStyles>
              <a href="#">Learn how to setup Buy with Prime</a>
            </FlexLayout>
          </Card>
        )}
      </Card>
    </BodyLayout>
  );
}

export default SecondPage;
