import "./AdminDash.css";
import Topbar from './components/Topbar';
import LeftBar from './components/LeftBar';
import Horizontalbar from './components/Horizontalbar';
import List from './components/List';
import Progressbar from './components/Progressbar';
import Bargraph from './components/Bargraph';
import Summary from './components/Summary';
import SummaryCount from "./components/SummaryCount";

export default function AdminDash() {
    return <>
        <div className='Admin_page'>
            <div className="Admin_page_topbar">
            <div className='Admin_page_column1'>
                <Topbar />
            </div>
            </div>
            <div className='Admin_page_contentpart'>
                <div className='Admin_page_contentpart_leftbar'>
                    <LeftBar />
                </div>
                <div className='Admin_page_contentpart_main'>
                    <div className='Admin_page_contentpart_main_row1'>
                        <Bargraph />
                        <Horizontalbar />
                    </div>
                    <div className='Admin_page_contentpart_main_row2'>
                        <div className="Admin_page_contentpart_main_row2_innerrow1">
                            <Summary />
                        </div>
                        <div className="Admin_page_contentpart_main_row2_innerrow2">
                            <SummaryCount />
                            <Progressbar />
                        </div>
                    </div>
                </div>
                <div className='Admin_page_contentpart_list'>
                    <List />
                </div>
            </div>
        </div >
    </>
}