import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../components/listedBooks/ListedReadList";
import ListedWishList from "../../components/listedBooks/ListedWishList";

const Books = () => {

    const { storedBooks, wishList } = useContext(BookContext)
    console.log(storedBooks, wishList, "bookContext");

    return (
        <div className='container ms-auto my-3'>
            <br />
            <br />

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList/>
                </TabPanel>
                <TabPanel>
                    <ListedWishList/>
                    
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;