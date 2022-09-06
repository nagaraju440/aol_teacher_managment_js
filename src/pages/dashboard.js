import Navbar from "../components/UiCore/Navbar/Navbar";
import TabBar from "../components/UiCore/TabBar/TabBar";

function Dashboard(){
    return(
      <div>
        <Navbar></Navbar>
        <div className="dashboard-container" >
           <TabBar/>
        </div>
      </div>
    )
}
export default Dashboard;