import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TweetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <NumberInput step={1} label="comments" source="comments" />
        <TextInput label="content" multiline source="content" />
        <NumberInput step={1} label="likes" source="likes" />
        <NumberInput step={1} label="retweets" source="retweets" />
      </SimpleForm>
    </Create>
  );
};
