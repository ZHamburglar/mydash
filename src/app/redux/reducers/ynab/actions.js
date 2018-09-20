import axios from 'axios';

const YNAB_ROOT_URL ='https://api.youneedabudget.com/v1/budgets/df1017f3-a53e-4fe7-b72c-ea93a77e3339';

// YNAB API:  https://api.youneedabudget.com/v1#/ 
const instance = axios.create({
    baseURL: 'https://api.youneedabudget.com/v1/budgets/',
    timeout: 3000,
    headers: {'Authorization': 'Bearer '+ process.env.YNAB_API_KEY}
});
  
export const GET_YNAB_DATA = (test) => async(dispatch) => {
    try {  
        const query = `${YNAB_ROOT_URL}`
        console.log(test)
        dispatch({ type: 'FETCH_YNAB_DATA' })
        const { data } = await instance.get('/df1017f3-a53e-4fe7-b72c-ea93a77e3339')
        console.log("data", data.data)
        dispatch({ type: 'YNAB_DATA_FOUND', payload: data.data })
        callback();
    } catch(e){
        return {
            type: 'GET_YNAB_ERROR'
        }
    }
}