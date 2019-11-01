import React from "react";

interface AppProps {
  color: string;
}

const App: React.FunctionComponent<AppProps> = props => {
  return <div>{props.color}</div>;
};
export default App;
