import React, { useState } from 'react'
import SideBar from '../dideBar/SideBar';
import TopBar from '../dideBar/TopBar';

import Dashbord from '../../components/sideBarComponents/Dashbord';
import RatingAndReview from '../../components/sideBarComponents/RatingAndReview';
import TransactionList from '../../components/sideBarComponents/TransactionList';
import UserManagement from '../../components/sideBarComponents/UserManagement';



function Alienation() {
    const [activeItem, setActiveItem] = useState('User Management');
    const sidBarItems = ['Dashboard', 'User Management', 'Rating and Review', 'Settings', 'History', 'All Bookings', 'Push Notification', 'Transaction List', 'Google Analytics', 'Multi-Currency', 'Category ', 'Live Chat History', 'Package Plan', 'Referral History', 'Google Map']

    const componentsMap = {
        'Dashboard': Dashbord,
        'User Management': UserManagement,
        'Rating and Review': RatingAndReview,
        'Transaction List': TransactionList,
        
      };

    const handileClick = (item) => {
        setActiveItem(item)
    }
const HandilRender=()=>{


    const Component = componentsMap[activeItem];
    return Component ? <Component /> : <div className="text-gray-500">No Component Found</div>;


}

   

    return (
        <div className='w-full  flex justify-center'>
            <div className='h-full w-[80%]  flex '>

                <SideBar sidBarItems={sidBarItems} handileClick={handileClick} activeItem={activeItem} />

                <div className='flex-1 h-full w-full my-10 flex items-center justify-center ml-6'>
                    <div className='w-full h-[1000px]  '>
                         <TopBar/>
                         
                         <HandilRender/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alienation