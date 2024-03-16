// import Loader from './Loader';
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { colors, device, shadows } from "../utils/StyleVars";
import Navigation from "../components/Navigation";


const ContainerMain = styled.main`
  position: relative;
  width: 900px;
  border-radius: 10px;
  border: 1px solid ${colors.jet};
  margin-top: 20px;
  box-shadow: ${shadows.shadow5};
  background-color: ${colors.eerieBlack2};
  padding: 30px;
  padding-bottom: 50px;
  margin-bottom: 60px;

  @media ${device.lg} {
    width: 90%;
    align-items: baseline;
    justify-content: normal;
    position: relative;
    padding: 30px;
  }

`;
function AppLayout() {
  //   const navigation = useNavigation();
  //   const isLoading = navigation.state === 'loading';

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <Sidebar />
        <ContainerMain>
            <Navigation/>
            <Outlet/>
        </ContainerMain>
    
    </>
  );
}

export default AppLayout;
