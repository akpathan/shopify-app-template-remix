import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Page, EmptyState, Card } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};

export default function Index() {
  return (
    <Page>
      <TitleBar title="Bundle App"></TitleBar>
      <Card>
        <EmptyState
          heading="Manage your inventory transfers"
          action={{ content: "Add transfer" }}
          secondaryAction={{
            content: "Learn more",
            url: "https://help.shopify.com",
          }}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>Track and receive your incoming inventory from suppliers.</p>
        </EmptyState>
      </Card>
    </Page>
  );
}
