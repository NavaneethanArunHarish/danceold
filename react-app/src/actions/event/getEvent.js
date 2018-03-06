import axios from 'axios';


export default () => {
    return dispatch => {
        axios({
          method: 'get',
          url: "http://localhost:3000/api/event/getall_event",
          headers: {
            'Content-Type': "application/json",
            'Authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2hAZ21haWwuY29tIiwiX2lkIjoiNWEwYWY4MjdlNTEwZWUxZmJjNmMwZjg4IiwiaWF0IjoxNTEwNjY4MzQ0fQ.jY0OJKvDZAPO9hCVMb8qcWZn8t9x8VNberNEj9iUcJc"
          }
        })
          .then(response => {
            var data = response;
            console.log("response while getting data -- > ", data);
            dispatch({
              type: "RECEIVE_ALL_EVENT",
              payload: data
            });
          }).catch(error => {
            console.log("got error while updating---> ", error);
          });
      }     
}


