import * as ActionTypes from '../actionTypes/';
//select book is an action creator, it will need an action type
export function selectBook(book) {

  return {
    //You should create a Type and Payload for your Action here
    type: ActionTypes.BOOK_SELECTED,
    payload: book
  };
}
