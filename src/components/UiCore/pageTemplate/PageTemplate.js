import Navbar from "../Navbar/Navbar";
import TabBar from "../TabBar/TabBar";
import styles from './PageTemplate.module.css'
function PageTemplate({children,tabBar,navbar}){
    return(
        <div  className={styles.pageTemplate_container} >
             {navbar&&<Navbar/>}
             <div className={styles.pageTemplate_body_and_tabbar} >
             {tabBar&&<TabBar/>}
             <div className={styles.pageTemplate_body} >
             {children}
             </div>
             </div>
        </div>
    )
}

export default PageTemplate;