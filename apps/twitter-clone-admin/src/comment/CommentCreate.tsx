import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="commentAuthor" source="commentAuthor" />
        <TextInput label="commentContent" multiline source="commentContent" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="tweetReference" source="tweetReference" />
      </SimpleForm>
    </Create>
  );
};
