import { DownOutlined, UpOutlined } from "@ant-design/icons";
import {
  ActionList,
  BodyLayout,
  Button,
  Card,
  FlexLayout,
  TextField,
  TextStyles,
  Skeleton,
  Pagination,
  Select,
  Filter,
  PageFooter,
  Modal,
  ButtonDropdown,
  Alert,
} from "@cedcommerce/ounce-ui";
import { Table, Tag } from "antd";
import { useState } from "react";

interface ProductsType {
  key: number;
  sku: number;
  wix_name: string;
  amazon_name: string;
}

function SecondPage() {
  const products: ProductsType[] = new Array(5).fill({}).map((_, i) => {
    return {
      key: i,
      sku: 234768459,
      wix_name: "New Balance 206",
      amazon_name: "New Balance 2022",
    };
  });
  const [selectedRows, setSelectedRows] = useState<string[] | number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [columnOpen, setColumnOpen] = useState<boolean[]>(
    new Array(products?.length).fill(false)
  );
  const [columnsOption, setColumnsOption] = useState<string[]>(
    new Array(products?.length).fill("Hidden")
  );
  const [veticalDotButtonOpen, setVeticalDotButtonOpen] =
    useState<boolean>(false);
  // models
  const [isUpdateStateModelOpen, setIsUpdateStateModelOpen] =
    useState<boolean>(false);
  const [isDisconnectAccountModelOpen, setIsDisconnectAccountModelOpen] =
    useState<boolean>(false);

  return (
    <BodyLayout>
      {/* live model */}
      <Modal
        open={false}
        close={() => {}}
        heading="Buy with Prime is now live"
        modalSize="small"
        primaryAction={{
          content: "Finish",
        }}
      >
        <TextStyles>
          To view your button you can visit the live site. Keep in mind that the
          button will not appear in the editor preview.
        </TextStyles>
      </Modal>
      {/* disconnect model */}
      <Modal
        open={isDisconnectAccountModelOpen}
        close={() => {
          setIsDisconnectAccountModelOpen(false);
        }}
        heading="Disconnect your account from Amazon?"
        modalSize="small"
        primaryAction={{
          content: "Disconnect",
          type: "Danger",
        }}
        secondaryAction={{
          content: "Cancel",
          loading: false,
          onClick: () => setIsDisconnectAccountModelOpen(false),
        }}
      >
        <TextStyles>
          When you disconnect your account from Amazon, all Buy with Prime
          buttons will be removed from your website
        </TextStyles>
      </Modal>
      {/* updated state model */}
      <Modal
        open={isUpdateStateModelOpen}
        close={() => setIsUpdateStateModelOpen(false)}
        heading={`Update State for ${selectedRows?.length} items`}
        modalSize="medium"
        primaryAction={{
          content: "Update",
          loading: false,
          onClick: () => {},
        }}
        secondaryAction={{
          content: "Cancel",
          loading: false,
          onClick: () => {
            setIsUpdateStateModelOpen(false);
          },
        }}
      >
        <Card>
          <FlexLayout valign="center" halign="fill">
            <TextStyles>Set Button State for selected items</TextStyles>
            <ActionList
              activator={
                <Button
                  icon={true ? <UpOutlined /> : <DownOutlined />}
                  iconAlign="right"
                  onClick={() => {}}
                  type="Outlined"
                >
                  Hidden
                </Button>
              }
              open={false}
              direction="right"
              onClose={function noRefCheck() {}}
              sections={[
                {
                  items: [
                    {
                      content: "Hidden",
                    },
                    {
                      content: "Visible",
                    },
                  ],
                },
              ]}
            />
          </FlexLayout>
        </Card>
        <Card cardType="Bordered">
          <FlexLayout direction="vertical" spacing="extraLoose">
            <FlexLayout halign="fill" valign="center">
              <TextStyles fontweight="extraBold">SKU</TextStyles>
              <TextStyles fontweight="extraBold">Current State</TextStyles>
            </FlexLayout>
            {Array(10)
              .fill("")
              .map((_, i) => {
                return (
                  <FlexLayout halign="fill" valign="center" key={i}>
                    <TextStyles>234768459</TextStyles>
                    <TextStyles fontweight="bold">Hidden</TextStyles>
                  </FlexLayout>
                );
              })}
          </FlexLayout>
        </Card>
      </Modal>
      <FlexLayout direction="vertical" spacing="extraLoose">
        <FlexLayout halign="fill" valign="center">
          <Card>
            <FlexLayout spacing="loose" valign="center">
              <TextStyles type="Heading">Amazon Buy with Prime</TextStyles>
              <Tag color="success">Connected</Tag>
            </FlexLayout>
            <FlexLayout>
              <TextStyles type="SubHeading">
                Chooose which products you would like to enable shopping with
                Buy with Prime.{" "}
                <a href="#">Learn how to setup Buy with Prime</a>
              </TextStyles>
            </FlexLayout>
          </Card>

          <Card>
            <FlexLayout spacing="extraLoose" valign="center">
              <ActionList
                open={veticalDotButtonOpen}
                activator={
                  <Button
                    type="Outlined"
                    onClick={() => setVeticalDotButtonOpen((prev) => !prev)}
                  >
                    ⋮
                  </Button>
                }
                direction="right"
                sections={[
                  {
                    items: [
                      {
                        content: (
                          <Button type="DangerOutlined">
                            Disconnect Account
                          </Button>
                        ),
                        onClick: () => {
                          setIsDisconnectAccountModelOpen(true);
                          setVeticalDotButtonOpen(false);
                        },
                      },
                    ],
                  },
                ]}
              />
            </FlexLayout>
          </Card>
        </FlexLayout>

        <Alert destroy onClose={() => {}} type="success">
          Your changes were saved, you can now view your Buy with Prime button
          on Product page.
        </Alert>

        {!isLoading ? (
          <Card cardType="Bordered">
            {products && products?.length !== 0 ? (
              <>
                <FlexLayout halign="fill">
                  <TextField
                    placeHolder="Search Products"
                    innerSufIcon={<TextStyles content="_ICON_" />}
                  />
                  {selectedRows.length === 0 ? (
                    <FlexLayout spacing="loose">
                      <Filter
                        button="Filters By"
                        disableApply
                        filters={[
                          {
                            children: (
                              <Select
                                options={[
                                  { label: "Option 1", value: "valuedf" },
                                  { label: "Option 2", value: "value" },
                                ]}
                                thickness="thin"
                              />
                            ),
                            name: "Select Filter",
                          },
                        ]}
                        heading="Filter Heading"
                        icon={<TextStyles content="_ICON_" />}
                        type="Outlined"
                      />
                      <Button type="Primary">Save Changes</Button>
                    </FlexLayout>
                  ) : (
                    <Button
                      type="Primary"
                      onClick={() => setIsUpdateStateModelOpen(true)}
                    >
                      Update Button Stats
                    </Button>
                  )}
                </FlexLayout>
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
                      dataIndex: "sku",
                      key: "sku",
                      title: "Buy with Prime",
                      width: 150,
                      render: (a, b, idx) => {
                        // console.log(a, b);

                        return (
                          <ActionList
                            activator={
                              <Button
                                icon={
                                  columnOpen[idx] ? (
                                    <UpOutlined />
                                  ) : (
                                    <DownOutlined />
                                  )
                                }
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
                                {columnsOption[idx]}
                              </Button>
                            }
                            open={columnOpen[idx]}
                            direction="right"
                            onClose={function noRefCheck() {}}
                            sections={[
                              {
                                items: ["Hidden", "Visible"].map((choice) => {
                                  return {
                                    content: choice,
                                    onClick: () => {
                                      setColumnsOption((prev) => {
                                        return prev.map((opt, i) => {
                                          if (i === idx) return choice;
                                          return opt;
                                        });
                                      });
                                      setColumnOpen((prev) => {
                                        return prev.map((col, i) => {
                                          if (i === idx) return false;
                                          return col;
                                        });
                                      });
                                    },
                                  };
                                }),
                              },
                            ]}
                          />
                        );
                      },
                    },
                  ]}
                  rowSelection={{
                    type: "checkbox",
                    selectedRowKeys: selectedRows,

                    onChange: (e: any) => {
                      setSelectedRows(e);
                    },
                  }}
                  dataSource={products}
                  pagination={false}
                />
                <Card>
                  <Pagination
                    countPerPage={10}
                    currentPage={1}
                    onCountChange={function noRefCheck() {}}
                    onEnter={function noRefCheck() {}}
                    onNext={function noRefCheck() {}}
                    onPrevious={function noRefCheck() {}}
                    optionPerPage={[
                      {
                        label: "10",
                        value: "10",
                      },
                      {
                        label: "20",
                        value: "20",
                      },

                      {
                        label: "50",
                        value: "50",
                      },
                      {
                        label: "100",
                        value: "100",
                      },
                    ]}
                    totalPages={20}
                    totalitem={200}
                  />
                </Card>
              </>
            ) : (
              <Card>
                <FlexLayout
                  direction="vertical"
                  halign="center"
                  valign="center"
                >
                  <TextStyles type="Heading">
                    We haven't found any products with matching SKU
                  </TextStyles>
                  <a href="#">Learn how to setup Buy with Prime</a>
                </FlexLayout>
              </Card>
            )}
          </Card>
        ) : (
          <Card>
            <Skeleton line={3} type="line" rounded="0%" />
          </Card>
        )}
      </FlexLayout>
      <PageFooter>
        A CedCommerce Inc. Product @2022. Need Help? <a href="#">Get Support</a>
      </PageFooter>
    </BodyLayout>
  );
}

export default SecondPage;
