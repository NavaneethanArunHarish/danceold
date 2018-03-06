import axios from 'axios';


export default (form) => {
        return dispatch => {
            axios({
              method: 'post',
              url: "http://localhost:3000/api/event/create_event",
              data: form,
              headers: {
                'Content-Type': "application/json",
                'Authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2hAZ21haWwuY29tIiwiX2lkIjoiNWEwYWY4MjdlNTEwZWUxZmJjNmMwZjg4IiwiaWF0IjoxNTEwNjY4MzQ0fQ.jY0OJKvDZAPO9hCVMb8qcWZn8t9x8VNberNEj9iUcJc"
              }

            })
              .then(response => {
                var data = response;
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "CREATE_EVENT_SUCCESS",
                  createEvent: data
                });
              }).catch(error => {
                console.log("got error while updating---> ", error);
                dispatch({ type: "CREATE_EVENT_REJECTED" , createEvent: error });
              });
          }

        
}


