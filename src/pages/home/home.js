import HomePage from "../../components/templates/Home/HomePage/HomePage";
import PageTemplate from "../../components/UiCore/pageTemplate/PageTemplate";
function Home(){
    return(
      <div>
        <PageTemplate tabBar navbar >
             <HomePage/>
        </PageTemplate>
      </div>
    )
}
export default Home;