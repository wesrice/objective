import { AppExtensionSDK } from '@contentful/app-sdk'

type UUID = string;

export type FieldConfiguration = {
  id: UUID;
  jsonSchema: string;
  title: string;
}

export type AppParameters = Partial<{
  fieldConfigurations: FieldConfiguration[];
}>

export type TabProps = {
  parameters: AppParameters;
  sdk: AppExtensionSDK;
}

export type Tab = {
  Component: React.VFC<TabProps>;
  id: string;
  title: string;
}
