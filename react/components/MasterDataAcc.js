import React from "react";
import { Divider, Card } from "vtex.styleguide";
import { useQuery } from "react-apollo";
import { pathOr } from "ramda";

import PROFILE from "../graphql/getSession.graphql";
import DOCUMENTS from "../graphql/getDocuments.graphql";
import { documentSerializer } from "../utils/serializer";

const MasterDataAcc = () => {
  const { data: profileData } = useQuery(PROFILE);

  const { email } = pathOr([], ["profile"], profileData);
  console.log(profileData);

  const { data: documentData } = useQuery(DOCUMENTS, {
    variables: {
      schema: "LD_schema",
      fields: ["suscribe", "name", "id", "age"],
      acronym: "LD",
      where: `id=${"7010d41c-9aa6-11ed-83ab-0e016298488b"}`,
    },
  });
  console.log(documentData);

  const id = documentSerializer(pathOr([], ["documents"], documentData));

  console.log(id);

  return (
    <div>
      <h1>Master data - My Account</h1>
      <div style={{ padding: "80px", color: "#585959", background: "#fafafa" }}>
        <Card>
          <h2 className="mt0 mb6">User email</h2>
          <p className="f6 gray ma0">
            <div className="f3 gray ma0">{email}</div>
          </p>
          <div className="mv6">
            <Divider orientation="horizontal" />
          </div>
          <h2 className="mt0 mb6">User subscription</h2>
          <p className="f6 gray ma0">
            <div className="f3 gray ma0">
              {id.map((user) => (
                <div key={user.name}>
                  <p>{user.suscribe}</p>
                </div>
              ))}
            </div>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default MasterDataAcc;
