import fetchAPI from "../services/fetchAPI";

const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";
const FAILED_REQUEST = "FAILED_REQUEST";

const requestingData = () => {
  return { type: REQUESTING_DATA };
};
const receivedData = (resp) => {
  return { type: RECEIVED_DATA, resp };
};
const failedRequest = (error)=>{
    return {type: FAILED_REQUEST, resp: error}
}
export default function handleAsync() {
  return async (dispatch) => {
    try {
      dispatch(requestingData());
      console.log("antes")
      const resp = await fetchAPI();
      console.log("depois")
      return dispatch(receivedData(resp));
    }catch(error){
      return dispatch(failedRequest(error))  
    }
  };
};