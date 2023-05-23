import {createGlobalStyle} from "styled-components"
import {ScreenPag} from './Components/ScreenMain';

export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: "Titillium Web";
}
li{
  list-style: none;
}`

function App() {
  return (
    <>
    <GlobalStyled/>
    <ScreenPag/>
    </>
  );
}

export default App;