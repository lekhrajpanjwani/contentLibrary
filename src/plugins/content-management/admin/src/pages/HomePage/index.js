/*
 *
 * HomePage
 *
 */

import React, {useState, useEffect } from "react";
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import {LoadingIndicatorPage} from "@strapi/helper-plugin";
// import todoRequests from "../../api/todo"
// import { nanoid } from "nanoid";
import { Button } from '@strapi/design-system';
import { EmptyStateLayout } from '@strapi/design-system';
import { Layout, BaseHeaderLayout, ContentLayout } from '@strapi/design-system/Layout';
import Plus from "@strapi/icons/Plus";
import { Illo } from '../../components/Illo';
import AddModal from "../../components/AddModal";

const HomePage = () => {

  const [contentData, setContentData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async() => {
    if(isLoading === false) setIsLoading(true);
    // const todo = await todoRequests.getAllTodos();
    // setContentData(todo);
    setIsLoading(false);
  }

  useEffect(async () => {
    await fetchData();
  }, []);

  async function addContent(data) {
    // setTodoData([...todoData, {...data, id: nanoid(), isDone: false}]);
    // await todoRequests.addContent(data);
    await fetchData();
  }


  return (
    <Layout>
    <BaseHeaderLayout
    title="todo plugin"
    subtitle="all your tool in one place"
    as="h2" />

    <ContentLayout>
      <p>test code</p>

    {
      contentData.length === 0 
      ? <EmptyStateLayout
      icon={<Illo/>}
      content="No content available..."
      action={<Button onClick={()=> setShowModal(true)}
      variant="secondary"
      startIcon={<Plus/>}>Add your first content</Button>}
      />
      : <>
        <TodoCount count={todoData.length}/>
        <TodoTable
        todoData={todoData}
        setShowModal={setShowModal}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        />
      </>
    }
    </ContentLayout>
    {showModal && <AddModal setShowModal={setShowModal} addContent={addContent}/>}
  </Layout>
  );
};

export default HomePage;
