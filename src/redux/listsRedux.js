import shortid from "shortid";

//selectors
export const getAllLists = ({lists}) => lists;
export const getListById = ({ lists }, listId ) => lists.find( list => list.id === listId )
//actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST')

//action creators
const listReducer = ( statePart = [], action) => {
    switch (action.type) {
        case ADD_LIST:
            return [...statePart, {...action.payload , id: shortid()}];
        default:
            return statePart;
    }
};

export default listReducer;